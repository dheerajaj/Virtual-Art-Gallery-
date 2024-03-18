import React from 'react'
import { NavLink } from 'react-router-dom'

function ErrorPage() {

  return (

    <>
 <div style={{width:'100vw', border:'1px solid red', height:'100vh'}}>
  <img src="https://www.pedalo.co.uk/wp-content/uploads/2019/04/shutterstock_759200722.jpg" alt=""width="100%" height="100%" />
 </div>

 <NavLink to="/"><button style={{position:'absolute', width:'400px',height:'50px', margin:'-350px 0px 0px 1000px', background:'transparent', boxShadow:'2px 2px 10px #000', fontWeight:'bold', borderRadius:'0px 10px 0px 10px'}}>Back to home</button></NavLink>
 

    </>
  )
}

export default ErrorPage