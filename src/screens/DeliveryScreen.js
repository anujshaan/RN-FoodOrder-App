import { Image, View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectResaturant } from '../redux/restaurantSlice';
import { XMarkIcon } from 'react-native-heroicons/outline'
import * as Progress from 'react-native-progress';
import MapView,{Marker} from 'react-native-maps';


const DeliveryScreen = () => {
  const navigation = useNavigation()
  const restaurant = useSelector(selectResaturant)

  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
            <XMarkIcon color="white" size={30}/>
          </TouchableOpacity>
          <Text className="text-white text-lg font-light">Order Help</Text>
          </View>

        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-lg">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-4xl font-bold">40-45 minutes</Text>
            </View>
            <Image
              source={{
                uri:"https://i.giphy.com/media/gsr9MG7bDvSRWWSD1Y/giphy.webp",
              }}
              className="h-20 w-20"
            />
            </View>
            <Progress.Bar size={30} color="#00CCBB" indeterminate={true} />
            
            <Text className="mt-3 text-gray-500">
              Your Order at {restaurant.title} is being prepared
            </Text>
        
        </View>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005
        }}
        className="flex-1 -mt-10 z-0"
        mapType='mutedStandard'
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
          }}
          title={restaurant.title}
          description={restaurant.short_description}
          identifier="origin"
          pinColor="#00CCBB"
        />
      </MapView>
      <SafeAreaView className="bg-gray-800 flex-row items-center space-x-5 h-28">
        <Image
          source={{
            uri:"https://i.ibb.co/Vj3jKsf/ed825791-0ba4-452c-b2cb-b5381067aad3-RW-hk-kit-importance.png"
          }}
          className="h-12 w-12 rounded-full bg-gray-200 p-4 ml-5 "
        />
        <View className="flex-1">
          <Text className="text-lg text-white">Anuj Shaan</Text>
          <Text className="text-gray-200 font-light">Your Delivery Boy</Text>
        </View>
        <Text className="text-[#00CCBB] text-lg mr-5 font-bold">Call</Text>
      </SafeAreaView>
    </View>
  )
}

export default DeliveryScreen