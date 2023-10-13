import React from 'react'
import Header from '../Components/Header'
import { useStateValue } from '../StateProvider'
import CurrencyFormat from 'react-currency-format';
import { getCartTotal } from '../Reducer';

const Checkout = () => {
    const [{cart}] = useStateValue();

  return (
    <div className='checkout'>
        <Header />
        <div className='checkout__container'>
            <div className='checkout__containerItems'>
                {cart.length === 0? (
                    <h1>Your Amazon Cart is empty</h1>
                ) : ( <>
                <h1>Shopping Cart</h1> 
                <hr /> </>
                )}
                
                {cart.map((item) => ((
                    <>
                    <CheckoutContainer 
                        id = {item.id}
                        title = {item.title}
                        image = {item.image}
                        price = {item.price}
                    /><hr /></>
                )))}
            </div>
            {cart.length > 0 && (
                <CheckoutSummary />
            )}
        </div>
    </div>
  )
}

export default Checkout

const CheckoutContainer = (props) => {

    const [{cart}, dispatch] = useStateValue();


    const removeFromCart = () => {
        dispatch({
            type: "REMOVE_FROM_CART",
            id: props.id,
        });
    }

    return(
    <div className='item'>
        <img src={props.image} alt='' width={150}/>
        <div className='item__info'>
            <p>{props.title}</p>
            <h3>&#8377;{props.price}</h3>
            <button className='btn product__btn' onClick={removeFromCart}>Remove From Cart</button>
        </div>
    </div>
    )
}

const CheckoutSummary = () => {
    const [{cart}] = useStateValue();

    return (
        <div className='checkout__containerSummary'>
            
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                        <p>Subtotal ({cart.length} Items): <span className='price'>{value}</span></p>
                        <div className='gift-input'>
                            <input type='checkbox'/>
                            <small>This order contains a gift</small>
                        </div>
                    </>
                )}
                decimalScale={2}
                value={getCartTotal(cart)}
                displayType={"text"}
                thousandSeparator={true}
                prefix='&#8377;'
            />
            {console.log(getCartTotal(cart))}
            <button className='btn product__btn'>Proceed to Buy</button>
        </div>
    )
}