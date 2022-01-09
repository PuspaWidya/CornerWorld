import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

export default function Loading() {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator size="large" color="black" />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
    width: "100%",
    height: "100%",
    opacity: 0.4,
  },
  text: {
    fontSize: 18,
  },
});
