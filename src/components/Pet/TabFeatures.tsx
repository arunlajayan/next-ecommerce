'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Product from '../Product/Product'
import { ProductType } from '@/type/ProductType'

interface Props {
    data: Array<ProductType>;
    start: number;
    limit: number;
}

const TabFeatures: React.FC<Props> = ({ data, start, limit }) => {
    const [activeTab, setActiveTab] = useState<string>('sale')

    const handleTabClick = (item: string) => {
        setActiveTab(item)
    }

    const getFilterData = () => {
        if (activeTab === 'sale') {
            return data.filter((product) => product.sale && (product.category === 'pet'))
        }

        if (activeTab === 'new') {
            return data.filter((product) => product.new && (product.category === 'pet'))
        }

        if (activeTab === 'best-seller') {
            return data
                .filter(product => (product.category === 'pet'))
                .slice()
                .sort((a, b) => b.sold - a.sold)
        }

        return data
    }

    const filteredProducts = getFilterData()

    return (
        <>
            <div className="tab-features-block style-underwear relative md:pt-20 pt-10 md:mt-20 mt-10">
                <div className="bg-img">
                    <Image
                        src={'/images/banner/bg-feature-pet1.png'}
                        width={3000}
                        height={2000}
                        alt='bg'
                        className='w-full max-lg:h-[400px] max-sm:h-[200px] object-cover absolute top-0 left-0 right-0 z-[-1]'
                    />
                </div>
                <div className="container">
                    <div className="heading flex flex-col items-center text-center">
                        <div className="menu-tab flex items-center gap-2 p-1 bg-surface rounded-2xl">
                            <div
                                className={`tab-item text-secondary heading5 py-2 px-5 cursor-pointer duration-500 hover:text-black 
                                    ${activeTab === 'best-seller' ? 'active' : ''}`}
                                onClick={() => handleTabClick('best-seller')}
                            >
                                Best sellers
                            </div>
                            <div
                                className={`tab-item text-secondary heading5 py-2 px-5 cursor-pointer duration-500 hover:text-black 
                                    ${activeTab === 'sale' ? 'active' : ''}`}
                                onClick={() => handleTabClick('sale')}
                            >
                                On sale
                            </div>
                            <div
                                className={`tab-item text-secondary heading5 py-2 px-5 cursor-pointer duration-500 hover:text-black 
                                    ${activeTab === 'new' ? 'active' : ''}`}
                                onClick={() => handleTabClick('new')}
                            >
                                New Arrivals
                            </div>
                        </div>
                    </div>

                    <div className="list-product hide-product-sold hide-color grid lg:grid-cols-4 grid-cols-2 sm:gap-[30px] gap-[20px] mt-10">
                        {filteredProducts.slice(start, limit).map((prd, index) => (
                            <Product key={index} data={prd} type='grid' />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TabFeatures