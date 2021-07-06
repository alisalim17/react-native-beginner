import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";
import AppTabs from "./AppTabs";
import { AuthContext } from "./Provider/AuthProvider";
import AuthStack from "./Stacks/AuthStack";

const Routes = () => {
  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {user ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
