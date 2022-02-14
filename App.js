import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import "react-native-gesture-handler";
import AppRoutes from "./app/routes/GlobalNavigator";
import { LogBox } from "react-native";
// import cloudinary from "cloudinary/cloudinary";
// import cloudConf from "./app/config/cloudinary";

// cloudinary.config(cloudConf);

LogBox.ignoreLogs(["Setting a timer"]); // Ignore both of these firebase warning
LogBox.ignoreLogs(["AsyncStorage has been extracted"]);

export default function App() {
  return <AppRoutes />;
}
