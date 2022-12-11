import { View, Text, SafeAreaView,TouchableOpacity, Image, ScrollView } from 'react-native'
import React,{useState,useMemo} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectResaturant } from '../redux/restaurantSlice'
import { useNavigation } from '@react-navigation/native'
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../redux/basketSlice'
import {XCircleIcon} from 'react-native-heroicons/solid'
import { urlFor } from '../client';
import Currency from 'react-currency-formatter'


const BasketScreen = () => {
  const navigation = useNavigation()
  const restaurant = useSelector(selectResaturant)
  const basketTotal = useSelector(selectBasketTotal)
  const items = useSelector(selectBasketItems)
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([])
  const dispatch = useDispatch();
  
  useMemo(()=>{
    const groupedItems = items.reduce((results, item)=>{
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    },{})
    setGroupedItemsInBasket(groupedItems)
  },[items])
  

  return (
    <SafeAreaView className="bg-gray-800 flex-1">
      <View className="flex-1 bg-gray-900">
        <View className="p-5 border-b border-[#00BBCC] shadow-xs bg-gray-800">
          <View>
            <Text className="text-lg font-bold text-center text-white">Basket</Text>
            <Text className="text-center text-gray-200">{restaurant.title}</Text>
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full bg-gray-200 absolute top-5 right-5"
          >
            <XCircleIcon color="#00BBCC" size={40}/>
          </TouchableOpacity>
        </View>  
        <View className="flex-row items-center space-x-4 px-4 py-3 bg-gray-100 my-5 mx-2 rounded-2xl">
          <Image
            source={{
              uri:"https://i.ibb.co/Vj3jKsf/ed825791-0ba4-452c-b2cb-b5381067aad3-RW-hk-kit-importance.png"
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <Text className="flex-1 text-gray-900 font-semibold">Deliver in 50-70 mins</Text>
          <TouchableOpacity>
            <Text className="font-semibold text-[#00CCBB]">Change</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          {
            Object.entries(groupedItemsInBasket).map(([key,items])=>(
              <View key={key}
                className="flex-row items-center space-x-3 py-2 px-5 bg-gray-800 my-1 mx-2 rounded-lg">
                <Text className="text-[#00CCBB] font-semibold">{items.length} x</Text>
                <Image
                  source={{uri: urlFor(items[0]?.image).url()}}
                  className="h-12 w-12 rounded-full"
                />
                <Text className="flex-1 text-white font-semibold">{items[0]?.name}</Text>
                <Text className="text-white font-semibold">
                  <Currency quantity={items[0]?.price} currency="INR"/>
                </Text>
                <TouchableOpacity onPress={()=> dispatch(removeFromBasket({id:key}))}>
                  <Text className="text-[#00CCBB] text-xs">
                    Remove
                  </Text>
                </TouchableOpacity>
              </View>
            )
            )
          }
        </ScrollView>
        <View className="p-5 bg-gray-200 mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-500">Sub Total</Text>
            <Text className="text-gray-500 font-semibold">
              <Currency quantity={basketTotal} currency="INR" />
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-500">Delivery Charge</Text>
            <Text className="text-gray-500">
              <Currency quantity={40} currency="INR" />
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="font-semibold">Order Total</Text>
            <Text className="font-bold">
              <Currency quantity={40 + basketTotal} currency="INR" />
            </Text>
          </View>
          <TouchableOpacity className="rounded-lg bg-[#00CCBB] p-4"
            onPress={()=> navigation.navigate('Preparing')}>
            <Text className="text-center font-bold text-white text-lg">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default BasketScreen