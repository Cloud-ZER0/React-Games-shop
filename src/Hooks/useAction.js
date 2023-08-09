import { useMemo } from "react";
import { useDispatch } from "react-redux";
import {AddToFavorite, RemoveFromFavorite} from '../Store/FavoriteGamesSlice';
import { bindActionCreators } from "@reduxjs/toolkit";


const rootAction = {
    AddToFavorite, 
    RemoveFromFavorite,
}


export const useAction = () => {
    const dispatch = useDispatch();
    return useMemo(()=>{
        return bindActionCreators(rootAction, dispatch);
    },[dispatch])
}