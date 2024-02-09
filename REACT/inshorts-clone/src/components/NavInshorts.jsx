import React from 'react'
import './NavInshorts.css'
import HamburgerDrawer from './HamburgerDrawer'

const NavInshorts = ({setCategory}) => {
  return (
    <div className='nav'>
      <div className="icon">
        <HamburgerDrawer setCategory={setCategory}/>
      </div>
<img style={{cursor:"pointer"}} height="80%" src="https://inshorts.com/dist/images/home_page/logo.png" alt="logo" />    </div>
  )
}

export default NavInshorts
