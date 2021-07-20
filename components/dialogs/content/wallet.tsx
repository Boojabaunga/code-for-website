import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import WalletConnectItem from '../../connectWallet/wallet-connect'
import { WalletType } from '../../connectWallet/type';

const WalletContent = () => {
    return(
        <div className="flex bg-gray-700">
            <Image src={require('../../../public/assets/images/wallet/walletWorld.png')}
             alt={'wallet content'} width={280} height={500}
             layout="intrinsic"

             />
            <div className='w-96 h-auto p-10 text-white'>
                <div><p><span className='cursor-pointer' onClick={() =>{alert('aaa')}}><FontAwesomeIcon icon={faSignOutAlt} className='mx-3 transform rotate-180'/>Go Back</span></p></div>
                <div>
                    <h1 className='text-3xl font-extrabold'>Connect Your Wallet</h1><br />
                    <p className='text-sm'>Connect with one of wallet available providers or create a new wallet.<span className='text-green-400'>What is a wallet</span></p>
                </div>
                <div className='flex justify-start'>
                    <WalletConnectItem type={WalletType.MetaMask}/>
                    <WalletConnectItem type={WalletType.CoinBase}/>
                </div>
                <p>You can connect blockchain network with your wallet.<br/>If you have your wallet, you have to create own wallet.</p>
            </div>
        </div>

    )
}
export default WalletContent;