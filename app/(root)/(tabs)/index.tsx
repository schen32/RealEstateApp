import { Card, FeaturedCard } from "@/components/cards";
import Filters from "@/components/filters";
import Search from "@/components/search";
import icons from "@/constants/icons";
import { getLatestProperties, getProperties } from "@/lib/appwrite";
import { useGlobalContext } from "@/lib/global-provider";
import { useAppwrite } from "@/lib/useAppwrite";
import { colors } from "@/theme/colors";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { user } = useGlobalContext();
  const params = useLocalSearchParams<{ query?: string; filter?: string }>();

  const { data: latestProperties, loading: latestPropertiesLoading } =
    useAppwrite({
      fn: getLatestProperties,
    });

  const {
    data: properties,
    loading,
    refetch,
  } = useAppwrite({
    fn: getProperties,
    params: {
      filter: params.filter!,
      query: params.query!,
      limit: 6,
    },
    skip: true,
  });

  const handleCardPress = (id: string) => router.push(`/properties/${id}`);

  useEffect(() => {
    refetch({
      filter: params.filter!,
      query: params.query!,
      limit: 6,
    });
  }, [params.filter, params.query]);

  return (
    <SafeAreaView style={styles.safe}>
      <FlatList
        data={properties}
        renderItem={({ item }) => (
          <Card item={item} onPress={() => handleCardPress(item.$id)}></Card>
        )}
        keyExtractor={(item) => item.$id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.verticalFlatList}
        columnWrapperStyle={styles.featuredCards}
        ListHeaderComponentStyle={styles.verticalFlatList}
        ListHeaderComponent={
          <>
            <View style={styles.leftRightView}>
              <View style={styles.greetingView2}>
                <Image
                  style={styles.avatarImage}
                  source={{ uri: user?.avatar }}
                ></Image>
                <View style={styles.greetingTextView}>
                  <Text style={styles.greetingText1}>Good Morning</Text>
                  <Text style={styles.greetingText2}>{user?.name}</Text>
                </View>
              </View>
              <Image style={styles.icon} source={icons.bell}></Image>
            </View>
            <Search></Search>

            <View style={styles.leftRightView}>
              <Text style={styles.boldText}>Featured</Text>
              <TouchableOpacity>
                <Text style={styles.primaryText}>See All</Text>
              </TouchableOpacity>
            </View>

            <FlatList
              data={latestProperties}
              renderItem={({ item }) => (
                <FeaturedCard
                  item={item}
                  onPress={() => handleCardPress(item.$id)}
                ></FeaturedCard>
              )}
              keyExtractor={(item) => item.$id}
              horizontal
              bounces={false}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.featuredCards}
            ></FlatList>

            <View style={styles.leftRightView}>
              <Text style={styles.boldText}>Our Recommendation</Text>
              <TouchableOpacity>
                <Text style={styles.primaryText}>See All</Text>
              </TouchableOpacity>
            </View>
            <Filters></Filters>
          </>
        }
      ></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  verticalFlatList: {
    gap: 10,
  },
  featuredCards: {
    flexDirection: "row",
    gap: 15,
  },
  safe: {
    backgroundColor: "hsl(0, 0%, 100%)",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  leftRightView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  greetingView2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
  },
  avatarImage: {
    width: 50,
    height: 50,
    borderRadius: 9999,
  },
  greetingTextView: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  greetingText1: {
    fontSize: 12,
    fontFamily: "Rubik-Regular",
    color: colors.black[100],
  },
  greetingText2: {
    fontSize: 14,
    fontFamily: "Rubik-Medium",
    color: colors.black[300],
  },
  icon: {
    width: 20,
    height: 20,
  },
  boldText: {
    fontSize: 16,
    fontFamily: "Rubik-Bold",
    color: colors.black[300],
  },
  primaryText: {
    fontSize: 14,
    fontFamily: "Rubik-Bold",
    color: colors.primary[300],
  },
});
