import React from 'react'
import Header from '../Components/Header'

const Checkout = () => {
  return (
    <div className='checkout'>
        <Header />
        <div className='checkout__container'>
            <div className='checkout__containerItems'>
                <h1>Shopping Cart</h1>
                <hr />
                <div className='item'>
                    <img src='https://m.media-amazon.com/images/I/61ScIySiv7L._AC_AA180_.jpg' alt='' width={150}/>
                    <div className='item__info'>
                        <p>Red Tape Lifestyle Shoes for Men</p>
                        <h3>&#8377;1,679.00</h3>
                        <button className='btn product__btn'>Remove From Cart</button>
                    </div>
                </div>
                <hr />
            </div>
            <div className='checkout__containerSummary'>
                    <p>Subtotal (3 Items): <span className='price'>&#8377;1,679.00</span></p>
                    <button className='btn product__btn'>Proceed to Buy</button>
            </div>
        </div>
    </div>
  )
}

export default Checkout