import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native";
import AddCaptions from "../components/AddPost/AddCaptions";
import AddPostPreview from "../components/AddPost/AddPostPreview";
import { SignUpDivider } from "../components/Auth/LoginPrompt";

export default function AddPost({ navigation }) {
  return (
    <View style={styles.Main}>
      <StatusBar style="auto" />
      <View
        style={{
          flexDirection: "row",
          margin: 10,
          justifyContent: "space-evenly",
        }}
      >
        <AddPostPreview />
        <AddCaptions />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Main: {
    flex: 1,
    backgroundColor: "white",
  },
});
