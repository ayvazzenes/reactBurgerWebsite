import React from 'react'
import { Data } from '../Helpers/Data'
import "../styles/Menu.css"
import MenuShow from './MenuShow'

const Menu = () => {
  return (
    <div>
      <h1 className='home__menu-title'>Menulerimiz</h1>
      <div className='menu__list'>
        
          {Data.map((burger,index)=>{
            return <MenuShow burger={burger} key={index}/>
          })}
        
      </div>
    </div>
  )
}

export default Menu