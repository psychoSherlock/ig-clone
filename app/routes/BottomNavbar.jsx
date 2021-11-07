import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import React from "react";
import Home from "../screens/Home";
import Discover from "../screens/Discover";
import Reels from "../screens/Reels";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";
import { Image } from "react-native";

const Nav = createBottomTabNavigator();

export default function BottomNavbar() {
  return (
    <Nav.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
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
        name="Discover"
        component={Discover}
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
                width: focused ? 30 : 28,
                height: focused ? 30 : 28,
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
