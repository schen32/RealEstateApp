import { Card, FeaturedCard } from "@/components/cards";
import Filters from "@/components/filters";
import Search from "@/components/search";
import icons from "@/constants/icons";
import { useGlobalContext } from "@/lib/global-provider";
import seed from "@/lib/seed";
import { colors } from "@/theme/colors";
import React from "react";
import {
  Button,
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

  return (
    <SafeAreaView style={styles.safe}>
      <Button title="seed" onPress={seed}></Button>
      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={({ item }) => <Card></Card>}
        keyExtractor={(item) => item.toString()}
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
              data={[1, 2, 3]}
              renderItem={({ item }) => <FeaturedCard></FeaturedCard>}
              keyExtractor={(item) => item.toString()}
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
    backgroundColor: "white",
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
