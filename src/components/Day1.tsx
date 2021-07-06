import React, { useState } from "react";
import {
  ActivityIndicator,
  Button,
  Image,
  StyleSheet,
  Switch,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

const Day1 = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [counter, setCounter] = useState(0);

  const toggleSwitch = () => setIsEnabled(!isEnabled);

  const handleCounter = (value: number) => setCounter(counter + value);

  return (
    <>
      <Text numberOfLines={1}>
        😘 Open up App.tsx to start working on your app Open up App.tsx to start
        working on your app Open up App.tsx to start working on your app!
      </Text>

      <Button color="orange" title="click me" onPress={() => {}}></Button>
      <ActivityIndicator size="large" />

      {/* <Image
          style={{ width: 200, height: 200 }}
          source={require("./assets/test.png")}
        /> */}

      <TouchableHighlight onPress={() => handleCounter(1)}>
        <View style={styles.button}>
          <Text>increase</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => handleCounter(-1)}>
        <View style={styles.button}>
          <Text>decrease</Text>
        </View>
      </TouchableHighlight>

      <View style={styles.countContainer}>
        <Text style={styles.countText}>{counter}</Text>
      </View>

      <TouchableHighlight>
        <Image
          source={{
            uri: "https://picsum.photos/200/300",
            width: 200,
            height: 300,
          }}
        />
      </TouchableHighlight>

      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </>
  );
};
export default Day1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    margin: 10,
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
  },
  countText: {
    color: "#FF00FF",
  },
});
