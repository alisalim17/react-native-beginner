import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext } from "react";
import { Text } from "react-native";
import { Button, View } from "react-native";
import { AuthParamList, AuthNavProps } from "../../utils/AuthParamList";
import { AuthContext } from "./AuthProvider";
import Center from "./Center";

const Stack = createStackNavigator<AuthParamList>();

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

const AuthStack = () => {
  return (
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
  );
};
export default AuthStack;
