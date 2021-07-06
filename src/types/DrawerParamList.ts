import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type DrawerParamList = {
  Root: undefined;
  Notifications: undefined;
};

export type DrawerProps<T extends keyof DrawerParamList> = {
  navigation: StackNavigationProp<DrawerParamList, T>;
  route: RouteProp<DrawerParamList, T>;
};
