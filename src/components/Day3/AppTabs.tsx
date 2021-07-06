import React from "react";
import { TabsParamList } from "../../utils/TabsParamList";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Center from "./Center";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Home = () => (
  <Center>
    <Text>Home</Text>
  </Center>
);

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

          if (route.name === "Home") {
            iconName = focused
              ? "information-circle"
              : "information-circle-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "ios-search" : "search-outline";
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
      <Tabs.Screen options={{}} name="Home" component={Home} />
      <Tabs.Screen name="Search" component={Search} />
    </Tabs.Navigator>
  );
};
export default AppTabs;
