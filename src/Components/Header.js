import React from 'react'
import logo from '../Assets/pngimg.com - amazon_PNG11.png'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';
import { useStateValue } from '../StateProvider';

const Header = () => {
  const [{ cart }] = useStateValue();
  return (
    <nav className='header'>
        <Link to="/">
            <img className='header__logo' src={logo} alt='logo' width={100}/>
        </Link>
        <div className='header__searchContainer'>
          <input type='text' className='header__search' placeholder='Search Amazon.in'/>
          <SearchIcon className='header__searchIcon' />
        </div>
        <div className='header__nav'>
          <Link to="/login" className='header__link'>
            <div className='header__option'>
              <span className='header__optionLineOne'>Hello,</span>
              <span className='header__optionLineTwo'>Sign In</span>
            </div>
          </Link>

          <Link to="/checkout" className='header__link'>
            <div className='header__option'>
              <span className='header__optionLineOne'>Returns</span>
              <span className='header__optionLineTwo'>& Orders</span>
            </div>
          </Link>

          <Link to="/checkout">
            <div className='header__optionCart'>
              <Badge badgeContent={cart.length} color='primary'>
                <ShoppingCartOutlinedIcon className='header__optionCartIcon'/>
              </Badge>
            </div>
          </Link>
        </div>
    </nav>
  )
}

export default Header