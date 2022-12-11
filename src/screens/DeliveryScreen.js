import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectResaturant } from '../redux/restaurantSlice'

const DeliveryScreen = () => {
  const navigation = useNavigation()
  const restaurant = useSelector(selectResaturant)



  return (
    <View className="bg-[#00CCBB] flex-1">
      <Text>DeliveryScreen</Text>
    </View>
  )
}

export default DeliveryScreen