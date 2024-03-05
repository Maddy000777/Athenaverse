import React from "react";
import { Container, Heading, Text } from "@chakra-ui/react";
import { Box, Button} from '@chakra-ui/react';
import Image from 'next/image';
import contactUs from '../public/png/contactUs.jpg';

export default function contactus() {
    return(
        <>
        <div >
            <h1 className="contactusHeading">Contact Us</h1>
            <h2 className="contactustext1">Get in Touch With Us</h2>
            <h2 className="contactustext2">We're here to answer questions you may have</h2>
            <Box>
                <Image src={contactUs} alt={"Contact us"} width={700} height={800} className="contactus"/>
            </Box>
            <div >
            <Container className="formbox">
            <form action="https://api.web3forms.com/submit" method="POST" className="form">
            <input type="hidden" name="access_key" value="253ef01c-c080-4e8f-85a2-7c8f62b586f9"/>
                <input className="form1" type="text" name="Name" placeholder="Enter your Name"/>
                <input className="form2" type="text" name="Email" placeholder="Enter your Email"/>
                <input className="form3" type="text" name="Message" placeholder="Enter your Message"/>
                <button type="submit" className="submit">Submit</button>
            </form>
            </Container>
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
    )
}
