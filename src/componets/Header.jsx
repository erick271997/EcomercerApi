import React, { useContext, useState } from 'react'
import { CiMail } from 'react-icons/ci'
import { BiPhoneCall} from 'react-icons/bi'
import { BsSearch } from 'react-icons/bs'
import { VscAccount } from 'react-icons/vsc'
import { CgShoppingCart, CgProductHunt } from 'react-icons/cg'
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { HiOutlineInboxArrowDown } from "react-icons/hi2";



import { NavLink , useLocation} from 'react-router-dom';
import logo from '../assets/images/apneck.png'
function Header() {
  return (
    <>
     <header className='header-top-strip p-1 px-4 shadow-sm'>
      <div className="container-xxl">
        <div className="row align-items-center">
          <div className='col-6'>
            <p> The Trendig outfits at 100% off</p>
          </div>
          <div className='col-6 d-flex justify-content-between '>
            <div>
            <a href='tele:+2457865438'> Call us (🇨🇴)+57 304-200-3246 </a>
          </div>
          <div>
          <Link>
          <BiPhoneCall  className='fs-3 mx-4'/> 
          </Link>
          <Link>
          <AiOutlineMail className='fs-3 mx-4' />
          </Link>
          </div>
        </div>  
        </div>
        </div>
     </header>
      <header className='header-upper px-3'>
<div className='container-xxl'> 
<div className='row'> 

<div className='col-2 text-center'>
<Link to='/'><img src={logo} className='img-fluid logo' alt='logo'/></Link>
</div>
<div className='col-3 d-flex align-items-center mt-3'>
 
<div className="input-group mb-3">
<span className="input-group-text" id="basic-addon1">All</span>
  <input type="text" className="form-control p-2" placeholder="Search products" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <button className="input-group-text" id="basic-addon2">Search</button>
</div>
</div>

<div className='nav-links col-4 d-flex align-items-center justify-content-between text-center m-auto'>
<Link  to={'/'}>Home</Link>
<Link to={'shop'}>Shop</Link>
<Link  to={'blog'}>Blog</Link>
<Link to={'about'}>About</Link>
<Link to={'contact'}>Contact</Link>
</div>
<div className='nav-links-nav col-3 d-flex align-items-center justify-contect-around '>
<Link to='wishlist' className='d-flex'><HiOutlineInboxArrowDown  className='fs-3 mx-2 '/>
<p>Wishlist</p></Link>
<Link to={'login'} className='d-flex'><VscAccount className='fs-3 mx-2 '/>
<p>Acoount</p>
</Link>
<Link to={'cart'} className='d-flex'><CgShoppingCart className='fs-3 mx-2 '/>
<p>Cart</p>
</Link>
</div>
</div>
</div>
      </header>
      </>
      )
    }
    export default Header
      