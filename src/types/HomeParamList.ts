import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { MutableRefObject } from "react";

interface Product {
  name: string;
}

type EditProduct = { submit?: MutableRefObject<() => void> } & Product;

export type HomeParamList = {
  Feed: undefined;
  Product: Product;
  EditProduct: EditProduct;
};

export type HomeStackNavProps<T extends keyof HomeParamList> = {
  navigation: StackNavigationProp<HomeParamList, T>;
  route: RouteProp<HomeParamList, T>;
};
