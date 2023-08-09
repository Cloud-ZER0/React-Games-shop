import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import GameItem from '../GameItem/GameItem';
import { filter, filterByTag } from '../../Store/GameItemSlice';

export default function GameList({filteredText}) {

  const gameStore = useSelector(state => state.GameItemSlice.games);
  const Dispatch = useDispatch();
  const startFilter = () => {
    Dispatch(filter(filteredText));
  }

  const [tagFilter, setTagFilter] = useState('');
  
  const filtredArray = useMemo(()=>{
    startFilter();
  },[filteredText])

  const foo = () => {
    Dispatch(filterByTag(tagFilter));
  }

  const tagFiler = (tag) => {
    setTagFilter(tag);
    foo();
  }




  return (
    <div className="row gx-5 gy-4">
        {gameStore.map(g => {
            return <GameItem key={g.title} {...g} tagFilter={tagFiler}/>
        })}
    </div>
  )
}
