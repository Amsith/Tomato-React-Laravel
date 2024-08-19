import React from 'react'
import './Footer.css'
import logo from '../../assets/frontend_assets/logo.png'
import { TiSocialFacebookCircular } from "react-icons/ti";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
    return (
        <div className='footer-div'>
            <div className='footer-content'>

                <div className='footer'>
                    <div className='footer-section'>
                        <img src={logo} alt="" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam aspernatur asperiores rem ex. Sapiente cumque sit, expedita laboriosam dolorem beatae.</p>
                        <div className='footer-icon'><TiSocialFacebookCircular /> <CiTwitter /> <CiLinkedin /> </div>

                    </div>
                </div>
                <div className='footer'>
                    <div className='footer-section'>
                       <h2>COMPANY</h2>
                       <ul >
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                       </ul>
                    </div>
                </div>
                <div className='footer'>
                    <div className='footer-section'>
                    <h2>GET IN TOUCH</h2>
                    <p>+1 2344-123-123</p>
                    <p>contact@gmail.com</p>

                    </div>
                </div>

            

            </div>
            <hr />
            <div className='footer-copyright'>CopyRight2024&copy; Tomato.com-All right reserved     </div>
       
                

        </div>
    )
}

export default Footer