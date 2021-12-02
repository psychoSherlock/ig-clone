import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import BottomNavbar from "./BottomNavbar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddPost from "../screens/AddPost";
import Comments from "../screens/Comments";
import { auth } from "../config/firebase";

const SignedOut = createNativeStackNavigator();
const LoggedIn = createNativeStackNavigator();

export const LoggedInNavigator = () => {
  return (
    <LoggedIn.Navigator initialRouteName="HomeNavbar">
      <LoggedIn.Screen
        name="HomeNavbar"
        component={BottomNavbar}
        options={{
          headerShown: false,
          animation: "slide_from_bottom",
        }}
      />
      <LoggedIn.Screen
        name="AddPost"
        component={AddPost}
        options={{
          headerTitle: "Add New Post",
          animation: "slide_from_right",
        }}
      />

      <LoggedIn.Screen
        name="Comments"
        component={Comments}
        options={{
          animation: "slide_from_bottom",
        }}
      />
    </LoggedIn.Navigator>
  );
};

export const SignedOutNavigator = () => {
  return (
    <SignedOut.Navigator initialRouteName="Login">
      <SignedOut.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <SignedOut.Screen
        name="Signup"
        component={SignUp}
        options={{
          headerShown: false,
          animation: "slide_from_right",
          gestureEnabled: true,
        }}
      />
    </SignedOut.Navigator>
  );
};
export default function AppRoutes() {
  const [currentUser, setcurrentUser] = useState(null);

  const userHandler = (user) =>
    user ? setcurrentUser(user) : setcurrentUser(null);

  useEffect(() => auth.onAuthStateChanged((user) => userHandler(user)), []);

  return (
    <NavigationContainer>
      {currentUser ? <LoggedInNavigator /> : <SignedOutNavigator />}
    </NavigationContainer>
  );
}
