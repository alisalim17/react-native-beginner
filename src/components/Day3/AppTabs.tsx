import React from "react";
import { TabsParamList } from "../../utils/TabsParamList";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Center from "./Center";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import HomeStack from "./HomeStack";

const Search = () => (
  <Center>
    <Text>Search</Text>
  </Center>
);

const Tabs = createBottomTabNavigator<TabsParamList>();

const AppTabs: React.FC = ({}) => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case "Home":
              iconName = focused ? "home-sharp" : "home-outline";
              break;
            case "Search":
              iconName = focused ? "ios-search" : "search-outline";
              break;
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
        labelStyle: { fontSize: 14 },
      }}
    >
      <Tabs.Screen name="Home" component={HomeStack} />
      <Tabs.Screen name="Search" component={Search} />
    </Tabs.Navigator>
  );
};
export default AppTabs;
