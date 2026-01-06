import icons from "@/constants/icons";
import { colors } from "@/theme/colors";
import { router, useLocalSearchParams, usePathname } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useDebouncedCallback } from "use-debounce";

const search = () => {
  const path = usePathname();
  const params = useLocalSearchParams<{ query?: string }>();
  const [search, setSearch] = useState(params.query);

  const debouncedSearch = useDebouncedCallback(
    (text: string) => router.setParams({ query: text }),
    500
  );

  const handleSearch = (text: string) => {
    setSearch(text);
    debouncedSearch(text);
  };

  return (
    <View style={styles.searchView}>
      <View style={styles.searchView2}>
        <Image style={styles.icon} source={icons.search}></Image>
        <TextInput
          style={styles.searchTextInput}
          value={search}
          onChangeText={handleSearch}
          placeholder="Search for anything"
          placeholderTextColor={colors.black[300]}
        ></TextInput>
      </View>

      <TouchableOpacity>
        <Image source={icons.filter} style={styles.icon}></Image>
      </TouchableOpacity>
    </View>
  );
};

export default search;

const styles = StyleSheet.create({
  searchView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: colors.accent[100],
    borderColor: colors.primary[100],
    marginTop: 10,
    paddingHorizontal: 5,
    paddingVertical: 1,
  },
  searchView2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 5,
  },
  icon: {
    width: 20,
    height: 20,
  },
  searchTextInput: {
    fontSize: 12,
    fontFamily: "Rubik-Regular",
  },
});
