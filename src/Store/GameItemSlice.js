import { createSlice } from "@reduxjs/toolkit";

import images from "../Images/images";

const gameItemSlice = createSlice({
    name: 'gameSlice',
    initialState: {
        games: [
            {title: 'Forza Horizon', tags: ['Racing', 'Adventure', 'Action'], imgRef: images.ForzaHorizon, price: '60'},
            {title: 'Dead Space', tags: ['Action', ' Survival horror', 'Adventure'], imgRef: images.DeadSpace , price: '60'},
            {title: 'Far Cry 3', tags: ['Action-adventure', 'FPS'], imgRef: images.farCry3, price: '10.99'},
            {title: 'Marvel`s Spider-man', tags: ['Action-adventure'], imgRef: images.SpiderMan, price: '40'},
            {title: 'Batman: Arkham City', tags: ['Action-adventure', ' Adventure'], imgRef: images.Batman, price: '35.99'},
            {title: 'Max Payne 3', tags: ['Action', 'FPS'], imgRef: images.MaxPayne3, price: '32'},
        ],
        buffer: [],
    },
    reducers: {
        filter(state,{payload}) {
            if(payload) {
                state.games = state.games.filter(g=>g.title.includes(payload));
                console.log(payload);
            }
        },
        filterByTag(state, {payload}) {
            //console.log(payload);
            if(payload !== '') {
                state.games = state.games.filter(g=>g.tags.includes(payload));
            }
            //console.log(state.games.some(el=>el.tags.includes(payload)));
            //console.log('filtred by tag');
        }
    }
})

export const {filter, filterByTag} = gameItemSlice.actions;
export default gameItemSlice.reducer;