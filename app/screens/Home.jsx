import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "../components/Home/Header";
import Stories from "../components/Home/Stories";
import Post from "../components/Home/Post";
import POSTS from "../assets/data/posts";

export default function Home() {
  return (
    <View style={styles.Main}>
      <StatusBar style="auto" />
      <Header />
      <ScrollView>
        <Stories />
        {POSTS.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Main: {
    flex: 1,
    backgroundColor: "white",
  },
});
