import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginPrompt from "../components/Login/LoginPrompt";

export default function Login() {
  return (
    <View style={styles.main}>
      <StatusBar style="auto" />
      <LoginPrompt />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "white",
  },
});
