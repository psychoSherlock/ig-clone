import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import USERS from "../../assets/data/users";

export default function Stories() {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((user, index) => {
          return (
            <View key={index} style={styles.container}>
              <TouchableOpacity activeOpacity={0.7}>
                <Image
                  source={{
                    uri: user.profilePic,
                    width: 70,
                    height: 70,
                  }}
                  style={styles.statusPic}
                />
              </TouchableOpacity>
              <Text style={styles.username}>
                {user.username.length > 11
                  ? user.username.slice(0, 11).toLowerCase() + "..."
                  : user.username.toLowerCase()}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

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
});
