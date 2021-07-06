import { createStackNavigator } from "@react-navigation/stack";
import faker from "faker";
import React, { useEffect, useState } from "react";
import { Button, FlatList, Text, TextInput, View } from "react-native";
import uuid from "react-native-uuid";
import {
  SearchParamList,
  SearchStackNavProps,
} from "../../../types/SearchParamList";
import { tailwind } from "../../../utils/tailwind";
import Center from "../Center";
import { addProductRoutes } from "../Routes/addProductRoutes";

const Stack = createStackNavigator<SearchParamList>();

const Search: React.FC<SearchStackNavProps<"Search">> = ({ navigation }) => {
  const myFakeData = Array.from(Array(50), () => faker.commerce.product());
  const [text, setText] = useState("");
  const [data, setData] = useState(myFakeData);

  useEffect(() => {
    setData(
      myFakeData.filter((i) => i.toLowerCase().includes(text.toLowerCase()))
    );
  }, [text]);

  return (
    <Center>
      <Text>Search</Text>
      <TextInput
        style={tailwind("h-6 w-150 border-b-default")}
        placeholder="search for product"
        onChangeText={setText}
        value={text}
      />
      <FlatList
        style={tailwind("w-full")}
        data={data}
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
};

const SearchStack = () => {
  return (
    <Stack.Navigator initialRouteName="Search">
      {addProductRoutes(Stack)}
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};
export default SearchStack;
