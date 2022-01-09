import React, { Component } from "react";
import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image,
} from "react-native";
import tailwind, { getColor } from "tailwind-rn";
import { colorsMain } from "../utilis";
import Button from "../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../components/Logo";
import Flower2 from "../utilis/image/Flower2.jpg";

export default function GetStarted({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <ImageBackground source={Flower2} style={styles.page}>
        <Logo />
        <View style={styles.text}>
          <Text style={styles.title}>Make your life better than ever</Text>
        </View>
        <View>
          <Button
            title="Get Started"
            type="primary"
            onPress={() => navigation.navigate("Register")}
          />
          <View style={{ height: 16 }} />
          <Button
            title="Sign In"
            onPress={() => navigation.navigate("Login")}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    padding: 20,
    justifyContent: "space-between",

    flex: 1,
  },
  text: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 35,
    fontWeight: "900",
    marginTop: 91,
    color: "white",
    textAlign: "center",
    textShadowColor: "black",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 100,
  },
});
