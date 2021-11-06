import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function AddPost() {
  return (
    <View style={styles.Main}>
      <StatusBar style="auto" />
      <Text>Add Post</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Main: {
    flex: 1,
    backgroundColor: "white",
  },
});
