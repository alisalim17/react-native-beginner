import React from "react";
import { View } from "react-native";
import { tailwind } from "../../utils/tailwind";

const Center: React.FC = ({ children }) => {
  return (
    <View style={tailwind("flex-1 justify-center items-center")}>
      {children}
    </View>
  );
};
export default Center;
