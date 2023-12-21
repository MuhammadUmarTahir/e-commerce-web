import React from 'react'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import "./Cart.scss"
const Cart = () => {
    const data = [
        {
            id:1,
            img: "https://cdn.pixabay.com/photo/2017/06/20/22/14/man-2425121__340.jpg",
            img2 : "https://cdn.pixabay.com/photo/2017/08/06/15/13/woman-2593366__340.jpg",
            title: "Long Sleeve Graphic T-shirt",
            desc : "Long Sleeve Graphic T-shirt",
            isNew : true,
            oldPrice:19,
            price:12,
        },
        {
            id:2,
            img: "https://cdn.pixabay.com/photo/2016/11/29/07/16/balancing-1868051__340.jpg",
            img2: "https://cdn.pixabay.com/photo/2015/02/19/12/59/man-642063_960_720.jpg",
            title: "Coat",
            desc : "Coat",
            isNew : true,
            oldPrice:19,
            price:12,
        },
    ]
  return (
    <div className='cart'>
        <h1>Products in your cart</h1>
        {
            data?.map (item => (
                <div className='item' key ={item.id}>
                    <img src={item.img} alt = ""/>
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0, 100)}</p>
                        <div className="prie">1 x $ {item.price}</div>
                    </div>
                    <DeleteOutlinedIcon  className ="delete"/>
                     </div>
            ))
        }
        <div className="total">
            <span>SUBTOTAL</span>
            <span>$123</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className='reset'>Reset Cart</span>

        
    
            
    </div>
  )
        
}

export default Cart