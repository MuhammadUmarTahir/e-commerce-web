import { AddShoppingCart } from '@mui/icons-material';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import React, { useState } from 'react'
import "./Product.scss"

const Product = () => {
  const [selectedImages, setSelectedImages] = useState(0);
  const [quantity, setQuantity] = useState(0)
  const images = [
    "https://cdn.pixabay.com/photo/2017/11/02/14/25/model-2911325__340.jpg",
    "https://cdn.pixabay.com/photo/2017/09/27/15/57/man-2792505__340.jpg"
  ]
  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt =""  onClick={e => setSelectedImages(0)}/>
          <img src={images[1]} alt = "" onClick={e => setSelectedImages(1)}/>

        </div>
        <div className="mainImg">
          <img src ={images[selectedImages]} alt = ""/>

        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className='price'>$199</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim omnis facilis ipsa in animi provident architecto ex laborum ratione illum vel nobis autem cupiditate perferendis voluptates consequuntur, voluptate, cum et.</p>
        <div className="quantity">
          <button onClick={()=> setQuantity(prev => prev === 1 ? 1 : prev -1) }>-</button>
          {quantity}
          <button onClick={()=>setQuantity(prev => prev+1)}>+</button>
        </div>
        <button className='add'>
          <AddShoppingCart /> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon /> ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
      </div>

    </div>
  )
}

export default Product