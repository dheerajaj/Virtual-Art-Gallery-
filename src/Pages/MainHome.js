import React, { useEffect, useState } from 'react'
import firstVideo from '../Videos/firstVideo.mp4'
import secondVideo from '../Videos/secondVideo.mp4'
import '../Styles/MainHome.css'
import laptop from '../Images/laptop.webp'
import smallPhone from '../Images/smallPhone.webp'
import stars from '../Images/stars.png'
import bigMobiles from '../Images/bigMobiles.webp'
import books from '../Images/books.webp'
import { useAuth0 } from "@auth0/auth0-react";
import Header from './Header'
import Footer from '../Pages/Footer';
import ReactJoyride from 'react-joyride'




function MainHome() {



    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const[ secondPart, setSecondPart ] = useState(false);
    const[ fifthPart, setFifthPart ] = useState(false);
    const[ sixthPart, setSixthPart ] = useState(false);
    const[ seventhPart, setSeventhPart ] = useState(false);
    const[ eighthPart, setEighthPart ] = useState(false);





    useEffect(() => {
        window.addEventListener('scroll',function() {
               if(window.pageYOffset>300){
                setSecondPart(true);
               }
               else{
                setSecondPart(false);
           }
        })
    },[])



    useEffect(() => {
        window.addEventListener('scroll',function() {
               if(window.pageYOffset>2450){
                setFifthPart(true);
               }
               else{
                setFifthPart(false);
           }
        })
    },[])

    useEffect(() => {
        window.addEventListener('scroll',function() {
               if(window.pageYOffset>3500){
                setSixthPart(true);
               }
               else{
                setSixthPart(false);
           }
        })
    },[])

    useEffect(() => {
        window.addEventListener('scroll',function() {
               if(window.pageYOffset>4200){
                setSeventhPart(true);
               }
               else{
                setSeventhPart(false);
           }
        })
    },[])

    useEffect(() => {
        window.addEventListener('scroll',function() {
               if(window.pageYOffset>5100){
                setEighthPart(true);
               }
               else{
                setEighthPart(false);
           }
        })
    },[])
    
    const [ { run, steps } ] =  useState({
        run: true,
        steps: [

          {
            content: <h3>You have to login first to visit website</h3>,
            placement: 'bottom',
            target: "#step-1",
            title: 'first Step'
          },
   
        ]
      })
    

  return (
    <React.Fragment>


{ !isAuthenticated ?

<ReactJoyride

callback={() => {}}
run={run}
steps={steps}
/>

: null

}
        
{
    isAuthenticated && 
    <Header/>  
}




            {/* first video/part start */}

        <div className='firstVideo'>
        {isAuthenticated ?  
   null
    :


    <button id="step-1" className='loginBtn' onClick={() => loginWithRedirect()}><i class="fa fa-sign-in" aria-hidden="true"></i> Sign up</button>

    }


  
  {/* first part start */}

            <video src={firstVideo} type='video/MP4/ogg/webm' height='100%'  muted loop autoPlay></video>
            <div className='main-heading'>Open your <br /> own art <br /> exhibition <br />
            <div className='small'>Share your art with the world. <br /> <br />
            <div className='psg'>Create your own online art exhibition with easy and fast online tools.
Share your art freely and get instant visitors to your art exhibitions.
Connect directly with art lovers globally and sell your art directly to collectors, without middlemen or commissions.​​</div>
            </div> <br />

            </div>
        </div>



                 {/* second video/part start */}

        <div className=' second-part'>
        {
    secondPart?
            <div className='headingSecond' style={{textShadow:'2px 2px 10px rgb(115, 72, 72)'}}>Online art <br /> exhibitions.</div>
            :null

        } 
            <div className='SecondOne'>Unlimited by reality. Accessible to everyone.</div>
            <button onClick={() => loginWithRedirect()}>Open your own art exhibition <i class="fa fa-angle-double-right" aria-hidden="true"></i> </button>
            <p className='signn'>Sign up for free, no credit card required.</p>
        </div>
      


                 {/* third video/part start */}
                 
                 <div className='firstVideo third'>
            <video src={secondVideo} type='video/MP4/ogg/webm' width='100%'  muted loop autoPlay></video>
        </div>


        
                 {/* fourth video/part start */}
                 
                 <div className=' fourthPart'>
                    <div className='mainFourth'>
                        <div className='minFourth'>
                            <h2>
                            The world is full of art nobody ever sees & artists who never get found. 
                            </h2>
                            <p>The art world is not democratic and equal. You need time, education, resources and right connections to make it.</p>

                            <p>Art exhibitions are expensive with all the logistics, marketing & operating costs.</p>

                            <b>To succeed as an artist is hard. The opportunity is not available for all.​</b>
                        
                        </div>
                        <div className='minFourth'>
                            <h2>
                            The world is full of people who love art & visiting art exhibitions.
                            </h2>

                            <p>Art exhibitions are limited by time, space and location. They are not accessible remotely.</p>

                            <p>Current online offerings like online viewing rooms, social media and art marketplaces are not exhibiting art in true scale and as curated collections.</p>

                            <b>You are missing out. Your art is missing out.</b>
                        </div>
                    </div>

                    <div className='mainFourth2'>
                    Our vision is a democratic, inclusive, equal and sustainable global art market. Our
                     mission is to give every artist an equal opportunity and art lovers more art to experience.
                    </div>
        </div>



        {/* fifth part start */}

              
        <div className=' fifthPart'>
                    <div className='mainFifth'>
                        <div className='minFifth'>
                        {
    fifthPart? 
                            <div className='imgs'> <img src={laptop} alt="laptop" width="300px" /></div>
                            :
                            null
                            }

                           <h1>Artist & art galleries.</h1>

                            <p style={{fontSize:'22px'}}>Open your own art exhibition and share your art freely with the world.</p>

                            <button onClick={() => loginWithRedirect()}>Open your own art exhibition <i class="fa fa-angle-double-right" aria-hidden="true"></i> </button>
                            <p className='signn'>Sign up for free, no credit card required.</p>
                        
                        </div>
                        <div className='minFifth'>
                        {
    fifthPart? 
                            <div className='imgs'> <img src={smallPhone} alt="laptop" width="400px" /></div>
                            :
                            null
                            }

                           <h2>Art lovers & Collectors.</h2>

                            <p style={{fontSize:'22px'}}>Visit more art exhibitions than would ever be possible in reality.</p>

                            <button onClick={() => loginWithRedirect()} style={{background:'#feca00', color:'#000'}}> sign up as an art lover <i class="fa fa-angle-double-right" aria-hidden="true"></i> </button>
                            <p style={{marginLeft:'90px'}}>Always free.</p>
                        
                        </div>You are missing out. Your art is missing out.</div>
                        </div>
                      

                         {/* sixth part start */}

 
        <div className=' sixthPart'>
            <div className='mainSixth'>Thousands of Happy users.</div>
            <div className='divideSixth'>
                <div className='sixthPartOne'>Artists, art galleries and museums all around the world have already reached new audiences with online art exhibitions.
                <br />
                <br />
                <p style={{marginLeft:'80px', fontWeight:'400'}}> <i>" Exactly what I 've been <br /> searching for as an online  <br /> gallery ! "</i> </p>
                </div>
                <div className='sixthPartOne'>Virtual Art Gallery users love the easy and fast online tools and unparallel user experience, with an overall rating of 4.6 / 5.
                <br />
                <br />
                
                {sixthPart? 
               <div className='starsDiv' style={{marginLeft:'30px'}}> <img src={stars} alt="" width='330px' /></div>
               :
               null
               }
               </div>
             
            </div>
                   
                        </div>
                      


   {/* seventh part start */}

  
<div className='seventhPart'>
    <div className='seventhLeftDiv'>
        <h1>Get started.</h1>
        <div className='seventhFrst'>Setting up an art exhibition is so easy and fast, that it feels like cheating.​</div>
        <p>Open your free account and create your online art exhibition with fast and effortless online tools designed for artists.</p>
        <p>Get instant visitors, receive feedback, connect with art lovers globally, and sell your art directly to art collectors.</p>
        <br />
        <div className='seventhBoxes'>
            <div className='singleBox'>1. <br /> Choose your 3D gallery. </div>
            <div className='singleBox'>2. <br /> Hang your art. </div>
            <div className='singleBox'>3. <br /> Public & share. </div>
        </div>
        <button onClick={() => loginWithRedirect()} className='seventhButton'>Open your own art exhibition <i class="fa fa-angle-double-right" aria-hidden="true"></i> </button>
        <p style={{fontSize:'12px',marginTop:'10px',marginLeft:'20px'}}>Sign up for free, no credit card required.</p>
    </div>
    {
    seventhPart?
    <div className='seventhRightDiv'>
        <img src={bigMobiles} alt="" height="100%" />
    </div>
    :
    null
       }

</div>



   {/* Eighth part start */}

 
   <div className='eighthPart'>
    <div className='eighthLeftDiv'>
        <h1>Resources <br /> & Guides.</h1>
        <div className='eighthFrst'>Learn how to succeed with online art exhibitions.</div>
        <p>Helpful guides on how to create astonishing online art experiences to captivate your visitors.</p>
        <button className='eighthButton'>Learn more <i class="fa fa-angle-double-right" aria-hidden="true"></i> </button>
    </div>
    {
    eighthPart?
    <div className='eighthRightDiv'>
        <img src={books} alt="" height="90%" />
    </div>
    :
null
   }
</div>

  
  <Footer/>


    </React.Fragment>
  )
}

export default MainHome