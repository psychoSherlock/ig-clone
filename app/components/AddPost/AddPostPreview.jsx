import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { TouchableRipple } from "react-native-paper";

export default function AddPostPreview({ onPress }) {
  return (
    <TouchableRipple onPress={onPress} style={styles.placeholder}>
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

export const ImagePreview = ({ sourceUri, onPress }) => {
  return (
    <TouchableRipple style={styles.thumbnailHolder} onPress={onPress}>
      <Image source={{ uri: sourceUri }} style={styles.thumbnail} />
    </TouchableRipple>
  );
};

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
  thumbnailHolder: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#EFEFEF",
  },
  thumbnail: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
});
