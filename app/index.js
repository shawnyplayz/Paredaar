import { Link } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";

import SignUp from "./signup";
import FirstScreen from "./firstScreen";
import { SafeAreaView } from "react-native-safe-area-context";

function HomePage() {
  return (
    <SafeAreaView>
      <FirstScreen />
    </SafeAreaView>
  );
}

export default HomePage;
