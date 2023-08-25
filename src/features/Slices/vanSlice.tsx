import  vanData  from '../../data.json';
import { createSlice, } from "@reduxjs/toolkit";
interface Van{
    id: string;
    name:string;
    price:number;
    description:string;
    imageUrl:string;
    type:string;
    hostId: string;
  } 
  interface VanData{
    data : Van[];
  }
  const initialState:VanData = {
    data: vanData,
  }
  const vanSlice = createSlice({
    name : 'van',
    initialState,
    reducers:{

    },
  })
  export default vanSlice.reducer;