import { View, Text,SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/home/Header';
import Body from '../components/home/Body';


const HomeScreen = () => {
  const navigation = useNavigation();


  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown:false
    })
  },[])

  return (
    <SafeAreaView className=" bg-gray-800">
      
      {/* -------------Header------------- */}
        <Header/>

      {/* -------------Body------------- */}
        <Body/>
    
    </SafeAreaView>
  )
}

export default HomeScreen