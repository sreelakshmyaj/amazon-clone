import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../Components/Header';
import StarIcon from '@mui/icons-material/Star';
import { Lock } from '@mui/icons-material';
import { useStateValue } from '../StateProvider';


const ProductInfo = () => {
    const location = useLocation();
    const { id, title, price, image, rating, mrp } = location.state;

    const [{ cart }, dispatch] = useStateValue();
    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                title: title,
                price: price,
                image: image
            }
        })
    }

  return (
    <div>
    <Header />
    <div className='productInfo'>
        <img className='productInfo__image' src={image} width={350} alt=''/>
        <div className='productInfo__container'>
            <p className='productInfo__containerTitle'>{title}</p>
            <div className='productInfo__rating'>
                <span className='rating'>{rating}</span>
                {
                    Array(rating).fill().map((_) => (
                        <span><StarIcon className='product__ratingStar' /></span>
                    ))
                }
            </div>
            <hr />
            <div className='productInfo__price'>
                <span className='price__discount'>
                    -{Math.round((mrp - price)/mrp*100)}%
                </span>
                <sup>&#8377;</sup>
                <span className='price'>{price}</span>
                <p><small className='mrp'>M.R.P.: <span>&#8377;{mrp}</span></small></p>
                <p><small>Inclusive of all taxes</small></p>
            </div>
            <hr />
            <div className='productInfo__services'>
                <div className='service'>
                    <img src='https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png' alt='' width={40}/>
                    <small>7 days Returnable</small>
                </div>
                <div className='service'>
                    <img src='https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png' alt='' width={40}/>
                    <small>Free Delivery</small>
                </div>
                <div className='service'>
                    <img src='https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png' alt='' width={40}/>
                    <small>Pay on Delivery</small>
                </div>
                <div className='service'>
                    <img src='https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-top-brand._CB617044271_.png' alt='' width={40}/>
                    <small>Top Brand</small>
                </div>
            </div>
            <hr />
            <div className='productInfo__about'>
                <h4>About This Item</h4>
                <ul>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo excepturi praesentium ipsam? Architecto nostrum sed tempora iste molestias. Neque, laboriosam.</li>
                    <li>Neque consequuntur, suscipit dolorum quos rem sint rerum nesciunt, quibusdam reiciendis tempora facere consequatur nihil possimus repellendus provident fugit laudantium odit dolorem eaque maxime. </li>
                    <li>Non voluptate harum mollitia itaque reiciendis delectus adipisci quibusdam. Autem odit dicta sit animi vitae quos modi veritatis?</li>
                    <li>Aspernatur architecto aut, eius velit soluta eligendi delectus assumenda modi ipsa cum ducimus quam eveniet harum repudiandae. Illo possimus aut excepturi in.</li>
                </ul>
            </div>
        </div>
        <div className='productInfo__checkout'>
            <div>
                <sup>&#8377;</sup>
                <span className='price'>{price}</span>
            </div>
            <p className='stock'>In stock</p>
            <button className='btn product__btn' onClick={addToCart}>Add to Cart</button>
            <div className='text'><Lock className='lock__icon'/><small style={{color: "#007185"}}> Secure Transcation</small></div>
            <div className='text'><input type='checkbox' /><small>Add gift option</small></div>
        </div>
    </div>
    </div>
  )
}

export default ProductInfo