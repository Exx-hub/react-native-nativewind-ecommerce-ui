import { FlatList, Text } from "react-native";
import { products } from "../products";
import ProductCard from "./ProductCard";

function ProductsList() {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductCard {...item} />}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      //   className="px-[15px]"
    />
  );
}

export default ProductsList;
