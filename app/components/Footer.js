import React from 'react'
import Container from './layout/Container'

export default function Footer() {
  return (
    <div className='bg-black pt-10 pb-[30px]'> 
        <Container>
            <div className='flex justify-between text-white'>
                <div>
                    <img  src='/images/footerLogo.png'/>
                </div>
                <div>
                    <h2 className='text-[18px] leading-[30px]'>9024225444</h2>
                    <p className='text-[16px] leading-6'>info@digitalera.com</p>
                </div>
                <div>
                    <p className='text-[16px] leading-6'>27 Division St, New York, NY <br/> 10002, United States</p>
                </div>
            </div>
            <div className='flex justify-between border-t border-b border-[#181a18] mt-5 pt-12 pb-[57px] text-[#F0F0F0]'>
                <div>
                    <p className='text-[16px] leading-6'>Ewebot have much planned for <br/> the future, working with great <br/> clients and continued software <br/> development.</p>
                </div>
                <div>
                    <p className='text-[15px] leading-[31px] mb-3'>SEO Marketing</p>
                    <p className='text-[15px] leading-[31px] mb-3'>SEO Services</p>
                    <p className='text-[15px] leading-[31px] mb-3'>Pay Per Click</p>
                    <p className='text-[15px] leading-[31px] mb-3'>Social Media</p>
                    <p className='text-[15px] leading-[31px]'>SEO Audit</p>
                </div>
                <div>
                    <p className='text-[15px] leading-[31px] mb-3'>Our Product</p>
                    <p className='text-[15px] leading-[31px] mb-3'>Documentation</p>
                    <p className='text-[15px] leading-[31px] mb-3'>Our Services</p>
                    <p className='text-[15px] leading-[31px] mb-3'>Company</p>
                    <p className='text-[15px] leading-[31px]'>What We Do?</p>
                </div>
                <div>
                    <p className='text-[15px] leading-[31px] mb-3'>Home</p>
                    <p className='text-[15px] leading-[31px] mb-3'>About Us</p>
                    <p className='text-[15px] leading-[31px] mb-3'>Main Services</p>
                    <p className='text-[15px] leading-[31px] mb-3'>Pricing</p>
                    <p className='text-[15px] leading-[31px]'>Our Cases</p>
                </div>
            </div>
            <div>
                <p className='text-[14px] leading-[19px] pl-[11px] pt-[33px] text-[#F0F0F0]'>© 2023 — All Rights Reserved.</p>
            </div>
        </Container>
    </div>
  )
}
