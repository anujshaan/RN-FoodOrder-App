import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import Currency from "react-currency-formatter";
import { urlFor } from "../client";
import { PlusCircleIcon, MinusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, removeFromBasket, selectBasketItemsWithId } from "../redux/basketSlice";

const DishRow = ({ id, name, description, image, price }) => {
  const items = useSelector(state => selectBasketItemsWithId(state, id))
  const [isPressed, setIsPressed] = useState(false);
  const dispatch = useDispatch();
  
  const addItemToBasket = () =>{
    dispatch(addToBasket({
      id, name, description, image, price
    }))
  }

  const removeItemFromBasket = () =>{
    dispatch(removeFromBasket({id}))
  }

  return (
    <>
      <TouchableOpacity
        className={`p-4 bg-gray-600 border-y border-gray-700 ${isPressed && "border-b-0"} `}
        onPress={() => {
          setIsPressed(true);
          dispatch(addToBasket({
            id, name, description, image, price
          }))
        }}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1 font-semibold text-white">
              {name}
            </Text>
            <Text className="text-gray-300">{description}</Text>
            <Text className="text-gray-300 mt-2">
              <Currency quantity={price} currency="INR" />
            </Text>
          </View>
          <View>
            <Image
              style={{ borderWidth: 1, borderColor: "#F3F3F4" }}
              source={{ uri: urlFor(image).url() }}
              className="h-20 w-20 bg-gray-300 p-4 rounded-sm"
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed ? (
        <View className={`flex-row px-4 space-x-2 items-center bg-gray-600 pb-2 mb-1 ${items.length === 0 && 'hidden'} `}>
          <TouchableOpacity onPress={removeItemFromBasket}>
            <MinusCircleIcon size={40} color="#64ffda" />
          </TouchableOpacity>
          <Text className="text-white font-bold">{items.length}</Text>
          <TouchableOpacity onPress={addItemToBasket}>
            <PlusCircleIcon size={40} color="#64ffda" />
          </TouchableOpacity>
        </View>
      ) : null}
    </>
  );
};

export default DishRow;
