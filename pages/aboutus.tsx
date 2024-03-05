import React from "react";
import { Box } from "@chakra-ui/react";
import Image from 'next/image';
import aboutUs from '../public/png/aboutus.jpg';

export default function aboutus() {
    return(
        <div>
            <h1 className="aboutUsText">About Us</h1>
            <Box  className="aboutus">
                <Image src={aboutUs} alt={"About us"} className="center" />
            </Box>
            <h2 className="aboutUsHeading">Welcome to Athenaverse, where creativity meets the blockchain!</h2>
            <h2 className="aboutUsPara1">At Athenaverse, we're passionate about empowering artists, creators, and collectors in the exciting world of NFTs (non-fungible tokens). Our platform serves as a vibrant marketplace where digital art, collectibles, and other unique creations can be discovered, bought, and sold with ease. What sets Athenaverse apart is our commitment to fostering a community-driven ecosystem built on trust, transparency, and innovation. Whether you're an established artist looking to showcase your work to a global audience, a collector seeking to expand your digital portfolio, or a curious enthusiast eager to explore the limitless possibilities of NFTs, Athenaverse welcomes you with open arms.</h2>
            <h2 className="aboutUsPara2">Our mission is to democratize the digital art space, providing both creators and collectors with the tools and resources they need to thrive. Through cutting-edge technology and a user-friendly interface, we're making the process of minting, trading, and owning NFTs accessible to everyone.Join us on this exhilarating journey as we redefine the future of digital ownership and creativity. Together, let's unlock the full potential of the Athenaverse!</h2>
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
        </div>
    )
}