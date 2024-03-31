import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function CreateGroup() {
  return (
    <LinearGradient colors={["#d56787", "#ff849c"]} style={{ flex: 1 }}>
      <ScrollView style={{ backgroundColor: "transparent" }}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              gap: 40,
              marginVertical: 50,
            }}
          >
            <View>
              <Text style={styles.dangerText}>Coming Soon</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
export default CreateGroup;
const styles = StyleSheet.create({
  sos: {
    borderRadius: 100,
    width: 200,
    height: 200,
    backgroundColor: "red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  sosText: {
    color: "white",
    fontSize: 78,
    fontWeight: "700",
  },
  sosCancel: {
    color: "white",
    fontSize: 48,
    fontWeight: "700",
  },
  sosCountdown: {
    fontSize: 28,
    fontWeight: "400",
  },
  groups: {
    fontSize: 28,
    fontWeight: "700",
  },
  groupCollection: {
    marginVertical: 10,
  },
  buttonCreateGrp: {
    padding: 20,
    boxSizing: "border-box",
    borderRadius: 45,
    backgroundColor: "#1253d5",
    outline: "none",
    justifyContent: "center",
    alignContent: "center",
  },
  buttonJoingrp: {
    padding: 20,
    boxSizing: "border-box",
    borderRadius: 45,
    backgroundColor: "#37444f",
    borderColor: "#030303",
    outline: "none",
    justifyContent: "center",
    alignContent: "center",
  },
  dangerText: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 30,
    fontWeight: "600",
    maxWidth: 400,
  },
  buttonContainer: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  groupButtons: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
  },
});
