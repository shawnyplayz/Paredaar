// import React, { useEffect, useState } from "react";
import {
  Pressable,
  Text,
  View,
  StyleSheet,
  Animated,
  Vibration,
  Platform,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import React, { Component } from "react";
import { router } from "expo-router";

class SOS extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groups: [],
      disableSOS: false,
      countDown: 10,
      disableOtherButtons: false,
    };
    this.scaleValue = new Animated.Value(1);
  }

  componentDidMount = () => {
    let cloneGrp = this.state.groups;
    cloneGrp.push("group 1", "group 2");
    this.setState({
      groups: cloneGrp,
    });
  };
  startCountdown = () => {
    this.setState({
      disableSOS: true,
      disableOtherButtons: true,
    });
    this.countdownInterval = setInterval(() => {
      this.setState({
        countDown: this.state.countDown - 1,
      });
      this.vibrate();
      if (this.state.countDown === 0) {
        this.setState({
          disableSOS: true,
        });
        this.stopCountdown();
        return;
      }
    }, 1000);
  };
  stopCountdown = () => {
    clearInterval(this.countdownInterval);
    this.setState({
      disableSOS: false,
      countDown: 10,
      disableOtherButtons: false,
    });
  };
  vibrate = () => {
    if (Platform.OS === "ios") {
      // this logic works in android too. you could omit the else statement
      const interval = setInterval(() => Vibration.vibrate(), 1000);
      // it will vibrate for 5 seconds
      setTimeout(() => clearInterval(interval), 5000);
    } else {
      Vibration.vibrate(300);
    }
  };
  componentWillUnmount = () => {
    this.stopCountdown();
  };
  render() {
    return (
      <LinearGradient colors={["#ffce9f", "#ff849c"]} style={{ flex: 1 }}>
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
                <Text style={styles.dangerText}>
                  Press this button in case of Emergency
                </Text>
              </View>
              <View>
                {this.state.disableSOS ? (
                  <Pressable
                    onPress={this.stopCountdown}
                    style={({ pressed }) => [
                      styles.sos,
                      {
                        backgroundColor: "grey",
                      },
                    ]}
                  >
                    <Text style={styles.sosCancel}>Tap to Cancel</Text>
                  </Pressable>
                ) : (
                  <Pressable
                    onPress={this.startCountdown}
                    style={({ pressed }) => [
                      styles.sos,
                      {
                        backgroundColor: pressed ? "grey" : "red",
                      },
                    ]}
                  >
                    <Text style={styles.sosText}>SOS</Text>
                  </Pressable>
                )}
              </View>
              <View>
                <Text style={styles.sosCountdown}>
                  {this.state.countDown !== 10
                    ? `Sending SOS in ${this.state.countDown}`
                    : ""}
                </Text>
              </View>
              <View style={styles.buttonContainer}>
                <Pressable
                  style={styles.buttonCreateGrp}
                  disabled={this.state.disableOtherButtons}
                >
                  <Text style={styles.groupButtons}>Create Group</Text>
                </Pressable>
                <Pressable
                  style={styles.buttonJoingrp}
                  onPress={() => router.push("/joinGroup/")}
                  disabled={this.state.disableOtherButtons}
                >
                  <Text style={[styles.groupButtons, { color: "#030303" }]}>
                    Join Group
                  </Text>
                </Pressable>
              </View>
              <View>
                <Text>SOS Message would be sent to the following groups</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    );
  }
}
export default SOS;

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
    border: "0",
    boxSizing: "border-box",
    borderRadius: 45,
    backgroundColor: "#1253d5",
    outline: "none",
    justifyContent: "center",
    alignContent: "center",
  },
  buttonJoingrp: {
    padding: 20,
    borderWidth: 6,
    borderRadius: 45,
    borderColor: "#1253d5",
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
