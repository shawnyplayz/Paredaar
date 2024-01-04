import { Link } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import SignUp from "./signup";
import FirstScreen from "./firstScreen";
import { SafeAreaView } from "react-native-safe-area-context";

function HomePage() {
  return (
    <LinearGradient colors={["#ffce9f", "#ff849c"]} style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "transparent" }}>
        <FirstScreen />
      </SafeAreaView>
    </LinearGradient>
  );
}

export default HomePage;
