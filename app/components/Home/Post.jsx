import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import { IconButton } from "react-native-paper";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";

export default function Post({ post }) {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" color="#808080" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 6 }}>
        <PostFooter post={post} />
      </View>
    </View>
  );
}

const PostHeader = ({ post }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        margin: 5,
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity activeOpacity={0.7}>
          <Image
            source={{
              uri: post.profilePic,
              width: 40,
              height: 40,
            }}
            style={styles.profilePic}
          />
        </TouchableOpacity>
        <Text style={{ marginLeft: 5, fontWeight: "700" }}>
          {post.username}
        </Text>
      </View>
      <IconButton
        icon="dots-vertical"
        size={23}
        color="black"
        onPress={() => alert("Post Options")}
      />
    </View>
  );
};

const PostImage = ({ post }) => {
  return (
    <View
      style={{
        width: "100%",
        height: 500,
      }}
    >
      <Image
        source={{
          uri: post.postUri,
        }}
        style={styles.postContent}
      />
    </View>
  );
};

const convertLikes = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}; // Because toLocaleString doesnt work on native android

const LikesAndCaption = ({ post }) => {
  return (
    <View style={{ marginTop: -8 }}>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
        {convertLikes(post.likes)} likes
      </Text>

      <Text>
        <Text
          style={{
            fontWeight: "bold",
          }}
        >
          {post.username}
        </Text>
        <Text> {post.caption}</Text>
      </Text>
    </View>
  );
};

const PostComments = ({ post }) => {
  return (
    <View style={{ marginTop: 5 }}>
      <View>
        {!!post.comments.length && (
          <Text style={{ color: "grey" }}>
            View{" "}
            {post.comments.length > 1
              ? `all ${post.comments.length} comments`
              : "1 comment"}
          </Text>
        )}
      </View>

      <View>
        {post.comments.map((comment, index) => {
          return (
            <Text key={index} style={{ flexDirection: "row", marginTop: 5 }}>
              <Text style={{ fontWeight: "bold" }}>{comment.user}</Text>
              <Text> {comment.comment}</Text>
            </Text>
          );
        })}
      </View>
    </View>
  );
};

const PostFooter = ({ post }) => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <IconButton
            icon="heart-outline"
            color="black"
            size={30}
            style={{ margin: 0 }}
          />
          <IconButton
            style={{ margin: 0 }}
            size={28}
            color="black"
            icon={({ size, color }) => (
              <Ionicons
                name="md-chatbubble-outline"
                size={size}
                color={color}
                style={{
                  transform: [{ scaleX: -1 }],
                }}
              />
            )}
          />
          <IconButton
            size={28}
            color="black"
            style={{ margin: 0 }}
            icon={({ size, color }) => (
              <Ionicons name="paper-plane-outline" size={size} color={color} />
            )}
          />
        </View>
        <IconButton icon="bookmark-outline" color="black" size={30} />
      </View>
      <View
        style={{
          marginHorizontal: 6,
        }}
      >
        <LikesAndCaption post={post} />
        <PostComments post={post} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profilePic: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#ff8501",
    marginLeft: 5,
  },
  postContent: {
    height: "100%",
    resizeMode: "cover",
  },
});
