import React from "react";
import { tailwind } from "../../utils/tailwind";
import { View, Text, TouchableOpacity } from "react-native";

const Day2 = () => {
  return (
    <View>
      <Text style={tailwind("text-2xl font-bold my-4")}>Today's tasks</Text>
      <View
        style={tailwind(
          "flex flex-row justify-between items-center bg-white p-3 rounded-10"
        )}
      >
        <View style={tailwind("flex flex-row")}>
          <View
            style={tailwind("w-24 bg-secondary opacity-40 p-2 rounded-5 mr-2")}
          />
          <Text>I am task 1 👌</Text>
        </View>
        <View
          style={tailwind("w-3 h-3 rounded-10 border-2 border-secondary")}
        />
      </View>
    </View>
  );
};
export default Day2;
