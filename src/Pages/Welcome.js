import React from 'react'
import Welcomesound from '../Audio/Welcomesound.mp3'
import { useEffect } from 'react';

function Welcome() {

  
      useEffect(()=> {
        new Audio(Welcomesound).play();
      },[])
  return (
    <>
    
    </>
  )
}

export default Welcome