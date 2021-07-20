import Image from 'next/image'
import React from 'react'

import {MetalList} from '../../core/type/metals'

const MetalDetail = ({type}:any) => {
    return (
        <div className='flex text-white bg-gray-800'>
            <div className='h-screen w-10/12 flex justify-center items-center'> <Image className='' src={require('../../public/assets/images/metal_icons/'+ MetalList[type].name +'.png')} alt={MetalList[type].name}/> </div>
            <div className='flex flex-col px-40'>
                <div>
                    <h1 className='text-3xl my-9 font-extrabold'>{MetalList[type].name}</h1>
                    <div className='flex justify-between'>
                        <p className='text-extra-sm my-5'>Minimun bid 0.12 Ftm</p>
                        <p>540<i className='fa fa-heart berder-red-900'></i></p>
                    </div>
                    <p>This is the most important discover of DocMonkeystein. {MetalList[type].name} 
                        is the main element that makes up the tribes of boojabaunga with out it 
                        {MetalList[type].name} would not exist.</p>
                    <p className='mt-8'>Tags</p>
                    <div className='flex justify-space'>
                        <button className='p-1 bg-gray-600 rounded-lg mr-5'>Click me</button>
                        <button className='p-1 bg-gray-600 rounded-lg mr-5'>Click me</button>
                        <button className='p-1 bg-gray-600 rounded-lg mr-5'>Click me</button>
                        <button className='p-1 bg-gray-600 rounded-lg mr-5'>Click me</button>
                    </div>
                    <div>
                        <div className="overflow-x-auto bg-gray-800 mt-5">
                            <table className="w-full bg-gray-800">
                                <thead>
                                <tr>
                                    <th>Bid</th> 
                                    <th>Price</th> 
                                </tr>
                                </thead> 
                                <tbody className="text-center">
                                <tr>
                                    <td>Er.K</td> 
                                    <td>25</td> 
                                </tr>
                                <tr>
                                    <td>Smith.L</td> 
                                    <td>35</td>
                                </tr>
                                <tr>
                                    <td>Ta.P</td> 
                                    <td>58</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='bg-green-600 flex flex-col py-4 px-10'>
                        <div className='flex justify-between'>
                            <div className='text-center font-bold'>
                                <p>Minimun bid</p>
                                <p>0.12 wETH</p>
                                <p>$316.43</p>
                            </div>
                            <div className='h-20 w-1 rounded-3xl bg-white ml-10'></div>
                            <div className='border-white border-r-3 border-solid'>
                                <h1 className='text-center font-bold text-lg'>Auction ends in</h1>
                                <div className='flex  font-bold text-sm'>
                                    <div className='text-center mr-2'>
                                        <p>0</p>
                                        <p>Days</p>
                                    </div>
                                    <div className='text-center mr-2'>
                                        <p>12</p>
                                        <p>hours</p>
                                    </div>
                                    <div className='text-center mr-2'>
                                        <p>45</p>
                                        <p>min</p>
                                    </div>
                                    <div className='text-center mr-2'>
                                        <p>20</p>
                                        <p>seconds</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center my-3'>
                            <button className='bg-white text-center text-green-700 font-extrabold rounded-lg w-56'>Place a Bid</button>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}

MetalDetail.getInitialProps = ({query}:any) => {
    return {
        type: query.type
    }
}
export default MetalDetail;