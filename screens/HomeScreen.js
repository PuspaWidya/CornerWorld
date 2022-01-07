import React, { useEffect } from "react";
import {
  SafeAreaView,
  Text,
  StatusBar,
  View,
  ImageBackground,
  StyleSheet,
} from "react-native";
import tailwind from "tailwind-rn";
import { colorsMain } from "../utilis";

export default function HomeScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Todo");
    }, 3000);
  }, []);

  return (
    <View style={tailwind("flex-1 justify-center items-center")}>
      <StatusBar backgroundColor="#fff"></StatusBar>
      <ImageBackground
        source={require("../utilis/image/image-from-rawpixel-id-2964042-original-min.png")}
        resizeMode="cover"
        style={styles.image}
      >
        {/* <Text style={styles.text}>WELLCOME</Text> */}
        <Text style={styles.text}>Take a breath, Inhale peace</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colorsMain.text.primary,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    fontWeight: "bold",
    fontSize: 45,
    padding: 1,
    width: 300,
    textShadowColor: "black",
    textShadowOffset: { width: -0.5, height: 0.5 },
    textShadowRadius: 1,
  },
});
