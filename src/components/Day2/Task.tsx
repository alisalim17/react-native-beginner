import React from "react";
import { View, Text } from "react-native";
import { tailwind } from "../../utils/tailwind";

interface TaskProps {
  text: string;
}

const Task: React.FC<TaskProps> = ({ text }) => {
  return (
    <View
      style={tailwind(
        "flex flex-row justify-between items-center bg-white p-3 rounded-10"
      )}
    >
      <View style={tailwind("flex flex-row")}>
        <View
          style={tailwind("w-24 bg-secondary opacity-40 p-2 rounded-5 mr-2")}
        />
        <Text>{text}</Text>
      </View>
      <View style={tailwind("w-3 h-3 rounded-10 border-2 border-secondary")} />
    </View>
  );
};

export default Task;
