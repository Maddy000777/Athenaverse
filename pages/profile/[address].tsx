import { Container, Heading, Text } from "@chakra-ui/react";
import { useContract, useOwnedNFTs } from "@thirdweb-dev/react";
import React from "react";
import { MARKETPLACE_ADDRESS, NFT_COLLECTION_ADDRESS } from "../../const/addresses";
import { useRouter } from "next/router";
import NFTGrid from "../../components/NFTGrid";

export default function ProfilePage() {
    const router = useRouter();
    const {contract: nftCollection} = useContract(NFT_COLLECTION_ADDRESS);

    const { contract: marketplace} = useContract(MARKETPLACE_ADDRESS, "marketplace-v3");  

    const {data: ownedNfts, isLoading: loadingOwnedNfts} = useOwnedNFTs(
        nftCollection,
        router.query.address as string
    );
        console.log(ownedNfts);
    return (
        <div className="bgcolor">
        <Container maxW={"1200px"} p={5}>
            <Heading className="ownnft">Owned NFTs</Heading>
            <Text className="ownnft">Browse and manage your NFTs from this collection.</Text>
            <NFTGrid 
                data={ownedNfts}
                isLoading={loadingOwnedNfts}
                emptyText={"You don't own any NFTs yet from this collection."}
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
}