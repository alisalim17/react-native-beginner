import { TypedNavigator } from "@react-navigation/core";
import { StackNavigationState } from "@react-navigation/routers";
import { StackNavigationOptions } from "@react-navigation/stack";
import { StackNavigationEventMap } from "@react-navigation/stack/lib/typescript/src/types";
import React, { useState, useRef, useEffect, Props } from "react";
import { Text } from "react-native";
import { TouchableOpacity, Button } from "react-native";
import { HomeStackNavProps } from "../../../types/HomeParamList";
import { SearchParamList } from "../../../types/SearchParamList";
import { tailwind } from "../../../utils/tailwind";
import Center from "../Center";

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

export const addProductRoutes = (
  Stack: TypedNavigator<
    SearchParamList,
    StackNavigationState<Record<string, object | undefined>>,
    StackNavigationOptions,
    StackNavigationEventMap,
    ({ initialRouteName, children, screenOptions, ...rest }: any) => JSX.Element
  >
) => {
  return (
    <>
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
    </>
  );
};
