import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colorsMain } from "../utilis";

const Link = ({ title, fontSize, align, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.link(fontSize, align)}>
        {JSON.stringify(onPress)} {title}
      </Text>
      {/* <Text style={styles.link(fontSize, align)}>{title}</Text> */}
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  link: (fontSize, align) => ({
    fontSize: fontSize || 12,
    color: colorsMain.text.greyGreen,
    textDecorationLine: "underline",
    textAlign: align,
  }),
});
