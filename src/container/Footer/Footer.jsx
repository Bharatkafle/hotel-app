import React from 'react'
import images from "../../constants/images"
import { AiFillInstagram, AiFillTwitterCircle, AiOutlineFacebook } from 'react-icons/ai'
import "./Footer.css"

const Footer = () => {
  return (
      <div className='footer flex__center'>
          <h1 className='headtext__cormorant'>GERICHT</h1>
          <p className='p__opensans '>"The best Way to find yourself is to llose your self in the service of others."</p>
      <img src={images.spoon} className='spoon__image' style={{width:'45px'}} />
      <div className='footer___socailmedia' >
        <AiFillInstagram />
        <AiFillTwitterCircle />
        <AiOutlineFacebook/>
      </div>
      <div className='p__opensans  p__opensans__footer'>
           <p>2022  Gericht. All Right Reserved</p>
     </div>
    </div>
  )
}

export default Footer