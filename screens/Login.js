import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Logo from "../components/Logo";
import Link from "../components/Link";
import Button from "../components/Button";
import Input from "../components/Input";
import { colorsMain } from "../utilis";

export default function Login({ navigation }) {
  return (
    <>
      <View style={styles.page}>
        <Logo />
        <Text style={styles.title}>Login and start to be productive</Text>
        <Input text={"Email Address"} />
        <View style={{ heigth: 24 }} />
        <Input text={"Password"} />
        <View style={{ heigth: 10 }} />
        <Link title={"Forgot My Password"} />
        <View style={{ height: 40 }} />
        <Button title="sign In" onPress={() => navigation.navigate("Todo")} />
        <View style={{ height: 30 }} />
        <Link
          title={"Create New Account"}
          fontSize={16}
          align={"center"}
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    flex: 1,
  },
  title: {
    fontSize: 25,
    color: colorsMain.text.greenDeep,
    fontWeight: "bold",
    marginVertical: 40,
    maxWidth: 250,
  },
});
