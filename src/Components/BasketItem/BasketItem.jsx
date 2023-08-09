import React from 'react';
import { Link } from 'react-router-dom';
import { RemoveFromFavorite } from '../../Store/FavoriteGamesSlice';
import { useDispatch } from 'react-redux';


export default function BasketItem({title,tags,imgRef, price}) {

    const Dispatch = useDispatch();

    const removeHandler = () => Dispatch(RemoveFromFavorite({title}));

  return (
    <div style={{backgroundColor: 'rgb(39, 37, 37)'}} className="col-12 d-flex flex-row justify-content-between p-0">
        <div className="right_side d-flex flex-row align-items-center">
            <Link to={'/'} >
                <img height={'100px'} width={'175px'} src={imgRef} alt="game-logo" />
            </Link>
            <span style={{fontSize: '25px'}} className='text-white ms-2'>{title}</span>
        </div>
        <div className="left_side d-flex flex-row align-items-center">
            <strong className='pe-3 text-white'>{price}{'$'}</strong>
            <button className='btn btn-small btn-danger me-3' onClick={removeHandler}>Remove</button>
        </div>
    </div>
  )
}
