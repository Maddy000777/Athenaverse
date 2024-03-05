import NextLink from 'next/link'
import type { NextPage } from "next";
import { Box, Button} from '@chakra-ui/react';
import Image from 'next/image';
import oldGreek from'../public/png/oldGreek.jpg';
import blueBackground from '../public/png/blueBackground.jpg';
import React from 'react';

const Home: NextPage = () => {
  return (
    <><div className='image-wrapper'>
      <Box maxW={"4000px"}>
        <Image src={oldGreek} alt="Athens Nft" className='image' />
      </Box>
      <h1 className='image-text'>One Stop Place for NFT'S</h1>
      <h2 className='image-text2'>Art is the nectar that every person born </h2>
      <h2 className='image-text3'>as an artist should drink.</h2>
    </div>
    <div className='intro'>
    <Box maxW={"4000px"}>
        <Image src={blueBackground} alt="Blue Background" className='intro-image' />
    </Box>
    <div className='Wallet Setup'>
    <h1 className='intro-heading'>Create Your NFT & Put It On The Market.</h1>
    <h2 className='intro-heading1'>Set Up Your Wallet</h2>
    <h3 className='intro1'>NFT means Non-Fungible Token that are used in </h3>
    <h3 className='intro12'>digital cryptocurrency markets. There are many</h3>
    <h3 className='intro13'> wallets you can set it up with Athenaverse.</h3>
    </div>
    <div className="vl"></div>
    <div className='Add NFT'>
      <h1 className='intro-heading2'>Add Your Digital NFT</h1>
      <h3 className='intro2'>After Setting up your wallet with Athenaverse</h3>
      <h3 className='intro22'> you can add your NFT in the marketplace.</h3>
    </div>
    <div className="v2"></div>
    <div className='Sell NFT'>
    <h1 className='intro-heading3'>Sell Your NFT & Make Profit</h1>
      <h3 className='intro3'>You can sell your NFT in Athenaverse either</h3>
      <h3 className='intro32'>by direct listing or auction listing.</h3>
      <h3 className='intro33'>And make profits in crypto.</h3>
    </div>
    <div className='shop'>
      <Button as={NextLink} href='/buy'>Shop NFTs</Button >
    </div>
    </div>
      <footer>
      <a href='/'>Home </a>
      <span>|</span>
      <a href='https://ethresear.ch/t/privacy-nft-marketplace/18689'> Privacy </a>
      <span>|</span>
      <a href='/aboutus'> About </a>
      <span>|</span>
      <a href='/contactus'> Contact</a>
      <br/>
      <p>© 2023 Athenaverse. All Rights Reserved.</p>
      </footer>
      </>
  );
};

export default Home;