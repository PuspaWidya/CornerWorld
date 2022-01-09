import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colorsMain } from "../utilis";

const Button = ({ type, title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: (type) => ({
    backgroundColor:
      type == "primary"
        ? colorsMain.button.primary
        : colorsMain.button.secondary,
    paddingVertical: 15,
    borderRadius: 10,
  }),
  text: (type) => ({
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    color:
      type == "primary"
        ? colorsMain.text.buttonPrimary
        : colorsMain.text.buttonSecondary,
  }),
});
