import React from 'react'
import Container from '../layout/Container'

export default function Navbar() {
  return (
    <div className='bg-background'>
      <Container>
        <div className='flex justify-between items-center py-2'>
          <div>
            <img src="/images/logo.png" alt=""  />
          </div>
          <div>
            <ul className='flex gap-10 text-[16px]'>
              <li><a href="">Home</a></li>
              <li><a href="">Pages </a></li>
              <li><a href="">Mega Menu</a></li>
              <li><a href="">Blog</a></li>
              <li><a href="">Shop</a></li>
              <li><a href="">Contacts</a></li>
            </ul>
          </div>
           <div>
                  <button className='font-medium text-[12px] leading-[18px] py-[15px] px-[27px] rounded-[25px] text-white bg-black mt-6'>Get in touch</button>
                </div>
        </div>
      </Container>
    </div>
  )
}
