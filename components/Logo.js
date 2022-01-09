import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Logo() {
  return (
    <View>
      <Image
        source={require("../utilis/logo/monkey2.png")}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
  },
});
