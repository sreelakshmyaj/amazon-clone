import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from '../StateProvider';
import CurrencyFormat from 'react-currency-format';

const Product = (props) => {

    const [{cart}, dispatch] = useStateValue();
    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: props.id,
                title: props.title,
                price: props.price,
                image: props.image
            }
        })
    }

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
            <CurrencyFormat 
                renderText={(value) => (
                    <p className='product__infoPrice'>{value}</p>
                )}
                decimalScale={2}
                value={props.price}
                displayType={"text"}
                thousandSeparator={true}
                prefix='&#8377;'
            />
        </div>
        <button className='btn product__btn' onClick={addToCart}>Add To Cart</button>
    </div>
  )
}

export default Product