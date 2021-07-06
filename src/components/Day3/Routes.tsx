import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext, useEffect, useState } from "react";
import { Button, Text } from "react-native";
import { AuthNavProps, AuthParamList } from "../../utils/AuthParamList";
import AppTabs from "./AppTabs";
import { AuthContext } from "./AuthProvider";
import Center from "./Center";

const Stack = createStackNavigator<AuthParamList>();

interface RoutesProps {}

const Login: React.FC<AuthNavProps<"Login">> = ({ navigation }) => {
  const { login } = useContext(AuthContext);

  return (
    <Center>
      <Text>I am a login screen</Text>
      <Button title="Sign in" onPress={login} />
      <Button
        title="Go to register"
        onPress={() => navigation.navigate("Register")}
      />
    </Center>
  );
};

const Register: React.FC<AuthNavProps<"Register">> = ({
  navigation,
  route,
}) => {
  return (
    <Center>
      <Text>This route is : {route.name}</Text>
      <Text>I am a register screen</Text>

      <Button
        title="Go to login"
        onPress={() => navigation.navigate("Login")}
      />
    </Center>
  );
};

const Routes: React.FC<RoutesProps> = () => {
  const { user, logout } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  return (
    <NavigationContainer>
      {user ? (
        <AppTabs />
      ) : (
        <Stack.Navigator
          // screenOptions={{ header: () => null }}
          initialRouteName="Login"
        >
          <Stack.Screen
            options={{ headerTitle: "Sign in" }}
            name="Login"
            component={Login}
          />
          <Stack.Screen
            options={{ headerTitle: "Sign up" }}
            name="Register"
            component={Register}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Routes;
