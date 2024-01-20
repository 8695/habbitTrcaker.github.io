import { configureStore } from '@reduxjs/toolkit';
import habbitSlice from "./slices/habbitSlice";

export const store= configureStore({
    reducer:{
        habbitData:habbitSlice,
        
    }
})