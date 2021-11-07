import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function AddCaptions() {
  return (
    <View>
      <TextInput
        multiline
        placeholder="Write a caption"
        autoCorrect
        style={styles.caption}
        textAlignVertical="top"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  caption: {
    borderWidth: 1,
    width: 200,
    height: 150,
    borderColor: "#E6E6E3",
  },
});
