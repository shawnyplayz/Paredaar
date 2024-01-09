import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useRef } from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import * as Animatable from "react-native-animatable";

function CustomTabBarButton(props) {
  const { title, icon, accessibilityState, onPress } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef();
  const circleRef = useRef();
  const textRef = useRef();
  const animate1 = {
    0: { scale: 0.5, translateY: 8 },
    0.92: { translateY: -34 },
    1: { scale: 1.2, translateY: -24 },
  };
  const animate2 = {
    0: { scale: 1.5, translateY: -24 },
    1: { scale: 1, translateY: 8 },
  };
  const circle1 = {
    0: { scale: 0 },
    0.3: { scale: 0.9 },
    0.5: { scale: 0.2 },
    0.8: { scale: 0.7 },
    1: { scale: 1 },
  };
  const circle2 = {
    0: { scale: 1 },
    1: { scale: 1 },
  };

  useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1);
      circleRef.current.animate(circle1);
      textRef.current.transitionTo({ scale: 1 });
    } else {
      viewRef.current.animate(animate2);
      circleRef.current.animate(circle2);
      textRef.current.transitionTo({ scale: 0 });
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      activeOpacity={1}
    >
      <Animatable.View ref={viewRef} duration={1000} style={styles.btn}>
        <View style={styles.btn}>
          <Animatable.View
            ref={circleRef}
            style={{
              ...StyleSheet.absoluteFill,
              backgroundColor: "#1253d5",
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons
              name={props?.iconName}
              size={32}
              color={focused ? "white" : "white"}
            />
          </Animatable.View>
        </View>
        <View>
          <Animatable.Text
            ref={textRef}
            style={{
              fontSize: 14,
              fontWeight: "600",
              color: "blue",
              textAlign: "center",
            }}
          >
            <Text>{props?.title}</Text>
          </Animatable.Text>
        </View>
      </Animatable.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: "white",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CustomTabBarButton;
