import React, { useState } from 'react'

import {
  Box,
  Typography,
  Button,
  Grid,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
} from '@mui/material'
import { SelectChangeEvent } from '@mui/material/Select';
import LinkIcon from '@mui/icons-material/Link';
import LinkOffIcon from '@mui/icons-material/LinkOff';

import solImg from '../../assets/images/sol.png'

interface ModalProps {
  img: string,
  avatar: any,
  title: string
  price: any,
  rarity: string,
  attributes: {
    attr: string,
    val: string
  }[]
}

const NFTCard: React.FC<ModalProps> = (props) => {

  const [action, setAction] = useState<string>('')

  const handleChange = (event: SelectChangeEvent) => {
    setAction(event.target.value as string);
  };

  return (
    <>
      <Box sx={{
        background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09)), #121212',
        width: 269,
        height: 488,
        borderRadius: '8px',
        textAlign: 'left',
        '&:hover': {
          background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.14)), #121212;',
        }
      }}>
        <img src={props.img} alt="NFT Image" />
        <img src={props.avatar} alt="Avatar"
          style={{
            margin: '-58px 0 0 10px'
          }}
        />
        <Typography
          sx={{
            fontSize: '20px',
            color: 'text.primary',
            textAlign: 'right',
            m: '-37px 10px 0 0'
          }}
        >
          {props.title}
        </Typography>
        <Typography
          sx={{
            fontSize: '16px',
            color: 'text.primary',
            textAlign: 'right',
            m: '0px 10px 0 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end'
          }}
        >
          <img src={solImg} alt="sol" />
          {props.price}
        </Typography>
        <Grid sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          mr: '10px',
          mt: '10px'
        }}>
          <Button variant="contained" sx={{
            bgcolor: 'background.second',
            color: 'text.active',
            width: '102px',
            height: '36px',
            mr: '19px'
          }}>
            <LinkIcon />
            Link
          </Button>
          <FormControl>
            <InputLabel id="demo-simple-select-label">ACTION</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={action}
              label="ACTION"
              onChange={handleChange}
              sx={{
                bgcolor: 'background.active',
                color: 'text.third',
                outLine: 'none',
                height: '36px',
                width: '115px',
              }}
            >
              <MenuItem value="Merge">Merge</MenuItem>
              <MenuItem value="Transfer">Transfer</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Box>
    </>
  )
}

export default NFTCard