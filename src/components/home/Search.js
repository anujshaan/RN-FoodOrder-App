import { View, Text, TextInput } from 'react-native'
import React from 'react';
import {
    MagnifyingGlassIcon,
    AdjustmentsVerticalIcon
  } from 'react-native-heroicons/outline'

const Search = () => {
  return (
    <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 rounded-md space-x-2 bg-gray-200 p-3">
            <MagnifyingGlassIcon color="#00CCBB"/>
            <TextInput 
              placeholder='Resturants and Dishes...'
              keyboardType='default'
            />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB"/>
    </View>
  )
}

export default Search