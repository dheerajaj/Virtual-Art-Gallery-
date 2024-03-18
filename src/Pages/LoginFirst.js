import React from 'react'
import { NavLink } from 'react-router-dom'
import login from '../Images/login.jpg'

function LoginFirst() {
  return (
    <>
     <div style={{width:'100vw', height:'100vh', paddingLeft:'120px'}}>
  <img src={login} alt=""width="50%" />
 </div>

 <NavLink to="/">
 <button className="btn btn-lg btn-success" style={{position:'absolute', width:'400px',height:'50px', margin:'-350px 0px 0px 1000px', boxShadow:'2px 2px 10px #000', fontWeight:'bold',}}>Login required </button>
 </NavLink>
 

    </>
  )
}

export default LoginFirst