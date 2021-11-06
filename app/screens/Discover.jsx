import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchHeader from "../components/Discover/SearchHeader";
import Gallery from "../components/Discover/Gallery";

export default function Discover() {
  return (
    <View style={styles.Main}>
      <StatusBar style="auto" />
      <SearchHeader />
      <Gallery />
    </View>
  );
}

const styles = StyleSheet.create({
  Main: {
    flex: 1,
    backgroundColor: "white",
    marginBottom: 50,
  },
});
