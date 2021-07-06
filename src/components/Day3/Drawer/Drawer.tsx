import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  DrawerContentOptions,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import AppTabs from "../AppTabs";
import AuthStack from "../Stacks/AuthStack";
import { DrawerParamList, DrawerProps } from "../../../types/DrawerParamList";
import Center from "../Center";

const Notifications = () => {
  return (
    <Center>
      <Text>Notifications Screen</Text>
    </Center>
  );
};

const CustomDrawerContent: React.FC<
  DrawerContentComponentProps<DrawerContentOptions>
> = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const MyDrawer = () => {
  const { user } = useContext(AuthContext);
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Root" component={user ? AppTabs : AuthStack} />
      <Drawer.Screen name="Notifications" component={Notifications} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
