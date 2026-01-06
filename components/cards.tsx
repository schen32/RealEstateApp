import images from "@/constants/images";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
  onPress?: () => void;
}

export const FeaturedCard = ({ onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.featuredView} onPress={onPress}>
      <Image style={styles.featuredImage} source={images.japan}></Image>
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
    width: 200,
    height: 300,
    position: "relative",
  },
  featuredImage: {
    borderRadius: 20,
    width: "100%",
    height: "100%",
  },
});
