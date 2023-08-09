import React from 'react'
import img from '../../Images/DS.jpg';
import cl from './GamePage.module.css'

export default function GamePage({title, tags, imgRef, price}) {

  return (
    <div className={cl._bg}>
        <div style={{backgroundColor:"rgb(39, 37, 37)"}} className="card w-50 text-white">
            <div className="card-body">
                <img width={'400px'} height={'400px'} className='card-img' src={img} alt="logo"/>
                <div className="card-title">{title}</div>
                <div className="card-subtitle">
                    {tags.length !== 0 && tags.map(t=>{
                        return <button key={t} className="btn btn-small btn-primary">{t}</button>
                    })}
                </div>
                <span className="display-6">Description</span>
                <div className='card-text'>
                Dead Space is set in the year 2508, a time when humanity has spread throughout the universe. Following near-extinction of humans on Earth due to resource shortages, ships dubbed "Planetcrackers" are being used to harvest resources from barren planets.
                </div>
                <span className='display-6'>Screenshots</span>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-auto">
                            <img src={img} alt="" />
                        </div>
                        <div className="col-auto">
                            <img src={img} alt="" />
                        </div>
                    </div>
                </div>
                <div className='container-fluild d-flex flex-row justify-content-end align-items-center'>
                    <div>
                        <span className='text text-white me-2'>{price}{'$'}</span>
                        <div className="button btn btn-small btn-primary">Buy</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
