import React from 'react'
import Header from '../Components/Header'
import Slider from '../Components/Slider'
import Product from '../Components/Product'

const Home = () => {

  return (
    <div className='home'>
        <Header />
        <Slider />
        <div className='home__row'>
          <Product 
            id={1}
            title="Noise Quad Call Bluetooth Calling Smart Watch, AI Voice Assistace, 160+Hrs Battery Life"
            image="https://images-eu.ssl-images-amazon.com/images/I/61khLNWFnHL._AC_UL337.5_SR337.5,240_.jpg"
            largeImage="https://m.media-amazon.com/images/I/61khLNWFnHL._SY450_.jpg"
            rating={4}
            price={1199.00}
            mrp={5999}
          />
          <Product 
            id={2}
            title="Zebronics Zeb-Rush (Blue) Premium Wired Gaming On Ear Headphone with RGB LED Dual 3.5mm Jack"
            image="https://images-eu.ssl-images-amazon.com/images/I/71f4YDMZQ5L._AC_UL450_SR450,320_.jpg"
            largeImage="https://m.media-amazon.com/images/I/71f4YDMZQ5L._SX425_.jpg"
            rating={5}
            price={4999.00}
            mrp={7999}
          />
        </div>
        <div className='home__row'>
          <Product 
              id={3}
              title="Red Tape Casual Sneaker Shoes for Men | Soft Cushioned Insole, Slip-Resistance"
              image="https://images-eu.ssl-images-amazon.com/images/I/61ScIySiv7L._AC_UL450_SR450,320_.jpg"
              largeImage="https://m.media-amazon.com/images/I/61ScIySiv7L._UY500_.jpg"
              rating={3}
              price={1679.00}
              mrp={5599}
          />
          <Product 
            id={4}
            title="Safari Omega 30L Laptop Backpack with Rainciver, school bag for boys and girls, college bag"
            image="https://images-eu.ssl-images-amazon.com/images/I/71Y1TYZJZqL._AC_UL450_SR450,320_.jpg"
            largeImage="https://m.media-amazon.com/images/I/71Y1TYZJZqL._UX522_.jpg"
            rating={4}
            price={903.00}
            marp={3396}
          />
          <Product 
            id={5}
            title="Aahwan Printed Women's & Girls' Pufff Sleeve Tie Front Ditsy Floral Top"
            image="https://images-eu.ssl-images-amazon.com/images/I/61Z7exPHZeL._AC_UL450_SR450,320_.jpg"
            largeImage="https://m.media-amazon.com/images/I/61Z7exPHZeL._UY679_.jpg"
            rating={4}
            price={599.00}
            mrp={999}
          />
        </div>
        <div className='home__row'>
          <Product 
              id={6}
              title="boAt Airdopes 141 ANC TWS Earbuds with 32 dB ANC, 42 HRS Playback, 50ms Low Latency Beast Mode"
              image="https://images-eu.ssl-images-amazon.com/images/I/615-1qhF7DL._AC_UL450_SR450,320_.jpg"
              largeImage="https://m.media-amazon.com/images/I/615-1qhF7DL._SY355_.jpg"
              rating={5}
              price={1599.00}
              mrp={4990}
          />
        </div>
    </div>
  )
}

export default Home