import React from 'react'
import Container from './layout/Container'

export default function Hero() {
  return (
    <div className='bg-background'>
        <Container>
            <div className='lg:flex pt-[68px] items-center gap-1'>
                <div>
                  <h1 className='font-medium inter text-[75px] md:text-[87px] leading-[90px] md:leading-[97px]'>Digital Marketing</h1>
                <p className='text-para text-[24px] leading-[30px] mt-8 max-w-[923px]'>Extract real business value from social media. Ensuring the best return on investment for your bespoke SEO campaign requirement.</p>
                <div>
                  <button className='font-medium text-[12px] leading-[18px] py-[15px] px-[27px] rounded-[25px] text-white bg-black mt-6'>Contact Today</button>
                </div>
                </div>
                <div className='max-w-[1190px] relative'>
                  <img src="/images/hero.png" alt="" 
                  className='w-auto lg:max-w-[138%] ml-[-47px] lg:ml-[-265px] mt-[53px] lg:mt-0'
                  />
                  <img src="/images/hero2.png" alt="" 
                  className='absolute w-[155px] sm:w-[190px] md:w-[275px] lg:w-[340px] top-[104px] sm:top-[218px] md:top-[241px] lg:top-[250px] xl:top-[340px] right-[142px] sm:right-[230px] md:right-[260px] lg:right-[270px] xl:right-[290px]'
                  />
                </div>
            </div>
        </Container>
    </div>
  )
}
