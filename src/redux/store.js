import { configureStore } from '@reduxjs/toolkit'
import messageReducer from './slices/messageSlice'
import notesReducer from './slices/notesSlice'
import productReducer from './slices/productSlice'
import cartReducer from './slices/cartSlice'
export default configureStore({
    reducer: {
        // messageReducer,
        // notesReducer,
        productReducer,
        cartReducer
        
    }
})

