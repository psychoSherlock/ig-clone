import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import AddCaptions from "../components/AddPost/AddCaptions";
import AddPostPreview, {
  ImagePreview,
} from "../components/AddPost/AddPostPreview";
// import { SignUpDivider } from "../components/Auth/LoginPrompt";
import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";
import { Button } from "react-native-paper";

export default function AddPost({ navigation }) {
  const [selectedImage, setselectedImage] = useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert(
        " 🙆‍♂️ Permission Required!",
        "Permission to access camera is required to upload Image. Please turn it on on the settings!"
      );

      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      base64: true,
    });
    // console.log(pickerResult);
    if (pickerResult.cancelled == true) {
      return;
    }
    setselectedImage({ localUri: pickerResult.uri });
  };

  return (
    <View style={styles.Main}>
      <StatusBar style="auto" />
      <View
        style={{
          flexDirection: "row",
          margin: 10,
          justifyContent: "space-evenly",
        }}
      >
        {selectedImage == null ? (
          <AddPostPreview onPress={openImagePickerAsync} />
        ) : (
          <ImagePreview
            sourceUri={selectedImage.localUri}
            onPress={openImagePickerAsync}
          />
        )}
        <AddCaptions />
        {/* <Button onPress={() => console.log(selectedImage)}>Click Me </Button> */}
      </View>
      <Image
        source={{
          uri: "https://res.cloudinary.com/dlmywd0jd/image/upload/v1644849276/static/posting_picture_ud7mmn.png",
        }}
        style={styles.illus}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Main: {
    flex: 1,
    backgroundColor: "white",
  },
  illus: {
    width: 350,
    height: 400,
    resizeMode: "contain",
    justifyContent: "center",
    alignSelf: "center",
  },
});
