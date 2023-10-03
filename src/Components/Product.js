import React from 'react'
import StarIcon from '@mui/icons-material/Star';

const Product = (props) => {
  return (
    <div className='product'>
        <img src={props.image} alt=" "/>
        <div className='product__info'>
            <p className='product__infoTitle'>{props.title}</p>
            <div className='product__rating'>
                {
                    Array(props.rating).fill().map((_) => (
                        <span><StarIcon className='product__ratingStar' /></span>
                    ))
                }
            </div>
            <p className='product__infoPrice'>&#8377;{props.price}</p>
        </div>
        <button className='btn product__btn'>Add To Cart</button>
    </div>
  )
}

export default Product