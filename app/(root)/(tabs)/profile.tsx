import icons from "@/constants/icons";
import images from "@/constants/images";
import { colors } from "@/theme/colors";
import React from "react";
import {
  Image,
  ImageSourcePropType,
  ScrollView,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface SettingItemProps {
  icon: ImageSourcePropType;
  title: string;
  onPress?: () => void;
  textStyle?: StyleProp<TextStyle>;
  showArrow?: boolean;
}

const SettingItem = ({
  icon,
  title,
  onPress,
  textStyle,
  showArrow = true,
}: SettingItemProps) => (
  <TouchableOpacity onPress={onPress} style={styles.settingItemContainer}>
    <View style={styles.settingItemContainer2}>
      <Image style={styles.settingItemImage} source={icon}></Image>
      <Text style={[styles.settingItemText, textStyle]}>{title}</Text>
    </View>

    {showArrow && <Image source={icons.rightArrow} style={styles.icon}></Image>}
  </TouchableOpacity>
);

export default function Profile() {
  const handleLogout = async () => {};

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Profile</Text>
          <Image style={styles.icon} source={icons.bell}></Image>
        </View>

        <View style={styles.avatarContainer}>
          <View style={styles.avatarContainer2}>
            <Image style={styles.avatarImage} source={images.avatar}></Image>
            <TouchableOpacity style={styles.editIconButton}>
              <Image style={styles.editIcon} source={icons.edit}></Image>
            </TouchableOpacity>
            <Text style={styles.nameText}>Adrian</Text>
          </View>
        </View>

        <View style={styles.settingsContainer}>
          <SettingItem icon={icons.calendar} title="My Bookings"></SettingItem>
          <SettingItem icon={icons.wallet} title="Payments"></SettingItem>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    backgroundColor: "#ffffff",
    flex: 1,
  },
  scroll: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titleText: {
    fontSize: 14,
    fontFamily: "Rubik-Bold",
  },
  icon: {
    width: 20,
    height: 20,
  },
  avatarContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  avatarContainer2: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  avatarImage: {
    width: 150,
    height: 150,
    position: "relative",
    borderRadius: 9999,
  },
  editIcon: {
    width: 30,
    height: 30,
  },
  editIconButton: {
    position: "absolute",
    bottom: 40,
    right: -10,
  },
  nameText: {
    marginTop: 5,
    fontSize: 18,
    fontFamily: "Rubik-Bold",
  },
  settingsContainer: {
    flexDirection: "column",
    marginTop: 20,
  },
  settingItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  settingItemContainer2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
  },
  settingItemImage: {
    width: 40,
    height: 40,
  },
  settingItemText: {
    fontSize: 14,
    fontFamily: "Rubik-Medium",
    color: colors.black[300],
  },
});
