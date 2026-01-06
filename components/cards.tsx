import icons from "@/constants/icons";
import images from "@/constants/images";
import { colors } from "@/theme/colors";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
  onPress?: () => void;
}

export const FeaturedCard = ({ onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.featuredView} onPress={onPress}>
      <Image style={styles.featuredImage} source={images.japan}></Image>
      <Image style={styles.gradient} source={images.cardGradient}></Image>

      <View style={styles.ratingView}>
        <Image style={styles.ratingImage} source={icons.star}></Image>
        <Text style={styles.ratingText}>4.5</Text>
      </View>

      <View style={styles.infoView}>
        <Text style={styles.infoText}>Modern Aparment</Text>
        <Text style={styles.infoText2}>22 W 15th St, New York</Text>

        <View style={styles.priceView}>
          <Text style={styles.priceText}>$2,500</Text>
          <Image style={styles.heartImage} source={icons.heart}></Image>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const Card = () => {
  return (
    <View>
      <Text>cards</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  featuredView: {
    flexDirection: "column",
    alignItems: "flex-start",
    width: 220,
    height: 300,
    position: "relative",
  },
  featuredImage: {
    borderRadius: 20,
    width: "100%",
    height: "100%",
  },
  gradient: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    bottom: 0,
    position: "absolute",
  },
  ratingView: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    position: "absolute",
    top: 15,
    right: 15,
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 4,
    gap: 4,
  },
  ratingImage: {
    width: 20,
    height: 20,
  },
  ratingText: {
    fontSize: 10,
    fontFamily: "Rubik-Bold",
    color: colors.primary[300],
  },
  infoView: {
    flexDirection: "column",
    alignItems: "flex-start",
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
  },
  infoText: {
    fontSize: 14,
    fontFamily: "Rubik-ExtraBold",
    color: "white",
  },
  infoText2: {
    fontSize: 10,
    fontFamily: "Rubik-Regular",
    color: "white",
  },
  priceView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  priceText: {
    fontSize: 18,
    fontFamily: "Rubik-ExtraBold",
    color: "white",
  },
  heartImage: {
    width: 25,
    height: 25,
  },
});
