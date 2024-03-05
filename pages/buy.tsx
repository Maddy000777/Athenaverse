import React from "react";
import { Container, Heading, Text } from "@chakra-ui/react";
import NFTGrid from "../components/NFTGrid";
import { NFT_COLLECTION_ADDRESS } from "../const/addresses";
import { useContract, useNFTs } from "@thirdweb-dev/react";

export default function Buy() {
    const { contract } = useContract(NFT_COLLECTION_ADDRESS);
    const { data, isLoading } = useNFTs(contract);

    return (
        <div className="bgcolor">
            <Container maxW={"1200px"} p={5}>
                <Heading className="buytext">Buy NFTs</Heading>
                <Text className="buytext">Browse and buy NFTs from this collection.</Text>
            <NFTGrid 
                isLoading={isLoading} 
                data={data} 
                emptyText={"No NFTs found"}
            />
            </Container>
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
};