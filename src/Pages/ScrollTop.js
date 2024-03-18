import React, { useEffect, useState } from 'react'
import '../Styles/MainHome.css'

function ScrollTop() {

    const[ scrollBtn, setScrollBtn ] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll',function() {
               if(window.pageYOffset>500){
                    setScrollBtn(true);
               }
               else{
                setScrollBtn(false);
           }
        })
    },[])

    function scrollHandler () {
        window.scrollTo(0, 0);
    }

  return (
    <div>

{
        scrollBtn?
        <div id="scrollDiv" onClick={scrollHandler} className='backToTop'><i class="fa fa-angle-double-up" aria-hidden="true"></i></div>
        :
        null
    }


    </div>
  )
}

export default ScrollTop