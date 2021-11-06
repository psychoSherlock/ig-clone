import React from "react";
import {
  Image as NativeImage,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

export default function SearchHeader() {
  return (
    <View style={styles.headerContainer}>
      <NativeImage
        source={require("../../assets/icons/magnify-low.png")}
        style={styles.searchIcon}
      />
      <TextInput placeholder="Search" style={styles.searchInput} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 35,
    flexDirection: "row",
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "flex-start",
  },

  searchIcon: {
    width: 16,
    height: 16,
    position: "absolute",
    zIndex: 100,
    left: 7,
  },
  searchInput: {
    backgroundColor: "#EFEFEF",
    width: "100%",
    height: 35,
    paddingHorizontal: 17,
    borderRadius: 10,
    paddingLeft: 35,
  },
});
