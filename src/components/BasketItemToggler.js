import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { selectBasketItems, selectBasketTotal } from "../redux/basketSlice";
import Currency from "react-currency-formatter";

const BasketItemToggler = () => {
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const navigation = useNavigation();

  return (
    <>
      {items.length > 0 ? (
        <View className="absolute bottom-16 z-50 w-full">
          <TouchableOpacity 
            className="flex-row mx-5 bg-[#64ffda] p-4 rounded-lg items-center space-x-2 justify-between"
            onPress={()=> navigation.navigate('Basket')}  
          >
            <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2">
              {items.length}
            </Text>
            <Text className="text-gray-700 font-extrabold text-lg">
              View Basket
            </Text>
            <Text className="text-lg text-gray-700 font-extrabold">
              <Currency quantity={basketTotal} currency="INR" />
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </>
  );
};

export default BasketItemToggler;
