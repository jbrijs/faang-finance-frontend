import { configureStore } from '@reduxjs/toolkit'
import homePageReducer from '../features/home/homePageSlice'

export default configureStore({
  reducer: {
    homePage: homePageReducer
  },
})