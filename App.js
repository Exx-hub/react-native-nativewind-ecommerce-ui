import { StatusBar } from "expo-status-bar";

import { SafeAreaView, Switch } from "react-native";
import { Text, View } from "react-native";
import { useColorScheme } from "nativewind";
import ProductsList from "./components/ProductsList";

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  console.log(colorScheme);

  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-gray-200 dark:bg-black">
      <View className="flex-row w-full gap-3">
        <Text className="text-2xl font-bold dark:text-white">New Collection</Text>
        <Switch value={colorScheme === "dark"} onValueChange={toggleColorScheme} />
      </View>
      <ProductsList />
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
    </SafeAreaView>
  );
}
