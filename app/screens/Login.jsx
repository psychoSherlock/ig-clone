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
import Validator from "email-validator";
import { signInWithEmailAndPassword, auth } from "../config/firebase.js";
import { Alert } from "react-native";

export default function Login({ navigation }) {
  const LoginScheme = Yup.object().shape({
    email: Yup.string()
      .email("🙄 I asked for email!")
      .required(
        "Email is required so that I can verify you are a human and not cheating on me 😒"
      ),
    password: Yup.string()
      .required("😵 Is it hard to understand that a password is required?")
      .min(6, "😅 Passwords must have at least 6 characters"),
  });

  const onLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {})
      .catch((error) => {
        Alert.alert(" Woops 🤒 ", error.message);
      });
  };

  return (
    <View style={styles.main}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <GreetingLogo marginTop={100} />
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginScheme}
          // validateOnMount
          onSubmit={(values) => {
            onLogin(values.email, values.password);
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
                placeholder="Email"
                type="emailAddress"
                keyType="email-address"
                capital="none"
                autoCorrect
                caretHidden={false}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                style={{
                  borderColor:
                    values.email.length < 1 || Validator.validate(values.email)
                      ? "grey"
                      : "red",
                  borderWidth:
                    values.email.length < 1 || Validator.validate(values.email)
                      ? 0.4
                      : 1,
                }}
              />
              {touched.email && errors.email && (
                <Text style={styles.error}>{errors.email}</Text>
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
          Plese DO NOT USE YOUR REAL INSTAGRAM PASSWORD/ACCOUNT.
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
