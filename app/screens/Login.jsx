import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  GreetingLogo,
  InstaInput,
  SignUpDivider,
  SubmitButton,
} from "../components/Auth/LoginPrompt";
import { Formik } from "formik";
import * as Yup from "yup";

export default function Login({ navigation }) {
  const LoginScheme = Yup.object().shape({
    username: Yup.string().required(
      "😑 What am I supposed to do without an username?"
    ),
    password: Yup.string()
      .required("😵 Is it hard to understand that a password is required?")
      .min(6, "😅 Passwords must have at least 6 characters"),
  });
  return (
    <View style={styles.main}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <GreetingLogo marginTop={100} />
        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={LoginScheme}
          // validateOnMount
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            isValid,
            errors,
            touched,
          }) => (
            <View style={{ width: "80%" }}>
              <InstaInput
                placeholder="Username"
                type="emailAddress"
                autofocus
                capital="none"
                caretHidden={false}
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
              />
              {touched.username && errors.username && (
                <Text style={styles.error}>{errors.username}</Text>
              )}
              <InstaInput
                placeholder="Password"
                type="password"
                secure
                capital="none"
                autoCorrect={false}
                autofocus={false}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                style={{
                  borderColor:
                    1 > values.password.length || values.password.length > 6
                      ? "grey"
                      : "red",

                  borderWidth:
                    1 > values.password.length || values.password.length > 6 // If value is less than one, do nothing, else check if it is less than 6 and i it is , change border
                      ? 0.4
                      : 1,
                }}
              />
              {touched.password && errors.password && (
                <Text style={styles.error}>{errors.password}</Text>
              )}
              <View style={{ alignItems: "flex-end", marginVertical: 10 }}>
                <TouchableOpacity activeOpacity={0.4}>
                  <Text style={{ color: "#3797EF" }}>Forgot password?</Text>
                </TouchableOpacity>
              </View>
              <SubmitButton
                title="Log In"
                onPress={handleSubmit}
                disabled={!isValid} // Opposite of valid
              />
            </View>
          )}
        </Formik>

        <SignUpDivider />

        <View
          style={{ alignItems: "center", marginTop: 40, flexDirection: "row" }}
        >
          <Text style={{ color: "grey", fontSize: 15 }}>
            Don't have an account?
          </Text>
          <TouchableOpacity activeOpacity={0.3}>
            <Text
              style={{ color: "#3797EF", fontSize: 17, fontWeight: "bold" }}
              onPress={() => {
                navigation.navigate("Signup");
              }}
            >
              {" "}
              Sign Up!
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            color: "red",
            fontWeight: "bold",
            fontSize: 10,
            marginTop: 10,
          }}
        >
          Plese DO NOT USE YOUR REAL INSTAGRAM USERNAME/PASSWORD/ACCOUNT.
        </Text>
        <Text style={{ fontSize: 13, color: "grey", marginHorizontal: 15 }}>
          Even though your data is safe with me as even I cant read your
          passwords, its always a precuation you should take against phishing
          attacks. This app is just a demo of my creativity.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    // flex: 1,
    alignItems: "center",
  },
  error: {
    fontSize: 12,
    color: "red",
  },
});
