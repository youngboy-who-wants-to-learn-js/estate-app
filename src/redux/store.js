import { configureStore } from '@reduxjs/toolkit'
import { estateSlice } from "./estateSlice";


export default configureStore({reducer: estateSlice})
