import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import USERS from "../../assets/data/users";
import { auth } from "../../config/firebase";
import { Image as LoadImage } from "react-native-elements/dist/image/Image";
import LoadingSpinner from "../Spinner";

export default function Stories() {
  const user = auth.currentUser;
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Userstory
          user={{
            profilePic: user.photoURL
              ? user.photoURL
              : "https://i.imgur.com/FkI5Sbu.jpg",
            username: "psychoSherlock",
          }}
          currentUser
        />
        {USERS.map((user, index) => {
          return <Userstory key={index} user={user} />;
        })}
      </ScrollView>
    </View>
  );
}

const Userstory = ({ user, currentUser }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7}>
        <LoadImage
          source={{
            uri: user.profilePic,
          }}
          PlaceholderContent={<LoadingSpinner size="small" />}
          style={styles.statusPic}
        />

        {currentUser && (
          <Ionicons
            name="add-circle-sharp"
            size={24}
            color="#1459fa"
            style={styles.addToStory}
          />
        )}
      </TouchableOpacity>
      {currentUser ? (
        <Text style={[styles.username, { color: "grey" }]}>Your Story</Text>
      ) : (
        <Text style={styles.username}>
          {user.username.length > 11
            ? user.username.slice(0, 11).toLowerCase() + "..."
            : user.username.toLowerCase()}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 20,
  },
  statusPic: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#ff8501",
    marginHorizontal: 7,
  },
  username: {
    alignSelf: "center",
  },
  addToStory: {
    position: "absolute",
    bottom: 0,
    right: 0,
    zIndex: 200,
  },
});
