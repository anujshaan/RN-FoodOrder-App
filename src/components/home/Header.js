import { View, Text, Image } from 'react-native'
import React from 'react'
import { 
    UserIcon,    
    ChevronDownIcon 
    } from 'react-native-heroicons/outline'
import Search from './Search'

const Header = () => {
  return (
    <>
        <View className="flex-row pb-4 items-center mx-4 space-x-2">
            <View>
                <Image
                source={{
                    uri:'https://i.ibb.co/Vj3jKsf/ed825791-0ba4-452c-b2cb-b5381067aad3-RW-hk-kit-importance.png'
                }}
                className='h-10 w-10 bg-gray-300 p-4 rounded-full'
                />
            </View>
            <View className="flex-1">
                <Text className="font-bold text-gray-300 text-xs">Deliver Now!</Text>
                <Text className="font-bold text-xl text-white">
                    Current Location
                    <ChevronDownIcon size={20} color="#00CCBB"/>
                </Text>
            </View>
            <UserIcon size={35} color="#00CCBB"/>
        </View>

        <Search/>
    </>
  )
}

export default Header