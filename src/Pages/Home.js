import React, {useState} from 'react'
import Header from '../Components/Header'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0)

  const navigateSlideBack = () => {
    if (slideIndex === 0) {
      setSlideIndex(6)
    }
    else {
      setSlideIndex(slideIndex - 1)
    }
  }
  const navigateSlideFront = () => {
    if (slideIndex === 6) {
      setSlideIndex(0)
    }
    else {
      setSlideIndex(slideIndex + 1)
    }
  }

  return (
    <div className='home'>
        <Header />
        <div className='home__slider'>
          <div className='buttonLeft' onClick={navigateSlideBack} ><ArrowBackIosIcon /></div>

          <div className='home__sliderSlide' style={{transform: `translateX(${-100*slideIndex}vw)`}}>
            <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/31/prime/Jup23/acq/T3/heroes/T3_Prime_Hero_PC_ft._CB577501999_.jpg' alt='banner'/>
            <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/ksd/oldbank/DesktopHero_3000x1200._CB577020869_.jpg' alt='banner'/>
            <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/Ayushi/Mi_Homepage_DesktopHeroTemplate_3000x1200_22June2023_ksd_2._CB577493887_.jpg' alt='banner'/>
            <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Xiaomi/KSD/note12/D97763521_INWLD_RedmiNote12_4G_Jup23_PC_Hero_3000x1200._CB577494353_.jpg' alt='banner'/>
            <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/31/CookwareDining/Aman/Jupiter/Homepage_DesktopHeroTemplate_3000x1200_22June2023_ksd_Banner1._CB577448864_.jpg' alt='banner'/>
            <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2023/Jupiter23/Kickstarter/Hero/Final/_D98486283-_IN_WLA_Jupiter23_GW_Heroes_Jupiter1_PC_Hero_3000x1200.psd._CB577020131_.jpg' alt='banner'/>
            <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/Jupiter/GW/Deals-on-Lux_beauty_PC-1._CB577078822_.jpg' alt='banner'/>


          </div>

        <div className='buttonRight' onClick={navigateSlideFront}><ArrowForwardIosIcon /></div>
        </div>
    </div>
  )
}

export default Home