import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import {ArrowRightIcon} from 'react-native-heroicons/outline'
import ResturantCards from './home/ResturantCards'
import client from '../client'

const Featured = ({id,title, description}) => {
  const [restaurantDetails, setRestaurantDetails] = useState([])

  useEffect(()=>{
    client.fetch(`
      *[_type == "featured" && _id == $id]{
        ...,
        restaurants[]->{
          ...,
          dishes[]->,
          type->{
            name
          }
        }
      }[0]
    `,{id})
    .then((data) =>  setRestaurantDetails(data?.restaurants))
  },[id])


  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg text-white">{title}</Text>
        <ArrowRightIcon color="#00CCBB"/>
      </View>

      <Text className="text-xs text-gray-400 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal:15
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
      {
        restaurantDetails?.map((restaurant)=>(
          <ResturantCards
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type?.name}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))
      }
      </ScrollView>

    </View>
  )
}

export default Featured