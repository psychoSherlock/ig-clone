import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import BottomNavbar from "./app/components/BottomNavbar";

import Home from "./app/screens/Home";

export default function App() {
  return (
    <NavigationContainer>
      <BottomNavbar />
    </NavigationContainer>
  );
}
