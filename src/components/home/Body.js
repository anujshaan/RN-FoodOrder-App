import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Categories from '../Categories'
import Featured from '../Featured';
import { fetchFeaturedData } from '../../utils/fetchData';
import client from '../../client';

const Body = () => {
  const [featuredCategories, setFeaturedCategories] = useState([])

  useEffect(()=>{
    client.fetch(fetchFeaturedData)
      .then((data) => setFeaturedCategories(data))
  },[])

  return (
    <ScrollView className="bg-gray-700 mb-40"
      showsVerticalScrollIndicator={false}
      >
        <Categories/>
        {
          featuredCategories.map((category) =>(
            <Featured
              key={category._id}
              id={category._id}
              title={category.name}
              description={category.short_description}
            />
          ))
        }
    </ScrollView>
  )
}

export default Body