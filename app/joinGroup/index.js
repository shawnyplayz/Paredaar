import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

function JoinGroup() {
  const [groupCode, setGroupCode] = useState(null);
  return (
    <View style={styles.outerContainer}>
      <View>
        <Text style={styles.label}>Enter the Group Code below</Text>
      </View>
      <View>
        <TextInput
          placeholder="Group Code"
          onChangeText={(e) => setGroupCode(e)}
          value={groupCode}
          style={styles.input}
          maxLength={6}
        />
      </View>
      <View>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Join Group</Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  button: {
    padding: 15,
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
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
  },
  input: {
    // height: "1%",
    borderWidth: 1,
    borderCurve: "circular",
    borderRadius: 10,
    padding: 10,
    color: "black",
    borderRadius: 24,
    backgroundColor: "#eeeeee",
    fontSize: 24,
    lineHeight: 19,
    borderWidth: 0,
    maxWidth: "50%",
    // minWidth: "50%",
  },
  label: {
    fontSize: 24,
  },
});
export default JoinGroup;
