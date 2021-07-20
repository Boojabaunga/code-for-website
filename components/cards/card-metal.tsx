import Image from 'next/image'
import {MetalList } from '../../core/type/index';
interface Props { 
    metalType: string,
}
const cardMetal = ({metalType}: Props) => {
    const metal = MetalList[metalType];
    return (
        <div className='flex flex-col justify-between px-2 bg-gray-800'>
            <div><Image src={require('../../public/assets/images/metal_icons/' + metal.name + '.png')} alt={metal.name} width={150} height={150}/></div>
            <div className='flex justify-between my-1'>
                <p className='text-xs text-white font-bold'>Boojabaunga:<br/><code></code>{metal.name}</p>
                <p className='text-xs text-white font-bold'>{metal.lifecycle}<i className='fa fa-heart border-1 text-red-800'></i></p>
            </div>
            <div className='text-white text-xs my-2'><p>{metal.price}FTM</p></div>
            <div className='w-full h-6 py-1 rounded-2xl border-green-600 border-2 hover:shadow-lg hover:bg-gray-500 text-white text-xs'>{metal.restTime}</div>
        </div>
    )
}

export default cardMetal;