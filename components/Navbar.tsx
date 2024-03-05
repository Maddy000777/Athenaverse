import { Box, Flex, Heading, Link, Text} from "@chakra-ui/react";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import NextLink from 'next/link';
import Image from 'next/image';
import LogoColour from '../public/png/LogoColour.png';
import cart from '../public/png/cart.png';
// import { px } from "framer-motion";

export function Navbar() {
    const address = useAddress();

    return (
        <Box maxW={"100vw"} m={"auto"} py={"10px"}px={"40px"} background={"#A9FFFD"}>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
                <Link as={NextLink} href='/'>
                    <Heading paddingLeft={"70px"}><Image src = {LogoColour} alt= "Äthenaverse" width={150} height={75}/></Heading>
                </Link>
                <Flex direction={"row"}>
                    <Link as={NextLink} href='/buy' mx={2.5} style={{ textDecoration: "none" }}>
                        <Text fontSize={20} paddingRight={"25px"} style={{color :"#3559E0"} }  fontWeight={500}>BUY NOW</Text>
                    </Link> 
                    <Link as={NextLink} href='/sell' mx={2.5} style={{ textDecoration: "none" }}>
                        <Text fontSize={20} paddingRight={"25px"} style={{color :"#3559E0"}}  fontWeight={500}>SELL</Text>
                    </Link>
                    <Link as={NextLink} href='/aboutus' mx={2.5} style={{ textDecoration: "none" }}>
                        <Text fontSize={20} paddingRight={"25px"} style={{color :"#3559E0"}}  fontWeight={500}>ABOUT</Text>
                    </Link>
                    <Link as={NextLink} href='/contactus' mx={2.5} style={{ textDecoration: "none" }}>
                        <Text fontSize={20} paddingRight={"25px"} style={{color :"#3559E0"}}  fontWeight={500}>CONTACT US</Text>
                    </Link>
                    <Link as={NextLink} href='https://thirdweb.com/sepolia/0x3ac8Ce62576bE0e92B37F886fDe1e6AF33e0d744/nfts' mx={2.5} style={{ textDecoration: "none" }}>
                        <Text fontSize={20} style={{color :"#3559E0"}}  fontWeight={500}>CREATE NFT</Text>
                    </Link>
                </Flex>
                <Flex dir={"row"} alignItems={"center"}>
                    <ConnectWallet style={{backgroundColor :"#50C4ED"}}/>
                    {address && (
                        <Link as={NextLink} href={`/profile/${address}`} paddingLeft={"25px"}>
                            <Image src = {cart} alt= "Add to Cart" width={40} height={30}/>
                        </Link>
                    )}
                </Flex>
            </Flex>
            
        </Box>
    )
};