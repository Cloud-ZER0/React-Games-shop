import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import BasketItem from '../BasketItem/BasketItem';
import cl from './BasketList.module.css';



export default function BasketList() {

    const favs = useSelector(state => state.FavoriteGamesSlice.favorites);

    const [totalAmount, setTotalAmount] = useState(0);

    useMemo(()=>{
        let amount = 0;
        for(let i = 0; i < favs.length; ++i) {
            amount+=Number(favs[i].price);
        }
        setTotalAmount(amount);
        console.log('memo');
    },[favs])

    return favs.length === 0? <h1 className='text-white text-center'>Bucket is empty</h1> : (
    <div className="container-lg">
        <form className='mb-3'>
            <label for='email' className='form-label'>
                <div className='container d-flex flex-row justify-content-start align-items-center p-0'>
                    <div className={cl._rounded}>1</div>
                    <span className='display-6 text-white'>Enter your Email address</span>
                </div>
            </label>
            <input type="email" className='form-control' placeholder='Enter email...'/>
        </form>
        <div className='container d-flex flex-row justify-content-start align-items-center p-0 mb-3'>
            <div className={cl._rounded}>2</div>
            <span className='display-6 text-white'>Your basket</span>
        </div>
        <div className="row gy-1">
            {favs.map(game => {
                return <BasketItem key={game.title} {...game} />
            })}
        </div>
        <div className="container-lg d-flex flex-row justify-content-end align-items-center p-0 mt-3">
            <span className='display-6 text-white'>{'Total: '}{totalAmount}{'$'}</span>
        </div>
    </div>
  )
}
