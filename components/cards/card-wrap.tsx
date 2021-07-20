import styles from '../../styles/cardWrapper.module.css'
import Image from 'next/image'

const cardWrapper = (props: any)=>{
    return (
        <div className={'w-52 h-80 flex flex-col justify-between  text-5xl mx-1 border-2 border-white rounded-lg overflow-hidden cursor-pointer bg-gray-800'} onClick={props.onClick}>
            <div className={'flex justify-end items-center px-3 w-full bg-gray-900 py-1'}>
                <i className="fas fa-cog text-gray-200 text-sm hover:text-green-900"></i>
            </div>
            {props.children}
            <div className='w-full h-6 bg-gray-900 flex justify-center items-center hover: border-gray-200'>
                <div className={styles.footer_arrow}></div>
            </div>
        </div>
    )
}

export default cardWrapper;