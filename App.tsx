import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Switch,
  View,
  ScrollView,
  Image,
  TouchableHighlight,
  ActivityIndicator,
  Button,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [counter, setCounter] = useState(0);

  const toggleSwitch = () => setIsEnabled(!isEnabled);

  const handleCounter = (value: number) => setCounter(counter + value);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text numberOfLines={1}>
          Open up App.tsx to start working on your app Open up App.tsx to start
          working on your app Open up App.tsx to start working on your app!
        </Text>

        <Button
          color="orange"
          title="click me"
          onPress={() => console.log("fired")}
        ></Button>
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
        <StatusBar backgroundColor="red" style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

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
