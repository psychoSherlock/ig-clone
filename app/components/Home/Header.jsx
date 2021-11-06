import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { IconButton } from "react-native-paper";
export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerLeft}>
        <Image
          source={require("../../assets/images/custom_logo.png")}
          style={styles.logo}
        />
      </View>

      <View style={styles.headerRight}>
        <IconButton
          icon="plus-box-outline"
          color="black"
          size={30}
          onPress={() => alert("Add New Post")}
        />
        <View style={styles.unreadBadge}>
          <Text style={styles.unreadText}>11</Text>
        </View>
        <IconButton
          icon="facebook-messenger"
          color="black"
          size={30}
          onPress={() => alert("Messenger")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",

    maxHeight: 80,
    marginTop: 10,
  },
  logo: {
    resizeMode: "contain",
    width: 200,
    height: 100,
    left: 7,
  },
  headerLeft: {
    alignSelf: "flex-start",
  },
  headerRight: {
    flexDirection: "row",
  },
  unreadBadge: {
    backgroundColor: "#ff3250",
    minWidth: 25,
    height: 18,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
    position: "absolute",
    right: 10,
    top: 8,
  },
  unreadText: {
    color: "white",
    fontWeight: "600",
  },
});
