import React from "react";
import { StyleSheet, Text, View } from "react-native";
export default function Reels({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Watch Reels</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
