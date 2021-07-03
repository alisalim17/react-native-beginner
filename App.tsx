import { StatusBar } from "expo-status-bar";
import React from "react";
import { RefreshControl, ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Day2 from "./src/components/Day2/Day2";
import { tailwind } from "./src/utils/tailwind";
import { wait } from "./src/utils/wait";

const App = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={tailwind("flex-1 px-4 py-2 bg-primary-200")}>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {/* <Day1 /> */}
          <Day2 />
          <StatusBar backgroundColor="rgba(0,0,0,0.8)" />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
