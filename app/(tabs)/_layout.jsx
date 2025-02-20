import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs initialRouteName="home">
      <Tabs.Screen
        name="wallet"
        options={{
          title: "Wallet",
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
