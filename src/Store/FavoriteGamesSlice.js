import { createSlice } from "@reduxjs/toolkit";

const FavoriteGamesSlice = createSlice({
    name: 'favoriteGames',
    initialState: {
        favorites: [],
        size: 0
    },
    reducers: {
        AddToFavorite(state, {payload}) {
            if(!state.favorites.some(el => el.title === payload.title)) {
                state.favorites.push(payload);
                ++state.size;
            }
           
        },
        RemoveFromFavorite(state, {payload}) {
            state.favorites = state.favorites.filter(g => g.title !== payload.title);
            --state.size;

        }
    }
})

export const {AddToFavorite, RemoveFromFavorite} = FavoriteGamesSlice.actions;
export default FavoriteGamesSlice.reducer;