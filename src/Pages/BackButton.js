import React from 'react'
import { useNavigate} from "react-router-dom";
import '../Styles/BackButton.css'

function BackButton() {

    let navigate = useNavigate();

  return (
    <>
    
    <button onClick={() => navigate(-1)} title="Go Back" className='BackButton ms-5' > <i class="fa fa-angle-left" aria-hidden="true"></i> </button> 
    &nbsp;
    &nbsp;
    &nbsp;
    &nbsp;
    &nbsp;

    <button onClick={() => navigate(+1)} title="Go forward" className=' BackButton ms-5' > <i class="fa fa-angle-right" aria-hidden="true"></i> </button> 
    
    
    </>
  )
}

export default BackButton