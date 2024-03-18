import React from 'react'
import logo from '../Images/logo.webp'
import '../Styles/footer.css'
import { useAuth0 } from "@auth0/auth0-react";

function Footer() {
    const { loginWithRedirect} = useAuth0();
  return (
    <>
    
     {/* Ninth part start */}


   <div className='ninthPart'>
<div className='firstNinth'>
    <img src={logo} alt="logo" height="60%" />
</div>
<div className='secondNinth'>
    <div className='ninthSecondTxt'>
        <ul>
            <li>For Artists</li>
            <li>For Art Lovers</li>
            <li>Pricing </li>
            <li>FAQ </li>
            <li>Learn More </li>
            <li>More Art </li>
        </ul>
    </div>
    <div className='ninthSecondTxt'>
    <ul>
            <li>Iso-Roobertinkatu</li>
            <li>3=6 M-8 00120  Helsinki</li>
            <li>Finland </li>
            <li>Email </li>
            <li> </li>
            <li>People at linkedIn </li>
        </ul>
    </div>
    <div className='ninthSecondTxt'>
    <ul>
            <li>Login to the App</li>
            <li>Open your art exhibition for free</li>
            <li>Sign up as an art lover or collector </li>
            <li> </li>
            <li>Privacy Policy </li>
            <li>terms & Conditions </li>
        </ul>
    </div>
</div>
<div className='thirdNinth'>
    <button className='ninthButton' onClick={() => loginWithRedirect()}>Open your own art exhibition <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
    <div className='iconsNinth'>
       <div title="Instagram" className='ninthSingleIcon'> <a href="https://www.instagram.com/explore/tags/visualart/" target="blank"><i class="fa fa-instagram" aria-hidden="true" style={{fontSize:'40px'}}></i></a></div>
        <div title="LinkedIn"  className='ninthSingleIcon'> <a href="https://www.linkedin.com/feed/" target="blank"><i class="fa fa-linkedin" aria-hidden="true" style={{fontSize:'40px'}}></i></a></div>
        <div title="Facebook"  className='ninthSingleIcon'> <a href="https://www.facebook.com/" target="blank"><i class="fa fa-facebook" aria-hidden="true" style={{fontSize:'40px'}}></i></a></div>
        <div title="You Tube"  className='ninthSingleIcon'> <a href="https://youtube.com/" target="blank"><i class="fa fa-youtube-play" aria-hidden="true" style={{fontSize:'40px'}}></i></a></div>
        <div title="Git Hub"  className='ninthSingleIcon'> <a href="https://github.com/" target="blank"><i class="fa fa-github" aria-hidden="true" style={{fontSize:'40px'}}></i> </a></div>
        <div title="Twitter"  className='ninthSingleIcon'> <a href="https://twitter.com/" target="blank"><i class="fa fa-twitter" aria-hidden="true" style={{fontSize:'40px'}}></i></a></div>
        <div title="Google"  className='ninthSingleIcon'> <a href="https://www.google.com/" target="blank"><i class="fa fa-google-plus" aria-hidden="true"  style={{fontSize:'30px'}}></i></a></div>

    </div>
</div>

</div>

    
    </>
  )
}

export default Footer