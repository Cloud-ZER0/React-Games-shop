import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../../Routes/routes'
import cl from './MyHeader.module.css'
import basketIcon from '../../Icons/basket.svg';
import { useSelector } from 'react-redux';


export default function MyHeader({setTextVal}) {
    
    const size = useSelector(state => state.FavoriteGamesSlice.size);

    const [localeText, setLocalText] = useState('');

    const removeSubmit = (event) => {
        event.preventDefault();
        if(localeText.length !== 0) {
            setTextVal(localeText);
        }
    }

    return (
    <header className={cl._header}>
        <nav className='navbar navbar-expand-lg navbar-light bg-light justify-content-between fixed-top'>
            <Link className='navbar-brand _link ms-3' to={routes.home}>Games Store</Link>
            <div className='d-flex flex-row align-items-center'>
                <form class="form-inline d-flex flex-row gap-3 " onSubmit={(event)=>{removeSubmit(event)}}>
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={localeText} onChange={e=>setLocalText(e.target.value)}/>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                <Link className={cl._link} to={routes.favorite}>
                    <div className='container d-flex flex-row justify-content-between bg-success align-items-center rounded'>
                        <img height={'40px'} width={'40px'} src={basketIcon} alt="none" />
                        <div className="_notify">{size}</div>
                    </div>
                </Link>
            </div>
        </nav>
    </header>
  )
}
