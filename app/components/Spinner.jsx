import React from "react";
import { ActivityIndicator } from "react-native-paper";

export default function LoadingSpinner({ size }) {
  return <ActivityIndicator animating color="grey" size={size} />;
}
