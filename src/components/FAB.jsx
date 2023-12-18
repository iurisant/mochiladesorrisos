import React from 'react';
import Whatsapp from "../assets/whatsapp.svg";

export default function FAB() {
  return (
    <div className='fixed m-6 bottom-0 right-0 z-50'>
      <a href='https://wa.me/557184589094' target='_blank' rel="noreferrer">
        <img src={Whatsapp} alt="FAB-Whatsapp" width={80} className=' hover:scale-110' />
      </a>
    </div>
  )
}