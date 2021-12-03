import { useNavigation } from "@react-navigation/core";
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
import {
  auth,
  collection,
  createUserWithEmailAndPassword,
  addDoc,
  db,
  updateProfile,
} from "../config/firebase";
import { Alert } from "react-native";

export default function SignUp() {
  const [status, setstatus] = useState(false);
  const navigation = useNavigation();
  const SignUpScheme = Yup.object().shape({
    username: Yup.string()
      .required("😑 What do you expect me to do without an username?")
      .min(4, "Minimum 4 characters required 🙃")
      .max(18, "😱 Thats enough, maximum of 18 is allowed"),
    email: Yup.string()
      .email("🙄 I asked for email!")
      .required(
        "Email is required so that I can verify you are a human and not cheating on me 😒"
      ),
    password: Yup.string()
      .required("😵 Is it hard to understand that a password is required?")
      .min(6, "😅 Passwords must have at least 6 characters"),
  });

  const onSignUp = (username, email, password) => {
    setstatus(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        updateProfile(authUser.user, {
          displayName: username,
          photoURL: `https://api.multiavatar.com/${username}.png`,
        });

        addDoc(collection(db, "users"), {
          // Add user to database
          user_uid: authUser.user.uid,
          username: username,
          email: authUser.user.email,
          profile_pic: `https://api.multiavatar.com/${username}.png`,
        }).catch((err) => {
          console.log(err.message);
          setstatus(false);
        });

        auth
          .signOut()
          .then(() => {
            setstatus(false);
            Alert.alert(
              " ✅ Success",
              "Account created succesfully. \n👉 Please login to continue"
            );
            navigation.navigate("Login");
          })
          .catch((err) => {
            setstatus(false);
            Alert.alert(" 🤦‍♂️ ", err.message);
          });
      })

      .catch((error) => {
        Alert.alert(" 🤕 Whoops ", error.message);
        setstatus(false);
      });
  };

  return (
    <View style={styles.main}>
      <StatusBar style="auto" />
      <GreetingLogo marginTop={45} />
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={SignUpScheme}
        onSubmit={(values) => {
          onSignUp(values.username, values.email, values.password);
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
              placeholder="Choose an username"
              type="username"
              capital="none"
              onChangeText={handleChange("username")}
              onBlur={handleBlur("username")}
              value={values.username}
              style={{
                borderColor:
                  1 > values.username.length || values.username.length > 4
                    ? "grey"
                    : "red",

                borderWidth:
                  1 > values.username.length || values.username.length > 4
                    ? 0.4
                    : 1,
              }}
            />
            {touched.username && errors.username && (
              <Text style={styles.error}>{errors.username}</Text>
            )}
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
              capital="none"
              autoCorrect={false}
              secure
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              style={{
                borderColor:
                  1 > values.password.length || values.password.length > 5
                    ? "grey"
                    : "red",

                borderWidth:
                  1 > values.password.length || values.password.length > 5
                    ? 0.4
                    : 1,
              }}
            />
            {errors.password && touched.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}
            <SubmitButton
              title="Check it out!"
              onPress={handleSubmit}
              disabled={!isValid}
              loading={status}
            />
          </View>
        )}
      </Formik>
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
  error: {
    fontSize: 12,
    color: "red",
  },
});
