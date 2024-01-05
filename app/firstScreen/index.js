import { Link, router } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  useWindowDimensions,
  Animated,
} from "react-native";

import { useFonts } from "expo-font";
import * as Font from "expo-font";

function FirstScreen() {
  const { height, width, scale, fontScale } = useWindowDimensions();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const windowWidth = width;
  const windowHeight = height;
  const ratio = windowWidth / 663; //663 is actual image width
  const onChangeText = (e) => {};
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000, // You can adjust the duration as needed
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);
  return (
    <ScrollView>
      <View
        style={{
          height: windowHeight,
          flex: 1,
          flexDirection: "column",
          paddingVertical: "5%",
          paddingHorizontal: "5%",
        }}
      >
        <View style={styles.innerContainer}>
          <Image
            style={styles.backgroundImage}
            source={require("../../assets/Cuffs.png")}
            resizeMode="contain"
          />
          <View>
            <Text style={[styles.appName, { fontSize: 45, fontWeight: "700" }]}>
              PAREDAAR
            </Text>
          </View>
          <View style={styles.Imagecontainer}>
            <Image
              style={{ width: windowWidth, height: 450 * ratio }}
              source={require("../../assets/Pahredaar.png")}
              resizeMode="contain"
              transition={1000}
            />
          </View>
          {/* <View>
            <Animated.Text
              style={{
                opacity: fadeAnim,
                fontSize: 34,
                fontWeight: "500",
                textAlign: "center",
                color: "#303030",
              }}
            >
              Paredaar hai Saath
            </Animated.Text>
            <Animated.Text
              style={{
                opacity: fadeAnim,
                fontSize: 34,
                fontWeight: "500",
                textAlign: "center",
                color: "#303030",
              }}
            >
              Tho darne ki kya baath
            </Animated.Text>
          </View> */}
          <View>
            <Text
              style={{
                fontSize: 34,
                fontWeight: "500",
                textAlign: "center",
                color: "#303030",
              }}
            >
              Paredaar hai Saath
            </Text>
            <Text
              style={{
                fontSize: 34,
                fontWeight: "500",
                textAlign: "center",
                color: "#303030",
              }}
            >
              Tho darne ki kya baath
            </Text>
          </View>
          <View
            style={{
              gap: 15,
              justifyContent: "center",
            }}
          >
            <Animated.View
              style={{
                opacity: fadeAnim,
              }}
            >
              <Pressable
                style={styles.buttonLogin}
                onPress={() => router.push("/login/")}
              >
                <Text style={[styles.buttonText]}>LOGIN</Text>
              </Pressable>
            </Animated.View>
            <Animated.View
              style={{
                opacity: fadeAnim,
              }}
            >
              <Pressable
                style={styles.buttonSignUp}
                onPress={() => router.push("/signup/")}
              >
                <Text style={[styles.buttonText, { color: "white" }]}>
                  SIGN UP
                </Text>
              </Pressable>
            </Animated.View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  firstContainer: {
    flex: 1,
    flexDirection: "column",
    marginVertical: "5%",
  },
  innerContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  backgroundImage: {
    position: "absolute",
    top: -100,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
  Imagecontainer: {
    alignItems: "center",
    // flex: 3,
  },
  text: {
    color: "#030303",
    fontSize: 24,
    textAlign: "center",
    textAlignVertical: "center",
  },
  label: {
    fontSize: 14,
  },
  appName: {
    color: "#030303",
    fontSize: 38,
    fontWeight: "600",
    textAlign: "center",
  },
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
  buttonLogin: {
    padding: 20,
    border: "0",
    boxSizing: "border-box",
    borderRadius: 24,
    backgroundColor: "#1253d5",
    outline: "none",
    justifyContent: "center",
    alignContent: "center",
  },
  buttonSignUp: {
    padding: 20,
    boxSizing: "border-box",
    borderRadius: 24,
    backgroundColor: "#37444f",
    borderColor: "#030303",
    outline: "none",
    justifyContent: "center",
    alignContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
  },
  creds: {
    flex: 3,
    backgroundColor: "green",
    marginVertical: 20,
    gap: 20,
  },
  notRegistered: {
    color: "#114a92",
    fontSize: 20,
  },
  flexStyle: {
    flex: 1,
  },
});
export default FirstScreen;
