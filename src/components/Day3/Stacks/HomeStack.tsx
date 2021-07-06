import { DrawerActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import faker from "faker";
import React, { useContext } from "react";
import { Button, FlatList, Text, TouchableOpacity, View } from "react-native";
import uuid from "react-native-uuid";
import { HomeParamList, HomeStackNavProps } from "../../../types/HomeParamList";
import { tailwind } from "../../../utils/tailwind";
import Center from "../Center";
import { AuthContext } from "../Provider/AuthProvider";
import { addProductRoutes } from "../Routes/addProductRoutes";

const Stack = createStackNavigator<HomeParamList>();

const Feed: React.FC<HomeStackNavProps<"Feed">> = ({ navigation }) => (
  <Center>
    <Button
      title="Toggle Drawer"
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
    />
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

const HeaderRightFeed = () => {
  const { logout } = useContext(AuthContext);
  return (
    // @todo Maybe make this a dynamic component for re-usability
    <TouchableOpacity style={tailwind("mr-2")} onPress={logout}>
      <Text style={tailwind("text-accent")}>Logout</Text>
    </TouchableOpacity>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Feed">
      {addProductRoutes(Stack as any)}
      <Stack.Screen
        options={{ headerRight: HeaderRightFeed }}
        name="Feed"
        component={Feed}
      />
    </Stack.Navigator>
  );
};
export default HomeStack;
