import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { View, Text } from 'react-native'

import HomeScreen from './src/screens/HomeScreen';
import RestaurantScreen from './src/screens/RestaurantScreen';
import {store} from './src/redux/store';
import { Provider } from 'react-redux';
import BasketScreen from './src/screens/BasketScreen';
import PreparingScreen from './src/screens/PreparingScreen';
import DeliveryScreen from './src/screens/DeliveryScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Restaurant" component={RestaurantScreen}/>
        <Stack.Screen name="Preparing" component={PreparingScreen}
          options={{presentation:'fullScreenModal', headerShown:false}}
        />
        <Stack.Screen name="Basket" component={BasketScreen}
          options={{ presentation:"modal", headerShown:false}}
        />
        <Stack.Screen name="Delivery" component={DeliveryScreen}
          options={{ presentation:"fullScreenModal", headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
