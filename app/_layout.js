import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login/index" options={{ headerTitle: "Login" }} />
      <Stack.Screen name="signup/index" options={{ headerTitle: "Sign Up" }} />
      <Stack.Screen name="sos/index" options={{ headerTitle: "Dashboard" }} />
      <Stack.Screen
        name="joinGroup/index"
        options={{ headerTitle: "Join Group" }}
      />
    </Stack>
  );
};
export default RootLayout;
