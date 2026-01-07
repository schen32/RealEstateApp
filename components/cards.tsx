import icons from "@/constants/icons";
import images from "@/constants/images";
import { colors } from "@/theme/colors";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Models } from "react-native-appwrite";

export interface Property {
  image: string;
  rating: number;
  name: string;
  address: string;
  price: number;
}

interface Props {
  item: Models.Row;
  onPress?: () => void;
}

export const FeaturedCard = ({
  item: { image, rating, name, address, price },
  onPress,
}: Props) => {
  return (
    <TouchableOpacity style={styles.featuredView} onPress={onPress}>
      <Image style={styles.featuredImage} source={{ uri: image }}></Image>
      <Image style={styles.gradient} source={images.cardGradient}></Image>

      <View style={styles.ratingView}>
        <Image style={styles.ratingImage} source={icons.star}></Image>
        <Text style={styles.ratingText}>{rating}</Text>
      </View>

      <View style={styles.infoView}>
        <Text style={styles.infoText}>{name}</Text>
        <Text style={styles.infoText2}>{address}</Text>

        <View style={styles.priceView}>
          <Text style={styles.priceText}>${price}</Text>
          <Image style={styles.heartImage} source={icons.heart}></Image>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const Card = ({
  item: { image, rating, name, address, price },
  onPress,
}: Props) => {
  return (
    <TouchableOpacity style={cardStyles.cardView} onPress={onPress}>
      <Image style={cardStyles.image} source={{ uri: image }}></Image>

      <View style={cardStyles.ratingView}>
        <Image source={icons.star}></Image>
        <Text style={cardStyles.ratingText}>{rating}</Text>
      </View>

      <View style={cardStyles.infoView}>
        <Text style={cardStyles.text1}>{name}</Text>
        <Text style={cardStyles.text2}>{address}</Text>
        <View style={cardStyles.priceView}>
          <Text style={cardStyles.text3}>${price}</Text>
          <Image style={cardStyles.icon} source={icons.heart}></Image>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const cardStyles = StyleSheet.create({
  priceView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: "#191d31",
  },
  infoView: {
    flexDirection: "column",
    marginTop: 5,
  },
  text1: {
    fontSize: 12,
    fontFamily: "Rubik-Bold",
    color: colors.black[300],
  },
  text2: {
    fontSize: 8,
    fontFamily: "Rubik-Regular",
    color: colors.black[200],
  },
  text3: {
    fontSize: 12,
    fontFamily: "Rubik-Bold",
    color: colors.primary[300],
  },
  cardView: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 10,
    position: "relative",

    shadowColor: "rgba(0, 0, 0, 0.7)",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.7,
    shadowRadius: 15,

    elevation: 10,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 20,
  },
  ratingView: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 20,
    top: 20,
    right: 15,
    paddingHorizontal: 8,
    paddingVertical: 4,
    gap: 5,
  },
  ratingText: {
    fontSize: 10,
    fontFamily: "Rubik-Bold",
    color: colors.primary[300],
  },
});

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
