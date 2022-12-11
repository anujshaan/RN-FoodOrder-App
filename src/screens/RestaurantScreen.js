import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { urlFor } from '../client';
import { ArrowLeftIcon, ChevronRightIcon, QuestionMarkCircleIcon } from 'react-native-heroicons/outline';
import {StarIcon,MapPinIcon} from 'react-native-heroicons/solid'
import DishRow from '../components/DishRow';
import BasketItemToggler from '../components/BasketItemToggler';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setResaturant } from '../redux/restaurantSlice';

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {params:{
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
  }} = useRoute();

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown:false
    })
  })

  useEffect(()=>{
    dispatch(setResaturant({
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    }))
  },[dispatch])


  return (
    <>
    <BasketItemToggler/>

    <ScrollView className="bg-gray-700" showsVerticalScrollIndicator={false}>
      <View className="relative">
        <Image
          source={{
            uri: urlFor(imgUrl).url(),
          }}
          className="w-full h-56 bg-gray-300 p-4"
        />
        <TouchableOpacity 
          onPress={navigation.goBack}
          className="absolute left-5 top-14 bg-gray-100 rounded-full p-2">
          <ArrowLeftIcon size={20} color="#00CCBB"/>
        </TouchableOpacity>
      </View>
      <View>
        <View className="px-4 pt-4">
          <Text className="text-3xl text-white font-bold">{title}</Text>
          <View className="flex-row flex-wrap space-x-2 my-1">
            <View className="flex-row items-center space-x-1">
              <StarIcon opacity={0.7} size={20} color="green"/>
              <Text className="text-xs text-gray-500">
                <Text className="text-green-500">{rating}</Text> . {genre}
              </Text>
            </View>
            <View className="flex-row items-center space-x-1">
              <MapPinIcon opacity={0.7} size={20} color="gray"/>
              <Text className=" text-xs text-gray-500">
                Nearby . {address}
              </Text>
            </View>
          </View>
          <Text className="text-gray-300 mt-2 pb-4">{short_description}</Text>
        </View>
        <TouchableOpacity className="flex-row items-center mx-4 bg-gray-100 p-4 rounded-xl ">
          <QuestionMarkCircleIcon color="red" size={22} opacity={0.6}/>
          <Text className="pl-2 flex-1 text-md font-bold text-gray-500">
            Have a food allergy?
          </Text>
          <ChevronRightIcon color="#00BBCC"/>
        </TouchableOpacity>
        <View className="pb-36">
          <Text className="px-4 pt-6 mb-3 font-bold text-xl text-gray-200" >Menu</Text>
          {
            dishes.map((dish)=>(
              <DishRow
                key={dish._id}
                id={dish._id}
                name={dish.name}
                description={dish.short_description}
                price={dish.price}
                image={dish.image}
              />
            ))
          }
        </View>
      </View>
    </ScrollView>
    </>
  )
}

export default RestaurantScreen