import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext, useEffect, useState } from "react";
import { Button, Text } from "react-native";
import { AuthNavProps, AuthParamList } from "../../utils/AuthParamList";
import AppTabs from "./AppTabs";
import { AuthContext } from "./AuthProvider";
import AuthStack from "./AuthStack";
import Center from "./Center";

const Routes = () => {
  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {user ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
