import React, { useState } from "react";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function SignUp() {
  const [userName, setUserName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const onChangeText = (text) => {
    // Update state based on the input field
  };

  return (
    <LinearGradient colors={["#ffce9f", "#ff849c"]} style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.creds}>
            <SafeAreaView style={styles.innerFields}>
              <Text style={styles.label}>User Name</Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) => onChangeText(text)}
                value={userName}
                placeholder="User Name"
                keyboardType="ascii-capable"
              />
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) => onChangeText(text)}
                value={email}
                placeholder="Email"
                keyboardType="email-address"
              />
              <Text style={styles.label}>Password</Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) => onChangeText(text)}
                value={password}
                placeholder="Password"
                secureTextEntry
              />
              <Text style={styles.label}>Confirm Password</Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) => onChangeText(text)}
                value={confirmPassword}
                placeholder="Confirm Password"
                secureTextEntry
              />
            </SafeAreaView>
          </View>
          <View style={styles.buttonContainer}>
            <Pressable
              onPress={() => router.push("/sos")}
              style={styles.button}
            >
              <Text style={styles.buttonText}>SIGN UP</Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "transparent",
  },
  creds: {
    flex: 1,
    padding: 20,
  },
  label: {
    color: "#030303",
    fontSize: 20,
    lineHeight: 24,
  },
  innerFields: {
    flex: 1,
    gap: 10,
    paddingBottom: "2%",
    // backgroundColor: "plum",
  },
  input: {
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 10,
    color: "black",
    backgroundColor: "#eeeeee",
    fontSize: 14,
    lineHeight: 19,
  },
  buttonContainer: {
    flex: 2,
    padding: 20,
    justifyContent: "flex-end",
  },
  button: {
    padding: 20,
    borderRadius: 24,
    backgroundColor: "#1253d5",
    justifyContent: "center",
    alignContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    textAlignVertical: "center",
  },
});
