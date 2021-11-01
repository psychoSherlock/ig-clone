import React from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "../components/Home/Header";
import Stories from "../components/Home/Stories";

export default function Home() {
  return (
    <View style={styles.Main}>
      <StatusBar style="auto" />
      <Header />
      <Stories />
    </View>
  );
}

const styles = StyleSheet.create({
  Main: {
    flex: 1,
    backgroundColor: "white",
  },
});
