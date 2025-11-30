"use client"
import React, { useState } from 'react'
import Container from '../layout/Container'

export default function Navbar() {
  const [show, setShow] = useState(false)
  return (
    <div className='bg-background'>
      <Container>
        <div className='lg:flex justify-between items-center py-2'>
          <div className='flex justify-between items-center'>
            <img src="/images/logo.png" alt=""   className='w-[55%] lg:w-full'/>
            <button
            onClick={() => setShow(!show)}
            className="lg:hidden text-2xl">☰</button>
          </div>
          <div>
            <ul className='hidden lg:flex gap-10 text-[16px]'>
              <li><a href="">Home</a></li>
              <li><a href="">Pages </a></li>
              <li><a href="">Mega Menu</a></li>
              <li><a href="">Blog</a></li>
              <li><a href="">Shop</a></li>
              <li><a href="">Contacts</a></li>
            </ul>
          </div>
           <div>
                  <button className='hidden lg:block font-medium text-[12px] leading-[18px] py-[15px] px-[27px] rounded-[25px] text-white bg-black mt-6'>Get in touch</button>
                </div>
        </div>
      </Container>
      {
        show &&
           <div className='bg-black text-white py-10 text-center'>
           <div>
            <ul className='flex flex-col gap-10 text-[16px]'>
              <li><a href="">Home</a></li>
              <li><a href="">Pages </a></li>
              <li><a href="">Mega Menu</a></li>
              <li><a href="">Blog</a></li>
              <li><a href="">Shop</a></li>
              <li><a href="">Contacts</a></li>
            </ul>
          </div>
           <div>
                  <button className='font-medium text-[12px] leading-[18px] py-[15px] px-[27px] rounded-[25px] bg-white text-black mt-6'>Get in touch</button>
                </div>
           </div>
      }
    </div>
  )
}
