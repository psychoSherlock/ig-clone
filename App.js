// import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import BottomNavbar from "./app/components/BottomNavbar";
import AddPost from "./app/screens/AddPost";

import Home from "./app/screens/Home";
import Login from "./app/screens/Login";

export default function App() {
  return (
    // <NavigationContainer>
    //   <BottomNavbar />
    // </NavigationContainer>
    <Login />
  );
}
