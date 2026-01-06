import icons from "@/constants/icons";
import { colors } from "@/theme/colors";
import { Tabs } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const TabIcon = ({
  focused,
  icon,
  title,
}: {
  focused: boolean;
  icon: any;
  title: string;
}) => (
  <View style={styles.iconView}>
    <Image
      style={styles.icon}
      source={icon}
      tintColor={focused ? "#0061ff" : "#666876"}
      resizeMode="contain"
    ></Image>
    <Text
      style={[
        styles.iconText,
        focused ? styles.iconTextFocused : styles.iconTextNotFocused,
      ]}
    >
      {title}
    </Text>
  </View>
);

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          borderTopColor: "#0061FF1A",
          borderTopWidth: 1,
          minHeight: 70,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.home} focused={focused} title="Home"></TabIcon>
          ),
        }}
      ></Tabs.Screen>

      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              icon={icons.search}
              focused={focused}
              title="Explore"
            ></TabIcon>
          ),
        }}
      ></Tabs.Screen>

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              icon={icons.person}
              focused={focused}
              title="Profile"
            ></TabIcon>
          ),
        }}
      ></Tabs.Screen>
    </Tabs>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({
  iconView: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  icon: {
    height: 24,
  },
  iconText: {
    width: "100%",
    fontSize: 8,
  },
  iconTextFocused: {
    color: colors.primary[300],
    fontFamily: "Rubik-Medium",
  },
  iconTextNotFocused: {
    color: colors.black[200],
    fontFamily: "Rubik-Regular",
  },
});
