import { configureStore } from "@reduxjs/toolkit";
import GameItemSlice from "./GameItemSlice";
import FavoriteGamesSlice from "./FavoriteGamesSlice";

export default configureStore({
    reducer: {
        GameItemSlice,  
        FavoriteGamesSlice,      
    }
})