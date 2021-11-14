import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import "react-native-gesture-handler";
import AppRoutes from "./app/routes/GlobalNavigator";

export default function App() {
  return <AppRoutes />;
}
