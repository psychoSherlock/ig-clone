import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import React from "react";
import Home from "../screens/Home";
import Browse from "../screens/Browse";
import Reels from "../screens/Reels";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";
import { Image } from "react-native";

const Nav = createBottomTabNavigator();

export default function BottomNavbar() {
  return (
    <Nav.Navigator
      tabBarOptions={{
        showLabel: false,
      }}
      initialRouteName="Home"
    >
      <Nav.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../assets/icons/home.png")
                  : require("../assets/icons/home-outline.png")
              }
              style={{
                width: 26,
                height: 26,
                resizeMode: "contain",
              }}
            />
          ),
        }}
      />
      <Nav.Screen
        name="Browse"
        component={Browse}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../assets/icons/magnify-medium.png")
                  : require("../assets/icons/magnify-low.png")
              }
              style={{
                width: 25,
                height: 25,
                resizeMode: "contain",
              }}
            />
          ),
        }}
      />
      <Nav.Screen
        name="Reels"
        component={Reels}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../assets/icons/reels-colored.png")
                  : require("../assets/icons/reels-outline.png")
              }
              style={{
                width: 32,
                height: 32,
                resizeMode: "contain",
              }}
            />
          ),
        }}
      />
      <Nav.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              color="black"
              size={28}
              name={focused ? "md-heart-sharp" : "md-heart-outline"}
            />
          ),
        }}
      />
      <Nav.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={{
                uri: "https://psychosherlock.github.io/assets/images/toonapp.jpg",
              }}
              style={{
                width: 28,
                height: 28,
                borderColor: "black",
                borderWidth: focused ? 2 : 1,
                borderRadius: 50,
              }}
            />
          ),
        }}
      />
    </Nav.Navigator>
  );
}
