import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import BottomNavbar from "./BottomNavbar";

const Main = createStackNavigator();
const AuthStack = createStackNavigator();

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
        }}
      />
    </AuthStack.Navigator>
  );
}

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Main.Navigator initialRouteName="FirstScreen">
        <Main.Screen
          name="AuthScreen"
          component={AuthScreen}
          options={{ headerShown: false }}
        />
        <Main.Screen
          name="LoggedIn"
          component={BottomNavbar}
          options={{
            headerShown: false,
          }}
        />
      </Main.Navigator>
    </NavigationContainer>
  );
}
