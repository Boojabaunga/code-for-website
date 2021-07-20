import CardWrapper from './card-wrap';
import CardContentMetal from './card-metal';
import CardContentGame from './card-game';
import Image from 'next/image'

interface CardProps{ 
    item : string,
    onClick:(item?: any) => void
}
export const Card :any = ({item, onClick}:CardProps) => {
    return (
        <CardWrapper onClick={()=>onClick(item)}>
            <CardContentMetal metalType={item}></CardContentMetal>
        </CardWrapper>
    )
}

export const ComingCard = (props: any) => {
    return (
        <CardWrapper onClick={props.onClick}>
            <div className="bg-gray-800 w-52 h-72 flex flex-col justify-between items-center p-2">
                <div className='w-36 h-36 rounded-full bg-gray-700 text-4xl py-8 font-extrabold text-white'>Coming<br/> Soon</div>
                <div className='flex flex-col justify-start'>
                    <div className='text-xs text-white font-bold rounded w-32 h-4 bg-gray-700 mb-2'></div>
                    <div className='text-xs text-white font-bold rounded w-36 h-4 bg-gray-700'></div>
                </div>
                <div className='w-full h-6 m-3 rounded-2xl border-green-600 border-2 hover:shadow-lg hover:bg-gray-500 text-white text-xs'></div>
                </div>
        </CardWrapper>
    )
}

