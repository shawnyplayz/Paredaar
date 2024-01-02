import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

function JoinGroup() {
  const [groupCode, setGroupCode] = useState(null);
  return (
    <View>
      <Text>Enter Group Code Over here</Text>
      <TextInput
        placeholder="Enter Group Code"
        onChangeText={(e) => setGroupCode(e)}
        value={groupCode}
      />
      <Pressable>
        <Text>Join Group</Text>
      </Pressable>
    </View>
  );
}

export default JoinGroup;
