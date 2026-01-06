import { categories } from "@/constants/data";
import { colors } from "@/theme/colors";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";

const filters = () => {
  const params = useLocalSearchParams<{ filter?: string }>();
  const [selectedCategory, setSelectedCategory] = useState(
    params.filter || "All"
  );

  const handleCategory = (category: string) => {};

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {categories.map((item, index) => (
        <TouchableOpacity
          onPress={() => handleCategory(item.category)}
          key={index}
          style={[
            styles.filterContainer,
            selectedCategory === item.category
              ? styles.filterSelected
              : styles.filterNotSelected,
          ]}
        >
          <Text
            style={[
              styles.filterText,
              selectedCategory === item.category
                ? styles.filterTextSelected
                : styles.filterTextNotSelected,
            ]}
          >
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default filters;

const styles = StyleSheet.create({
  filterText: {
    fontSize: 12,
  },
  filterTextSelected: {
    fontFamily: "Rubik-Bold",
    color: "white",
  },
  filterTextNotSelected: {
    fontFamily: "Rubik-Regular",
    color: colors.black[300],
  },
  filterSelected: {
    backgroundColor: colors.primary[300],
  },
  filterNotSelected: {
    backgroundColor: colors.primary[100],
    borderWidth: 1,
    borderColor: colors.primary[200],
  },
  filterContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    borderRadius: 20,
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginRight: 10,
  },
});
