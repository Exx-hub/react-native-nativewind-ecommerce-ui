import { View, Text, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";
import { useState } from "react";

function ProductCard({ title, price, description, category, image, rating }) {
  const [count, setCount] = useState(1);
  const { colorScheme } = useColorScheme();
  return (
    <View className="w-full bg-white dark:bg-gray-50/10 rounded-3xl p-5 my-5">
      <View className="bg-white rounded-xl">
        <Image source={{ uri: image }} className="w-full h-72" style={{ resizeMode: "contain" }} />
      </View>

      <View className="mt-5">
        <Text className="text-sm text-black/60 dark:text-white/70">{category}</Text>
        <Text className="text-lg font-semibold dark:text-white">{title}</Text>

        <View className="flex-row items-center justify-between my-3">
          <View className="flex-row gap-3 items-center">
            <AntDesign
              name="minuscircleo"
              size={24}
              color={colorScheme === "dark" ? "white" : "black"}
              onPress={() => setCount((prev) => prev - 1)}
            />

            <Text className="text-xl dark:text-white">{count}</Text>

            <AntDesign
              name="pluscircleo"
              size={24}
              color={colorScheme === "dark" ? "white" : "black"}
              onPress={() => setCount((prev) => prev + 1)}
            />
          </View>
          <Text className="text-2xl font-extrabold dark:text-white">
            ${(price * count).toFixed(2)}
          </Text>
        </View>

        <Text numberOfLines={2} className="text-sm text-black/60 dark:text-white/70">
          {description}
        </Text>

        <TouchableOpacity className="bg-black dark:bg-white p-3 rounded-full flex-row justify-center w-10/12 self-center mt-5">
          <Text className="text-white dark:text-black font-bold">Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ProductCard;
