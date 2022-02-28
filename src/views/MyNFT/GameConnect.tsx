import React, { useState } from 'react'
import {
  Button,
  Typography,
  Grid,
  Box,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
} from '@mui/material'
import { SelectChangeEvent } from '@mui/material/Select';

import { NFTCard } from '../../components/Modal'
import nftImg from '../../assets/images/nft-image.png'
import nftAvatarImg from '../../assets/images/nft-avatar.png'

const nfts = [
  {
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
  },
  {
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
  },
  {
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
]

const GameConnect: React.FC = () => {

  const [game, setGame] = useState<string>('Angrymals')

  const handleChange = (event: SelectChangeEvent) => {
    setGame(event.target.value as string);
  };

  return (
    <>
      <Grid
        sx={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
        <Button
          sx={{
            bgcolor: 'background.active',
            height: '40px',
            p: '10px 15px',
            mr: '30px',
            '&:hover': {
              bgcolor: 'background.active',
            }
          }}
        >
          <Typography
            sx={{
              color: 'text.third',
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '16px',
              textTransform: 'initial'
            }}
          >
            Connect a Game
          </Typography>
        </Button>
        <Box
          sx={{
            width: '250px',
          }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Search Game Title</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={game}
              label="Search Game Title"
              onChange={handleChange}
              sx={{
                background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.07)), #121212;',
                outLine: 'none',
                height: '40px',
                color: 'text.second',
              }}
            >
              <MenuItem value="Angrymals">Angrymals</MenuItem>
              <MenuItem value="Seoul Stars">Seoul Stars</MenuItem>
              <MenuItem value="SolChicks">SolChicks</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Grid>
      <Typography
        sx={{
          mt: '45px',
          color: 'text.second',
          fontSize: '24px',
          lineHeight: '28px'
        }}
      >
        {game}
      </Typography>
      <Grid sx={{
        display: 'flex',
        justifyContent: 'space-between',
        mt: '20px'
      }}>
        {nfts.map((nft, index) => (
          <NFTCard
            key={index}
            img={nft.img}
            avatar={nft.avatar}
            title={nft.title}
            price={nft.price}
            rarity={nft.rarity}
            attributes={nft.attributes}
          />
        ))}
      </Grid>
    </>
  )
}

export default GameConnect