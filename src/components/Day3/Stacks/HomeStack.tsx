import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { useContext } from "react";
import { Button, FlatList, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { HomeParamList, HomeStackNavProps } from "../../../utils/HomeParamList";
import { tailwind } from "../../../utils/tailwind";
import { AuthContext } from "../Provider/AuthProvider";
import Center from "../Center";
import faker from "faker";
import uuid from "react-native-uuid";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

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
  navigation,
}) => (
  <Center>
    <Text>{name}</Text>
    <Button
      title="Edit this product"
      onPress={() => navigation.navigate("EditProduct", { name })}
    />
  </Center>
);

const apiCall = (x: any) => x;

const EditProduct: React.FC<HomeStackNavProps<"EditProduct">> = ({
  route: {
    params: { name },
  },

  navigation,
}) => {
  const [formState] = useState({});
  const submit = useRef(() => {});

  submit.current = () => {
    // some api call goes here
    apiCall(formState);
    navigation.goBack();
  };

  useEffect(() => {
    navigation.setParams({ submit });
  }, []);

  return (
    <Center>
      <Text>editing {name}...</Text>
    </Center>
  );
};

const HeaderRightFeed = () => {
  const { logout } = useContext(AuthContext);
  return (
    // @todo Maybe make this a dynamic component for re-usability
    <TouchableOpacity style={tailwind("mr-2")} onPress={logout}>
      <Text style={tailwind("text-accent")}>Logout</Text>
    </TouchableOpacity>
  );
};

const HeaderRightEditProduct: React.FC<HomeStackNavProps<"EditProduct">> = ({
  route: { params },
}) => {
  return (
    // @todo Maybe make this a dynamic component for re-usability
    <TouchableOpacity
      style={tailwind("mr-2")}
      onPress={() => params?.submit?.current()}
    >
      <Text style={tailwind("text-accent")}>Done</Text>
    </TouchableOpacity>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerRight: HeaderRightFeed }}
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

      <Stack.Screen
        options={(props) => ({
          headerTitle: `Edit / ${props.route.params.name}`,
          headerRight: () => <HeaderRightEditProduct {...props} />,
        })}
        name="EditProduct"
        component={EditProduct}
      />
    </Stack.Navigator>
  );
};
export default HomeStack;
