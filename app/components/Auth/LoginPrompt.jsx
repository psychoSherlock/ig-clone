import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "react-native-elements";
import { Divider } from "react-native-elements/dist/divider/Divider";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function LoginPrompt() {
  const navigation = useNavigation();
  return (
    <View style={styles.main}>
      <GreetingLogo marginTop={100} />
      <View style={{ width: "80%" }}>
        <InstaInput
          placeholder="Username or Email"
          type="emailAddress"
          autofocus
          capital="none"
        />
        <InstaInput
          placeholder="Password"
          type="password"
          secure
          capital="none"
          autoCorrect={false}
          autofocus={false}
        />
        <Text style={{ color: "red", fontWeight: "bold", fontSize: 10 }}>
          Plese DO NOT USE YOUR REAL INSTAGRAM USERNAME/PASSWORD/ACCOUNT.
        </Text>
        <Text style={{ fontSize: 13, color: "grey" }}>
          Even though your data is safe with me as even I cant read your
          passwords, its always a precuation you should take against phishing
          attacks. This app is just a demo of my creativity.
        </Text>
        <View style={{ alignItems: "flex-end", marginVertical: 10 }}>
          <TouchableOpacity activeOpacity={0.4}>
            <Text style={{ color: "#3797EF" }}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
        <SubmitButton title="Log In" />
      </View>

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
    </View>
  );
}

export const GreetingLogo = ({ marginTop }) => (
  <View style={{ alignItems: "center", justifyContent: "center" }}>
    <Image
      source={require("../../assets/default/icon.png")}
      style={[styles.icon, { marginTop: marginTop }]}
    />
    <Image
      source={require("../../assets/images/custom_logo.png")}
      style={styles.logo}
    />
  </View>
);

export const InstaInput = ({
  placeholder,
  type,
  secure,
  keyType,
  autofocus,
  capital,
  autoCorrect,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      textContentType={type}
      style={styles.textField}
      secureTextEntry={secure}
      autoFocus={autofocus}
      autoCorrect={autoCorrect}
      autoCapitalize={capital}
      keyboardType={keyType}
    />
  );
};

export const SignUpDivider = () => (
  <View style={{ marginTop: 40, width: "90%", justifyContent: "center" }}>
    <Divider orientation="horizontal" color="grey" />
    <Text
      style={{
        position: "absolute",

        backgroundColor: "white",
        zIndex: 200,
        color: "grey",
        width: 40,
        textAlign: "center",
        alignSelf: "center",
      }}
    >
      OR
    </Text>
  </View>
);

export const SubmitButton = ({ title, loading, disabled, onPress }) => (
  <Button
    title={title}
    buttonStyle={styles.submit}
    loading={loading}
    disabled={disabled}
    disabledStyle={{ backgroundColor: "#3797EF" }}
    disabledTitleStyle={{ color: "white", opacity: 0.3 }}
    onPress={onPress}
  />
);

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
  },
  icon: {
    resizeMode: "contain",
    width: 100,
    height: 100,
  },
  logo: {
    width: 270,
    resizeMode: "contain",
    height: 70,
  },
  textField: {
    backgroundColor: "#FAFAFA",
    width: "100%",
    height: 47,
    paddingHorizontal: 10,
    borderWidth: 0.4,
    borderColor: "grey",
    borderRadius: 6,
    marginVertical: 8,
  },
  submit: {
    borderRadius: 6,
    height: 45,
    color: "#3797EF",
  },
});
