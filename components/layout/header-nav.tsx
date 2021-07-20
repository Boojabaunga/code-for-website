import {useState} from 'react'
import Image from 'next/image';
import Logo from '../../public/assets/images/logo.png';
import Search from '../../public/assets/images/icons/search.png';
import LogOut from '../../public/assets/images/icons/logout.png';
import Style from '../../styles/navbar.module.css';
import Dialog from '../dialogs/dialogs'
import DialogWalletContent  from '../../components/dialogs/content/wallet'


const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openDialog = () =>{
        setIsOpen(!isOpen);
    }    
    const closeDialog = ()=> {
        setIsOpen(false);
    }

    return (
        <>
            <div className="flex justify-between items-center px-10 py-5 bg-nav border-b-4 border-green-400">
                <div className="mr-32 bg-gray-50 text-center">
                    <Image src={Logo} alt="Logo"/>
                </div>
                <div className="group flex justify-between items-center px-2 border-2 border-solid rounded bg-white">
                    <div className="px-2"><Image src={Search} alt="search icon"></Image></div>
                    <input className='w-96 h-10 text-lg group-focus: outline-none' type="search" name="" id="" placeholder="Search items"/>
                </div>
                <button className='px-4 py-2 rounded-lg hover:border-green-600 hover:shadow-lg hover:scale-125 font-bold text-black-current bg-white border-2 border-black border-opacity-40' onClick={openDialog}>Connect Wallet</button>
                <div className='cursor-pointer' onClick={()=> {alert('Really logout?')}}><Image src={LogOut} alt='logout'/></div>
            </div>
            <Dialog isOpen={isOpen} closeDialog={closeDialog}>
                <DialogWalletContent />
            </Dialog>
        </>
    )
}

export default Nav;