import { Tabs } from "expo-router";
import React, { useEffect, useRef } from "react";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  MaterialIcons,
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import CustomTabBarButton from "../../components/CustomTabBarButton";

function TabsLayout(props) {
  return (
    <Tabs
      screenOptions={{
        headerTitleAlign: "center",
        tabBarStyle: {
          height: 80,
          position: "absolute",
          bottom: 16,
          right: 16,
          left: 16,
          borderRadius: 10,
        },
      }}
    >
      <Tabs.Screen
        name="joinGroup/index"
        options={{
          headerTitle: "Join Group",
          // tabBarIcon: ({ color, size }) => (
          //   <AntDesign name="adduser" color={color} size={34} />
          // ),
          tabBarButton: (props) => (
            <CustomTabBarButton
              title="Join group"
              iconName="person-add"
              icon={<AntDesign name="adduser" color="blue" size={40} />}
              {...props}
            />
          ),
          // tabBarLabel: "Join Group",
        }}
      />
      <Tabs.Screen
        name="sos/index"
        options={{
          headerTitle: "Home",
          // tabBarIcon: ({ color, size }) => (
          //   <Entypo name="home" color={color} size={40} />
          // ),
          tabBarButton: (props) => (
            <CustomTabBarButton
              title="Home"
              iconName="home"
              icon={<Entypo name="home" color="blue" size={40} />}
              {...props}
            />
          ),
          // tabBarLabel: "Dashboard",
        }}
      />

      <Tabs.Screen
        name="createGroup/index"
        options={{
          headerTitle: "Create Group",
          // tabBarIcon: ({ color, size }) => (
          //   <FontAwesome name="group" color={color} size={30} />
          // ),
          tabBarButton: (props) => (
            <CustomTabBarButton
              title="Create Group"
              iconName="people"
              icon={<FontAwesome name="group" color="blue" size={40} />}
              {...props}
            />
          ),
          // tabBarLabel: "Join Group",
        }}
      />
    </Tabs>
  );
}

export default TabsLayout;
