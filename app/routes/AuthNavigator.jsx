import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import BottomNavbar from "./BottomNavbar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Main = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();

function AuthScreen({ navigation }) {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Signup"
        component={SignUp}
        options={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      />
    </AuthStack.Navigator>
  );
}

export default function AppRoutes() {
  const islogged = true;
  return (
    <NavigationContainer>
      <Main.Navigator initialRouteName="FirstScreen">
        {islogged ? (
          <Main.Screen
            name="LoggedIn"
            component={BottomNavbar}
            options={{
              headerShown: false,
              animation: "slide_from_bottom",
            }}
          />
        ) : (
          <Main.Screen
            name="AuthScreen"
            component={AuthScreen}
            options={{ headerShown: false, animation: "slide_from_bottom" }}
          />
        )}
      </Main.Navigator>
    </NavigationContainer>
  );
}
