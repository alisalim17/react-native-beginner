import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";
import AppTabs from "../AppTabs";
import MyDrawer from "../Drawer/Drawer";
import { AuthContext } from "../Provider/AuthProvider";
import AuthStack from "../Stacks/AuthStack";

const Routes = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    </>
  );
};

export default Routes;
