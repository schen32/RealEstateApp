import { useGlobalContext } from "@/lib/global-provider";
import { Redirect, Slot } from "expo-router";
import { ActivityIndicator, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AppLayout() {
  const { loading, isLoggedIn } = useGlobalContext();

  if (loading) {
    return (
      <SafeAreaView style={styles.safe}>
        <ActivityIndicator
          className="text-primary-300"
          size="large"
        ></ActivityIndicator>
      </SafeAreaView>
    );
  }

  if (!isLoggedIn) return <Redirect href="/sign-in"></Redirect>;
  return <Slot></Slot>;
}

const styles = StyleSheet.create({
  safe: {
    backgroundColor: "#ffffff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
