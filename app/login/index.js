import { Link } from "expo-router";
import React, { useState } from "react";
import {
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";

function Login() {
  const { height, width, scale, fontScale } = useWindowDimensions();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const windowWidth = width;
  console.log("windowWidth", windowWidth);
  const windowHeight = height;
  console.log("windowHeight", windowHeight);
  const ratio = windowWidth / 663; //663 is actual image width
  const onChangeText = (e) => {};
  return (
    <ScrollView>
      <View style={{ marginVertical: "5%" }}>
        <View style={{ flex: 1 }}>
          <View style={styles.creds}>
            <SafeAreaView style={styles.innerFields}>
              <Text style={styles.label}>Number</Text>
              <TextInput
                style={styles.input}
                onChangeText={(e) => onChangeText(e)}
                value={email}
                placeholder="Number"
                keyboardType="number-pad"
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
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-end",
                  marginVertical: 10,
                }}
              >
                <Link href="#">
                  <Text style={styles.label}>Forgot Password?</Text>
                </Link>
              </View>
            </SafeAreaView>
            <View>
              <Pressable
                // onPress={onPressFunction}
                style={styles.button}
              >
                <Text style={styles.buttonText}>LOGIN</Text>
              </Pressable>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  marginVertical: 10,
                }}
              >
                <Link href="/signup/">
                  <Text style={styles.notRegistered}>
                    Not Registered? Sign Up
                  </Text>
                </Link>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  innerFields: {
    gap: 20,
  },
  input: {
    height: "12%",
    borderWidth: 1,
    borderCurve: "circular",
    borderRadius: 10,
    padding: 10,
    color: "black",
    borderRadius: 24,
    backgroundColor: "#eeeeee",
    fontSize: 14,
    lineHeight: 19,
    borderWidth: 0,
  },
  button: {
    padding: 20,
    border: "0",
    boxSizing: "border-box",
    borderRadius: 24,
    backgroundColor: "#030303",
    color: "#ffffff",
    lineHeight: 21,
    outline: "none",
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
  },
  creds: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    marginVertical: 20,
    gap: 20,
  },
  label: {
    fontSize: 14,
  },
});
export default Login;
