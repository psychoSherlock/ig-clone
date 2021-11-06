import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  View,
  Button,
} from "react-native";
import { Image } from "react-native-elements";
import trendingImages from "../../assets/data/trending";

import LoadingSpinner from "../Spinner";

export default function Gallery() {
  return (
    <View style={{ marginVertical: 20, width: "100%" }}>
      <ScrollView contentContainerStyle={styles.container}>
        {trendingImages.map((imageData, index) => (
          <GalleryItem key={index} url={imageData.url} />
        ))}
      </ScrollView>
    </View>
  );
}

function GalleryItem({ url }) {
  return (
    <TouchableHighlight
      onPress={() => {
        alert("Image");
      }}
      underlayColor="black"
    >
      <Image
        source={{ uri: url }}
        style={styles.image}
        PlaceholderContent={<LoadingSpinner size="small" />}
      />
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 130,
    height: 130,

    resizeMode: "contain",
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
