import React from "react";
import { Text, View } from "react-native";
import { tailwind } from "../../utils/tailwind";
import Task from "./Task";

const Day2 = () => {
  return (
    <View style={{ backgroundColor: "blue" }}>
      <Text style={tailwind("text-2xl font-bold my-4")}>Today's tasks</Text>
      <Task text="I am task 1 👌" />
    </View>
  );
};
export default Day2;
