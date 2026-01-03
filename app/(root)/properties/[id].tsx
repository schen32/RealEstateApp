import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Property() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text> Property {id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
