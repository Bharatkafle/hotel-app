import React from 'react'
import MenuItem from '../../components/Menuitem/MenuItem'
import SubHeading from '../../components/SubHeading/SubHeading'
import data from '../../constants/data'
import images from '../../constants/images'
import './Special.css'


const SpecialMenu = () => {
  return (
    <div className='app__specialMenu flex__center section__padding' id='menu'>
      <div className='app__specialMenu-title'>
        <SubHeading title="Menu that fits you palatte" />
        <h1 className='headtext__cormorant'> Today's Special</h1>
      </div>
      <div className='app__specialMenu-menu'>
        <div className='app__specialMenu-menu_wine flex__center'>
        <p className='app__specialMenu-menu_wine_heading app__specialMenu-menu_heading'>Wine & Beer</p>
        <div className='app__specialMenu_menu_items'>
          {data.wines.map((wine, index) => {
            return (
              <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
           )
          })}
          </div>
        </div>

        <div className='app__specialMenu-menu_img'>
          <img src={images.menu} />
        </div>


        <div className='app__specialMenu-menu_cocktails flex__center'>
        <p className='app__specialMenu-menu_cocktails_heading app__specialMenu-menu_heading'>Cocktails</p>
        <div className='app__specialMenu_menu_items'>
          {data.cocktails.map((cocktail, index) => {
            return (
              <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
           )
          })}
          </div>
        </div>
      </div>
      <div style={{margin: '15px'}}>
        <button types="button" className='custom__button'>View more</button>
      </div>

    </div>
  )
}

export default SpecialMenu