import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../components/layout/layout'
import styles from '../styles/Home.module.css'
import BannerImg from '../public/assets/images/banner_img.png'
import Metal from '../public/assets/images/metal.gif'
import CardWrapper from '../components/cards/card-wrap'
import CardMetal from '../components/cards/card-metal'
import {Card,ComingCard,GameCard} from '../components/cards'
import {MetalList} from '../core/type/metals';
import NFTItemCarousel from '../container/NFTItemCarousel'
import WalletDialog from '../components/dialogs/dialogs'

let getLoopImage = (counter:number) => {
  if (counter == null) {
    counter = 1
  }
  let content = [];
  const component = <Image src={Metal} alt='metal'/>;
  for (let i = 0; i < counter; i++)
    content.push(component);
  return content;
};

const games = [
  {
    label: 'Bnm',
    id: 'emoki-bandits',
  }, {
    label: 'Ek',
    id: 'emoki-bandits',
  }
];

const gamePlay = (e:any) =>{
  console.log(e.target.alt)
  
}

export default function Home() {

  const router = useRouter();
  const navigate = (item: any) => {
    
    router.push({
      pathname: '/metalDetail/[type]',
      query: {type: item}
    })  
  }
  
  return (
  <>
   <div className=''>
     <Head>
       <title>Custome opensea</title>
     </Head>
     <Layout>
       <div>
         <div className={styles.first_section}>
          <video className='absolute left-0 top-0' loop autoPlay muted src={require('../public/assets/videos/bg_video.webm')} />
          <div className='absolute left-0 top-14 w-full h-28 font-bold text-7xl title-color font-display'>&quot;Get Them <code className='text-white'>Before</code> They Are Gone!&quot;</div>
          <div className={styles.first_title}> &quot;The Greatest <code className='title-color'>Non Fungibles</code> on Boojabaunga&quot;</div>
          <div className='absolute left-0 bottom-2 flex justify-between'>{getLoopImage(4)}</div>
         </div>
         <div className='w-full text-center relative'>
           <div className='-z-10'><Image src={BannerImg} alt=''/></div>
           <div className={styles.banner_text}>
             <p className='text-white font-bold text-2xl py-4 px-16 font-mono'>HELP DOCTOR MONKETYSTEIN BUILD HIS LABORATORY. FIND PIECES OF THE EMOKI MACHINE. FUSE ELEMENTS INTO COLLECTABLE NFT&apos;S OF YOUR FAVORITE EMOKIS.</p>
             </div>
         </div>
         <div className='w-full text-center bg-gray-800 py-4'>
           <div className='p-8'>
             <h2 className='text-white font-bold text-5xl'>Doctor Monketysteins Secret elements</h2>
             <p className='text-white font-bold text-2xl mt-11 px-16'>Doctor Monkeystein has scoured the Boojabaunga galaxy in search of the rarest elements that when combined create the Emoki tribes of Boojabaunga.</p>
           </div>
            <div className='px-12 flex flex-col'>
              <div className='flex justify-center mb-2'>
                <Card item='Bnm' onClick={(item: any)=>navigate(item)}/>
                <Card item='Ek' onClick={(item: any)=>navigate(item)}/>
                <Card item='Tcm' onClick={(item: any)=>navigate(item)}/>
                <Card item='Zrt' onClick={(item: any)=>navigate(item)}/><br/>
              </div>              
              <div className='flex justify-center'>
                <ComingCard onClick={(item: any)=>navigate('comingCard')}/>
                <ComingCard onClick={(item: any)=>navigate('comingCard')}/>
                <ComingCard onClick={(item: any)=>navigate('comingCard')}/>
                <ComingCard onClick={(item: any)=>navigate('comingCard')}/>
              </div>
            </div>
            {/* <div className='px-12 flex justify-center mt-3 mb-5'>
              <NFTItemCarousel></NFTItemCarousel>
            </div> */}
         </div>
         <div className='w-full bg-indigo-400-600 relative'>
           <div><video className='p-0 -z-10 absolute' loop autoPlay muted src={require('../public/assets/videos/foot_video.webm')} /></div>
           <div className='py-48'>
              <div className='flex justify-center text-center'>
                {games.map((game, index) => <Link href={`/games/${game.id}`} key={index} passHref><GameCard gameType={game.label}/></Link>)}
              </div>   
           </div>
         </div>
       </div>
     </Layout>
   </div>
   </>
  )
}
