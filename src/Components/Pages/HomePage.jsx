import React from 'react'
import cl from './HomePage.module.css'
import GameList from '../GameList/GameList'

export default function HomePage({filter}) {
  return (
    <div className={cl._home}>
        <div className="container pt-5 mt-3">
          <main>
            <GameList filteredText={filter}/>
          </main>
        </div>
    </div>
  )
}
