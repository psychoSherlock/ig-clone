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

export default function Stories() {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Userstory
          user={{
            profilePic:
              "https://psychosherlock.github.io/assets/images/toonapp.jpg",
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
        <Image
          source={{
            uri: user.profilePic,
            width: 70,
            height: 70,
          }}
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
