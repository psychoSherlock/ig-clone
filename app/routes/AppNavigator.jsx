import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import BottomNavbar from "./BottomNavbar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddPost from "../screens/AddPost";
import Comments from "../screens/Comments";

const Main = createNativeStackNavigator();

export default function AppRoutes() {
  const islogged = false;
  return (
    <NavigationContainer>
      <Main.Navigator initialRouteName="Login">
        {islogged ? (
          <Main.Group>
            <Main.Screen
              name="LoggedIn"
              component={BottomNavbar}
              options={{
                headerShown: false,
                animation: "slide_from_bottom",
              }}
            />
            <Main.Screen
              name="AddPost"
              component={AddPost}
              options={{
                headerTitle: "Add New Post",
                animation: "slide_from_right",
              }}
            />

            <Main.Screen
              name="Comments"
              component={Comments}
              options={{
                animation: "slide_from_bottom",
              }}
            />
          </Main.Group>
        ) : (
          <Main.Group>
            <Main.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Main.Screen
              name="Signup"
              component={SignUp}
              options={{
                headerShown: false,
                animation: "slide_from_right",
                gestureEnabled: true,
              }}
            />
          </Main.Group>
        )}
      </Main.Navigator>
    </NavigationContainer>
  );
}
