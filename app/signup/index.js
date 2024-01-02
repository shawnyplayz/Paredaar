import React, { useState } from "react";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";
// import { Image } from "expo-image";
import { Asset } from "expo-asset";
import { Link, router } from "expo-router";
export default function SignUp() {
  const [userName, setUserName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const onChangeText = (e) => {};
  return (
    <View
      style={{
        backgroundColor: "#ffff",
        flex: 1,
        flexDirection: "column",
        gap: 20,
      }}
    >
      {/* <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../assets/Pahredaar.png")}
          contentFit="contain"
          transition={1000}
        />
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={styles.appName}>PAREDAAR</Text>
        </View>
      </View> */}
      <View style={{ display: "flex" }}>
        <View style={styles.creds}>
          <SafeAreaView style={styles.innerFields}>
            <Text style={styles.label}>User Name</Text>
            <TextInput
              style={styles.input}
              onChangeText={(e) => onChangeText(e)}
              value={userName}
              placeholder="User Name"
              keyboardType="ascii-capable"
            />
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              onChangeText={(e) => onChangeText(e)}
              value={email}
              placeholder="Email"
              keyboardType="email-address"
            />
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              onChangeText={(e) => onChangeText(e)}
              value={password}
              placeholder="Password"
              keyboardType="visible-password"
            />
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
              style={styles.input}
              onChangeText={(e) => onChangeText(e)}
              value={confirmPassword}
              placeholder="Password"
              keyboardType="visible-password"
            />
            <Pressable
              onPress={() => router.push("/sos")}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </Pressable>
          </SafeAreaView>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  image: {},
  appName: {
    color: "#030303",
    fontSize: 38,
    fontWeight: "600",
    lineHeight: 42,
    textAlign: "center",
  },
  creds: {
    display: "flex",
    padding: 20,
  },
  label: {
    color: "#030303",
    fontSize: 20,
    lineHeight: 24,
  },
  innerFields: {
    gap: 12,
  },
  input: {
    height: "10%",
    borderWidth: 0.5,
    borderCurve: "circular",
    borderRadius: 10,
    padding: 10,
    color: "black",
    borderRadius: 24,
    backgroundColor: "#eeeeee",
    fontSize: 14,
    lineHeight: 19,
  },
  button: {
    padding: 20,
    marginTop: 20,
    border: "0",
    boxSizing: "border-box",
    borderRadius: 24,
    backgroundColor: "#030303",
    color: "#ffffff",
    lineHeight: 21,
    outline: "none",
    display: "flex",
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
