import icons from "@/constants/icons";
import images from "@/constants/images";
import { login } from "@/lib/appwrite";
import { colors } from "@/theme/colors";
import React from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignIn() {
  const handleLogin = async () => {
    const result = await login();

    if (result) {
      console.log("login success");
    } else {
      Alert.alert("Error", "Failed to login");
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Image
          source={images.onboarding}
          style={styles.image}
          resizeMode="contain"
        ></Image>

        <Text style={styles.welcomeText}>Welcome to ReState</Text>

        <Text style={styles.introText}>
          Let's Get You Closer to {"\n"}
          <Text style={styles.introText2}>Your Ideal Home</Text>
        </Text>

        <Text style={styles.loginText}>Login to ReState with Google</Text>

        <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
          <View style={styles.loginButtonView}>
            <Image
              source={icons.google}
              style={styles.icon}
              resizeMode="contain"
            ></Image>
            <Text style={styles.loginButtonText}>Continue with Google</Text>
          </View>
        </TouchableOpacity>
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
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    width: "100%",
    height: 600,
  },
  welcomeText: {
    fontSize: 12,
    textAlign: "center",
    textTransform: "uppercase",
    fontFamily: "Rubik-Regular",
    color: colors.black[200],
  },
  introText: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Rubik-Bold",
    color: colors.black[300],
  },
  introText2: {
    color: colors.primary[300],
  },
  loginText: {
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Rubik-Regular",
    color: colors.black[200],
    marginTop: 36,
  },
  loginButton: {
    backgroundColor: "#ffffff",
    borderRadius: 9999,
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 10,
    paddingVertical: 10,
    width: "75%",
  },
  loginButtonView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    height: "75%",
  },
  loginButtonText: {
    fontSize: 14,
    fontFamily: "Rubik-Medium",
    color: colors.black[300],
  },
});
