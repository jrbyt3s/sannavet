'use client'
import React, { useEffect } from 'react'
import {useSearchParams} from 'next/navigation'

function Attencions() {
  const searchparams = useSearchParams();
  useEffect(() => {
    
    console.log(searchparams.get('user_id'));
  
    return () => {
      
    }
  }, [])
  

 
  return (
    <div>Attencions</div>
  )
}


export default Attencions