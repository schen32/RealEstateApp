import { Card, FeaturedCard } from "@/components/cards";
import Filters from "@/components/filters";
import Search from "@/components/search";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { colors } from "@/theme/colors";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.leftRightView}>
        <View style={styles.greetingView2}>
          <Image style={styles.avatarImage} source={images.avatar}></Image>
          <View style={styles.greetingTextView}>
            <Text style={styles.greetingText1}>Good Morning</Text>
            <Text style={styles.greetingText2}>Adrian</Text>
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

      <View style={styles.featuredCards}>
        <FeaturedCard></FeaturedCard>
        <FeaturedCard></FeaturedCard>
      </View>

      <View style={styles.leftRightView}>
        <Text style={styles.boldText}>Our Recommendation</Text>
        <TouchableOpacity>
          <Text style={styles.primaryText}>See All</Text>
        </TouchableOpacity>
      </View>
      <Filters></Filters>

      <View style={styles.featuredCards}>
        <Card></Card>
        <Card></Card>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  featuredCards: {
    flexDirection: "row",
    gap: 15,
  },
  safe: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    gap: 10,
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
