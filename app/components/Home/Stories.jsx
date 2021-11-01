import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import users from "../../assets/data/users";

export default function Stories() {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {users.map((user, index) => {
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
                {user.username.length > 10
                  ? user.username.slice(0, 10).toLowerCase() + "..."
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
  },
  statusPic: {
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "orange",
    marginHorizontal: 6,
  },
});
