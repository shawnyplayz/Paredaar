import { Link, router } from "expo-router";
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
import { LinearGradient } from "expo-linear-gradient";

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
    <LinearGradient colors={["#ffce9f", "#ff849c"]} style={{ flex: 1 }}>
      <ScrollView style={{ backgroundColor: "transparent" }}>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            gap: 20,
          }}
        >
          <View style={{ display: "flex" }}>
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
                  onPress={() => router.push("/sos/")}
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
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  innerFields: {
    gap: 12,
  },
  input: {
    borderWidth: 0.5,
    borderCurve: "circular",
    borderRadius: 10,
    padding: 10,
    color: "black",
    borderRadius: 24,
    backgroundColor: "#eeeeee",
    fontSize: 14,
  },
  button: {
    padding: 20,
    border: "0",
    boxSizing: "border-box",
    borderRadius: 24,
    backgroundColor: "#1253d5",
    outline: "none",
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
    color: "#030303",
    fontSize: 20,
    lineHeight: 24,
  },
  notRegistered: {
    fontSize: 20,
  },
});
export default Login;
