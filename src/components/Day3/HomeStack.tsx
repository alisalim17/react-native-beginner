import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { useContext } from "react";
import { Button, FlatList, Text } from "react-native";
import { View } from "react-native";
import { HomeParamList, HomeStackNavProps } from "../../utils/HomeParamList";
import { tailwind } from "../../utils/tailwind";
import { AuthContext } from "./AuthProvider";
import Center from "./Center";
import faker from "faker";
import uuid from "react-native-uuid";

const Stack = createStackNavigator<HomeParamList>();

const Feed: React.FC<HomeStackNavProps<"Feed">> = ({ navigation }) => (
  <Center>
    <FlatList
      style={tailwind("w-full")}
      data={Array.from(Array(50), () => faker.commerce.product())}
      keyExtractor={() => uuid.v4() as any}
      renderItem={({ item }) => (
        <View style={tailwind("flex-row justify-center")}>
          <View style={tailwind("w-150 p-2")}>
            <Button
              title={item}
              onPress={() => navigation.navigate("Product", { name: item })}
            />
          </View>
        </View>
      )}
    />
  </Center>
);

const Product: React.FC<HomeStackNavProps<"Product">> = ({
  route: {
    params: { name },
  },
}) => (
  <Center>
    <Text>{name}</Text>
  </Center>
);

const HeaderRight = () => {
  const { logout } = useContext(AuthContext);
  return (
    <View style={tailwind("mr-1")}>
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerRight: HeaderRight }}
        name="Feed"
        component={Feed}
      />

      <Stack.Screen
        options={({ route }) => ({
          headerTitle: `Product / ${route.params.name}`,
        })}
        name="Product"
        component={Product}
      />
    </Stack.Navigator>
  );
};
export default HomeStack;
