import React from 'react'

const MenuShow = ({burger}) => {
    console.log(burger);
  return (
    
    <div className='menu__item'>
        <div className='menu__image'><img src={burger.image} alt="burger"/></div>
        <h3 className='menu__title'>{burger.name}</h3>
        <h6 className='menu__desc'>{burger.content}</h6>
        <p className='menu__price'>{burger.price}</p>

    </div>
    
    
    
    
  )
}

export default MenuShow