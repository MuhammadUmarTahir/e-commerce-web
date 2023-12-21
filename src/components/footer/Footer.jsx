import React from 'react'
import "./Footer.scss"
const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>

        </div>
        <div className="item">
        <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque provident, incidunt, eius alias quidem maiores quas saepe illo cum modi ducimus, suscipit blanditiis autem error repudiandae deleniti dolorum necessitatibus quis!
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus enim veritatis odit inventore suscipit, neque, maiores possimus porro atque praesentium deserunt modi asperiores corrupti sunt quo sequi ab, assumenda quia.</span>
        </div>
  
      </div>
      <div className="bottom">
        <div className="left">
          <span className='logo'>Umarstore</span>
          <span className='copyright'> © Copyright 2023. All Rights Reserved</span>
        </div>
        <div className="right">
          <img src='/img/payment.png' alt=' ' />
        </div>
      </div>
    </div>
  )
}

export default Footer