import { Link, router } from "expo-router";
import React, { useState } from "react";
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
} from "react-native";
import {} from "react-native";
function FirstScreen() {
  const { height, width, scale, fontScale } = useWindowDimensions();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const windowWidth = width;
  const windowHeight = height;
  const ratio = windowWidth / 663; //663 is actual image width
  const onChangeText = (e) => {};
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
          <View style={styles.Imagecontainer}>
            <Image
              style={{ width: windowWidth, height: 450 * ratio }}
              source={require("../../assets/Pahredaar.png")}
              resizeMode="contain"
              transition={1000}
            />
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 35, fontWeight: "700" }}>PAREDAAR</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flex: 3,
            alignSelf: "stretch",
            justifyContent: "center",
          }}
        >
          <Text
            style={{ fontSize: 34, fontWeight: "500", textAlign: "center" }}
          >
            Suraksha ka Saathi
          </Text>
          <Text
            style={{ fontSize: 34, fontWeight: "500", textAlign: "center" }}
          >
            Ek Chhuan Mein
          </Text>
        </View>
        <View
          style={{
            gap: 5,
            justifyContent: "center",
          }}
        >
          <Pressable
            style={styles.buttonLogin}
            onPress={() => router.push("/login/")}
          >
            <Text style={[styles.buttonText, { color: "#030303" }]}>LOGIN</Text>
          </Pressable>
          <Pressable
            style={styles.buttonSignUp}
            onPress={() => router.push("/signup/")}
          >
            <Text style={styles.buttonText}>SIGN UP</Text>
          </Pressable>
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
  },
  Imagecontainer: {
    alignItems: "center",
    flex: 2,
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
    borderWidth: 4,
    borderColor: "#030303",
    color: "#030303",
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
    color: "#ffffff",
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
