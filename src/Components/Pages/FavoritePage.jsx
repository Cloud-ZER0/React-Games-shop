import React from 'react'
import cl from './FavoritePage.module.css'
import BasketList from '../BasketList/BasketList'

export default function FavoritePage() {
  return (
    <div className={cl._wrapper}>
      <div className="container pt-5 mt-3">
        <main>
          <BasketList/>
        </main>
      </div>
    </div>
  )
}
