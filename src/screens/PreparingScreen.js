import { View, Text, SafeAreaView } from 'react-native'
import React from 'react';
import * as Animatable from "react-native-animatable";
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

const PreparingScreen = () => {
  const navigation = useNavigation()

  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate('Delivery')
    },4000)
  },[])


  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 items-center justify-center">
      <Animatable.Image 
        source={require("../../assets/preparingImg.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 text-gray-100 font-extralight text-center"
      >
        Waiting for Resaturant to accept your order...
      </Animatable.Text>

      <Progress.Circle size={60} indeterminate={true} color="white"/>

    </SafeAreaView>
  )
}

export default PreparingScreen