import { configureStore } from '@reduxjs/toolkit'
import exampleReducer from './reducers/exampleSlicer'

export default configureStore({
  reducer: {
    example: exampleReducer,

    //add other reducers here
    //settings: settingsReducer,

  }
})