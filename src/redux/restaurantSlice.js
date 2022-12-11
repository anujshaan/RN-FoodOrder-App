import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  restaurant:{
    id: null,
    imgUrl: null,
    title: null,
    rating: null,
    genre: null,
    address: null,
    short_description: null,
    dishes:null,
  }
}

export const restaurantSlice = createSlice({
  name:'restaurant',
  initialState,
  reducers:{
    setResaturant: (state, action)=>{
      state.restaurant = action.payload;
    }
  }
})

export const {setResaturant} = restaurantSlice.actions;

export const selectResaturant = (state) => state.restaurant.restaurant;


export default restaurantSlice.reducer