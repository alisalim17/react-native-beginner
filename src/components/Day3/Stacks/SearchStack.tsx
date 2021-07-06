import { createStackNavigator } from "@react-navigation/stack";
import faker from "faker";
import React, { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SearchParamList } from "../../../types/SearchParamList";
import { tailwind } from "../../../utils/tailwind";
import Center from "../Center";
import uuid from "react-native-uuid";
import { useEffect } from "react";

const Stack = createStackNavigator<SearchParamList>();

const Search = () => {
  const [text, setText] = useState("");
  const myFakeData = Array.from(Array(50), () => faker.commerce.product());

  const [data, setData] = useState(myFakeData);

  console.log("text", text, myFakeData);
  useEffect(() => {
    const newData = myFakeData.filter((i) => {
      console.log("i", i);
      return i.toLowerCase().includes(text.toLowerCase());
    });
    console.log(newData);
    setData(newData);
  }, [text]);

  return (
    <Center>
      <Text>eearch</Text>
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
                onPress={() => {}}
                // onPress={() => navigation.navigate("Product", { name: item })}
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
    <Stack.Navigator>
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};
export default SearchStack;
