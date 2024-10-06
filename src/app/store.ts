import { configureStore } from '@reduxjs/toolkit'
import homePageReducer from '../features/home/homePageSlice'
import dataPageReducer from '@/features/data/dataSlice'

const store = configureStore({
  reducer: {
    homePage: homePageReducer,
    dataPage: dataPageReducer
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;