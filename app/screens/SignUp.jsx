import { useNavigation } from "@react-navigation/core";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  GreetingLogo,
  InstaInput,
  SignUpDivider,
  SubmitButton,
} from "../components/Auth/LoginPrompt";

export default function SignUp() {
  const navigation = useNavigation();
  return (
    <View style={styles.main}>
      <StatusBar style="auto" />
      <GreetingLogo marginTop={45} />
      <View style={{ width: "80%" }}>
        <InstaInput
          placeholder="Choose an username"
          type="username"
          autofocus
          capital="none"
        />
        <InstaInput
          placeholder="Email"
          type="emailAddress"
          keyType="email-address"
          capital="none"
          autoCorrect
        />
        <InstaInput
          placeholder="Password"
          type="password"
          capital="none"
          autoCorrect={false}
          secure
        />
        <SubmitButton title="Check it out!" />
      </View>
      <SignUpDivider />

      <View
        style={{
          alignItems: "center",
          marginTop: 40,
          flexDirection: "row",
        }}
      >
        <Text style={{ color: "grey", fontSize: 15 }}>
          Already have an account?
        </Text>
        <TouchableOpacity activeOpacity={0.3}>
          <Text
            style={{ color: "#3797EF", fontSize: 17, fontWeight: "bold" }}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            {" "}
            Log in!
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
  },
});
