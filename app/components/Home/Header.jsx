import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { IconButton } from "react-native-paper";
import { auth } from "../../config/firebase";
export default function Header() {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerLeft}>
        <TouchableOpacity
          activeOpacity={0.5}
          onLongPress={() => {
            auth.signOut().catch((error) => {
              Alert.alert("🤦‍♂️", error.message);
            });
          }}
        >
          <Image
            source={require("../../assets/images/custom_logo.png")}
            style={styles.logo}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.headerRight}>
        <IconButton
          // icon="plus-box-outline"
          color="black"
          size={30}
          onPress={() => navigation.navigate("AddPost")}
          icon={({ size, color }) => (
            <Ionicons size={size} color={color} name="ios-add-circle-outline" />
          )}
          style={{ left: 10 }}
        />
        <View style={styles.unreadBadge}>
          <Text style={styles.unreadText}>11</Text>
        </View>
        <IconButton
          size={28}
          onPress={() => alert("Messenger")}
          icon={({ size }) => (
            <Image
              source={require("../../assets/icons/messenger.png")}
              style={{
                width: size,
                height: size,
              }}
            />
          )}
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
    right: 5,
    top: 5,
  },
  unreadText: {
    color: "white",
    fontWeight: "600",
  },
});
