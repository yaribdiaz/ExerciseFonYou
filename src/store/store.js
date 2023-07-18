import {configureStore} from '@reduxjs/toolkit'

// Reducers
import characterSlice from './character/characterSlice'

export default configureStore({
    reducer: {
        character : characterSlice
    }
})