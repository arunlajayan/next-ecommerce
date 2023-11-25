import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const FlashSale = () => {
    return (
        <>
            <div className="container pt-20">
                <div className="flash-sale-block bg-surface flex items-center max-sm:justify-center relative overflow-hidden rounded-[32px] w-full">
                    <div className="text-content basis-1/2 flex flex-col items-center text-center px-8 lg:py-24 md:py-16 py-10">
                        <div className="heading2">Flash Sale!</div>
                        <div className="body1 mt-3">Get 20% off if you spend 120$ or more!</div>
                        <div className="countdown-time flex items-center gap-5 max-sm:gap-[18px] lg:mt-9 md:mt-6 mt-4">
                            <div className="item flex flex-col items-center">
                                <div className="day heading1">02</div>
                                <div className='text-xs font-medium uppercase'>Days</div>
                            </div>
                            <span className='heading4'>:</span>
                            <div className="item flex flex-col items-center">
                                <div className="day heading1">06</div>
                                <div className='text-xs font-medium uppercase'>Hours</div>
                            </div>
                            <span className='heading4'>:</span>
                            <div className="item flex flex-col items-center">
                                <div className="day heading1">35</div>
                                <div className='text-xs font-medium uppercase'>Minutes</div>
                            </div>
                            <span className='heading4'>:</span>
                            <div className="item flex flex-col items-center">
                                <div className="day heading1">48</div>
                                <div className='text-xs font-medium uppercase'>Seconds</div>
                            </div>
                        </div>
                        <Link href={'#!'} className='button-main lg:mt-9 md:mt-6 mt-4'>Get it now</Link>
                    </div>
                    <div className="bg-img w-2/5 absolute lg:right-[40px] right-[10px] top-0 max-sm:hidden">
                        <Image
                            src={'/images/slider/bg1-1.png'}
                            width={1000}
                            height={600}
                            alt='bg-img'
                            className='w-full'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FlashSale