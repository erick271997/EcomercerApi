import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs"
import google from '../assets/images/pay/play.jpg';
import apple from '../assets/images/pay/app.jpg'
import pay from '../assets/images/pay/pay.png'

function footer() {
  return (
    <>
      <footer className='footer-p-5'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-4 d-flex flex-column">
              <h3 className='mb-4'>Contact us</h3>
              <div className='footer-details'>
                <p className='mb-3'><b>Anddres:</b> Thika town, Naltex building, 2nd floor </p>
                <p className='mb-3'><b>Phone:</b><a href='tele:+2457865438'> Call us +2457865438 </a></p>
                <p className='mb-5'><b>Hours Open:</b>From 8Am to 5pm </p>
                <p className='mb-3'><b>Follow Us</b></p>
                <div className='col-4 social-icons mb-3 d-flex justify-content-around'>
                  <Link to='https://www.facebook.com/erick.campaz/'><AiOutlineTwitter className='fs-4'/></Link>
                  <Link to='https://www.facebook.com/erick.campaz/'><BsFacebook className='fs-4'/></Link>
                  <Link to='https://www.facebook.com/erick.campaz/'><BsInstagram className='fs-4'/></Link>
                  <Link to='https://www.facebook.com/erick.campaz/'><BsLinkedin className='fs-4'/></Link>
                </div>
              </div>
            </div>
            <div className='col-2'>
             <h3 className='mb-4'>About</h3>
             <div className='footer-details d-flex flex-column'>
              <Link className='mb-3'> About Us</Link>
              <Link className='mb-3'> Delivery</Link>
              <Link className='mb-3'> Privacy Policy</Link>
              <Link className='mb-3'> Tax Policy</Link>
              <Link className='mb-3'> Fee Policy</Link>
              <Link className='mb-3'> Terms & Condition</Link>
             </div>
            </div>
            <div className='col-2'>
             <h3 className='mb-4'>Account</h3>
             <div className='footer-details d-flex flex-column'>
              <Link className='mb-3'> Profile</Link>
              <Link className='mb-3'> View Cart</Link>
              <Link className='mb-3'> Help</Link>
              <Link className='mb-3'> Payments</Link>
              <Link className='mb-3'> My Wishlist</Link>
              <Link className='mb-3'> Coupons</Link>
             </div>
            </div>
            <div className='col-4'>
              <h3 className='mb-3'>Install App</h3>
              <div className='footer-details'>
                <p>Available On Google Play Serivice & App Store</p>
                 <div className='pay'>
                  <Link>
                  <img src={google} className='img-fluid p-3 my-1' alt='Google Store'/>
                  </Link>
                  <Link>
                  <img src={apple} className='img-fluid p-3 my-1' alt='Apple Store'/>
                  </Link>
                </div>
                <p className='mb-2'>Payment Methods</p>
                <Link className='pay'>
                <img src={pay} alt="" className='img-fluid p-3'/>
                </Link>
              </div>
            </div>
          </div>
          <hr/>
          <div className='row d-flex justify-content-between'>
            <div className='col-9'>
              <p>&copy; Developed by Eclar Developed 2023</p>
            </div>
            <div className='col-3 d-flex justify-content-around'>
              <Link className='text-black'> Privacy Policy</Link>
              <Link className='text-black' > Terms of Use</Link>
             <Link className='text-black'> Contact Me</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default footer