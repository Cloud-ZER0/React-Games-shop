import React from 'react';
import cl from './GameItem.module.css';
import { useAction } from '../../Hooks/useAction';

export default function GameItem({title, tags, imgRef, price, tagFilter}) {

    const {AddToFavorite} = useAction();

    const handleBasket = () => {
        AddToFavorite({title, tags, imgRef, price});
    }

  return (
    <div className="col-4">
        <div className="card border-0">
            <div style={{backgroundColor: "rgb(39, 37, 37)"}} className="card-body _gameCard p-0">
                <img  className='card-img-top' src={imgRef} alt="game" />
                <h2 className="card-title text-white ps-2 pt-2">{title}</h2>
                <div className="card-text ps-2">
                    <div className='container d-flex flex-column p-0'>
                        <div className='container d-flex flex-row gap-2 p-0'>
                            {tags.map(t => {
                                return <button onClick={()=>{tagFilter(t)}} key={t} className='btn btn-small btn-primary'>{t}</button>
                            })}
                        </div>
                        <div className="container-fluid d-flex flex-row justify-content-end align-items-center p-0 h-2">
                            <span className={cl._price}>{price}{'$'}</span>
                            <button className='btn btn-small btn-success me-3 mb-3 mt-3' onClick={handleBasket}>Buy</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
