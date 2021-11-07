import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "react-native-elements";
import { Divider } from "react-native-elements/dist/divider/Divider";

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
  caretHidden,
  onChange,
  onChangeText,
  onBlur,
  value,
  style,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      textContentType={type}
      style={[styles.textField, style]}
      secureTextEntry={secure}
      autoFocus={autofocus}
      autoCorrect={autoCorrect}
      autoCapitalize={capital}
      keyboardType={keyType}
      caretHidden={caretHidden}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export const SignUpDivider = (containerStyle) => (
  <View
    style={[
      { marginTop: 40, width: "90%", justifyContent: "center" },
      containerStyle,
    ]}
  >
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
    disabledTitleStyle={{ color: "white", opacity: 0.6 }}
    onPress={onPress}
  />
);

const styles = StyleSheet.create({
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
