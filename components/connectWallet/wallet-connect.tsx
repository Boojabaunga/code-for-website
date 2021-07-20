import wallet from "../dialogs/content/wallet"
import {WalletType} from './type'
import Image from 'next/image';

const walletItem = (props:any) => {
    return (
        <div className='w-44 h-28 my-14 mr-3 border-4 border-white rounded-lg p-3 flex flex-col justify-start'>
            <div className='w-8 h-auto'>
                <Image src={require(`../../public/assets/images/wallet/${(props.type)}.svg`)}
                        alt = {props.type}/>
            </div>
            <div>
                <p>{props.type}</p>
                <p className='text-extra-sm font-light'>Connect with your google Facebook, Twitter or Discord</p>
            </div>


        </div>
    )
}

export default walletItem;