import React from 'react'
import Card from '../Card/Card'

const Lists = () => {
    const data = [
        {
            id:1,
            img: "https://cdn.pixabay.com/photo/2017/06/20/22/14/man-2425121__340.jpg",
            img2 : "https://cdn.pixabay.com/photo/2017/08/06/15/13/woman-2593366__340.jpg",
            title: "Long Sleeve Graphic T-shirt",
            isNew : true,
            oldPrice:19,
            price:12,
        },
        {
            id:2,
            img: "https://cdn.pixabay.com/photo/2016/11/29/07/16/balancing-1868051__340.jpg",
            img2: "https://cdn.pixabay.com/photo/2015/02/19/12/59/man-642063_960_720.jpg",
            title: "Coat",
            isNew : true,
            oldPrice:19,
            price:12,
        },
        {
            id:3,
            img: "https://cdn.pixabay.com/photo/2017/03/27/13/28/man-2178721__340.jpg",
            img2: "https://cdn.pixabay.com/photo/2015/06/20/13/55/man-815795_960_720.jpg",
            title: "Skirt",
            isNew : true,
            oldPrice:19,
            price:12,
        },
        {
            id:4,
            img: "https://media.istockphoto.com/id/1398610798/photo/young-woman-in-linen-shirt-shorts-and-high-heels-pointing-to-the-side-and-talking.jpg?b=1&s=170667a&w=0&k=20&c=rQlOFuWCQU8efYVcJuJmXd831QNHco6kmAvHFcbwlEk=",
            img2: "https://cdn.pixabay.com/photo/2016/11/29/01/34/man-1866572_960_720.jpg",
            title: "Hat",
            isNew : true,
            oldPrice:19,
            price:12,
        },
    ]
  
  return (
    <div className='list'>
        {
            data?.map((item) => <Card item={item} key = {item.id} />)
        }
           

    </div>
  )
}

export default Lists