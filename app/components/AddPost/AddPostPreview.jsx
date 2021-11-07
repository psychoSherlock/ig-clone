import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { TouchableRipple } from "react-native-paper";

export default function AddPostPreview() {
  return (
    <TouchableRipple
      onPress={() => {
        console.log("Pressed");
      }}
      style={styles.placeholder}
    >
      <View style={styles.placeholder}>
        <Ionicons
          name="camera-outline"
          size={70}
          color="#808080"
          style={styles.camera}
        />
        <Text
          style={{
            position: "absolute",
            bottom: 20,
            fontSize: 20,
            color: "#808080",
          }}
        >
          Choose an Image
        </Text>
      </View>
    </TouchableRipple>
  );
}

const styles = StyleSheet.create({
  placeholder: {
    width: 150,
    height: 150,
    borderWidth: 2,
    borderColor: "#EFEFEF",

    justifyContent: "center",
    alignItems: "center",
  },

  camera: {
    position: "absolute",
    alignSelf: "center",
  },
});
