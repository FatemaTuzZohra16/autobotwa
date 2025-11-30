import React from 'react'
import Container from './layout/Container'

export default function Hero() {
  return (
    <div className='bg-background'>
        <Container>
            <div className='flex pt-[68px] items-center gap-1'>
                <div>
                  <h1 className='font-medium inter text-[87px] leading-[97px]'>Digital Marketing</h1>
                <p className='text-para text-[24px] leading-[30px] mt-8 max-w-[923px]'>Extract real business value from social media. Ensuring the best return on investment for your bespoke SEO campaign requirement.</p>
                <div>
                  <button className='font-medium text-[12px] leading-[18px] py-[15px] px-[27px] rounded-[25px] text-white bg-black mt-6'>Contact Today</button>
                </div>
                </div>
                <div className='max-w-[1190px]'>
                  <img src="/images/hero.png" alt="" 
                  className='max-w-[138%] ml-[-265px] relative'
                  />
                  <img src="/images/hero2.png" alt="" 
                  className='absolute w-[340px] top-[475px] right-[523px]'
                  />
                </div>
            </div>
        </Container>
    </div>
  )
}
