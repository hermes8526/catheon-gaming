import React, { useState } from 'react'
import {
  Grid,
  Typography,
  Divider,
  Button,
} from '@mui/material'

import { PurchaseModal, NFTModal } from '../../components/Modal'
import purchaseImg from '../../assets/images/purchase.png'
import solImg from '../../assets/images/sol.png'
import treasureImg from '../../assets/images/treasure.png'
import nftImg from '../../assets/images/nft-image.png'
import nftAvatarImg from '../../assets/images/nft-avatar.png'

const nft = {
  img: nftImg,
  avatar: nftAvatarImg,
  title: 'Angrymals',
  price: 1,
  rarity: 'Common',
  attributes: [
    {
      attr: 'Rarity',
      val: 'Common'
    },
    {
      attr: 'Angrymal',
      val: 'Dumb'
    },
    {
      attr: 'Race',
      val: 'Wolves'
    },
    {
      attr: 'Hat',
      val: 'Unicone'
    },
    {
      attr: 'Eyes',
      val: 'WelderGlasses'
    },
    {
      attr: 'Mouth',
      val: 'CustersMustache'
    },
    {
      attr: 'Makeup',
      val: 'ThirdEye'
    },
    {
      attr: 'Ears',
      val: 'Barbell'
    },
    {
      attr: 'Dress',
      val: 'None'
    },
  ]
}

interface GameRoomProps {
  onClick: () => void
}

const Purchase: React.FC<GameRoomProps> = (props) => {

  const [minted, setMinted] = useState<boolean>(false)
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [openNFTModal, setOpenNFTModal] = useState<boolean>(false)
  const handleMint = () => {
    setOpenModal(true)
    setMinted(true)
  }

  return (
    <>
      <Typography
        sx={{
          fontSize: '36px',
          lineHeight: '42px',
          fontWeight: 500,
          color: 'text.second'
        }}
      >
        {!minted && <>Select a Game to Purchase NFT</>}
        {minted && <>Minted NFT</>}
      </Typography>
      <Divider
        sx={{
          color: 'text.second',
          mt: '15px',
          mb: '40px'
        }}
      />
      <Grid
        sx={{
          background: `url(${purchaseImg})`,
          height: '375px',
          pb: '30px',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        {!minted && <><img src={treasureImg} alt="treasure" style={{ margin: '10px 0' }} />
          <Grid
            sx={{
              display: 'flex',
              color: 'text.primary',
              mb: '16px'
            }}
          >
            <Typography>Price: </Typography>
            <img src={solImg} alt="sol" style={{ margin: '0 10px 0 14px' }} />
            <Typography>1 </Typography>
          </Grid>
          <Button variant="contained"
            onClick={handleMint}
            sx={{
              bgcolor: 'background.active',
              '&: hover': {
                bgcolor: 'background.active'
              },
              color: 'text.third',
              fontSize: '14px',
            }}
          >
            MINT
          </Button>
        </>}
      </Grid>
      <PurchaseModal
        type='true'
        linkText="0x21433@!#@!."
        link="https://etherscan.io"
        openModal={openModal}
        setOpenModal={setOpenModal}
        setOpenNFTModal={setOpenNFTModal}
      />
      <NFTModal
        img={nft.img}
        avatar={nft.avatar}
        title={nft.title}
        price={nft.price}
        rarity={nft.rarity}
        attributes={nft.attributes}
        openModal={openNFTModal && minted}
        setOpenModal={setOpenNFTModal}
      />
    </>
  )
}

export default Purchase