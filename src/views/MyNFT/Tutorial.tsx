import React from 'react'
import {
  Button,
  Typography,
  Divider,
  Grid
} from '@mui/material'

interface TutorialProps {
  setStep: React.Dispatch<React.SetStateAction<string>>
}

const Tutorial: React.FC<TutorialProps> = (props) => {
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
        My NFTs
      </Typography>
      <Divider
        sx={{
          color: 'text.second',
          mt: '15px',
          mb: '30px'
        }}
      />
      <Typography
        sx={{
          fontSize: '24px',
          lineHeight: '28.13px',
          fontWeight: 500,
          color: 'text.second'
        }}
      >
        Tutorial
      </Typography>
      <Typography
        sx={{
          fontSize: '18px',
          lineHeight: '21.09px',
          fontWeight: 400,
          color: 'text.second',
          mt: '30px'
        }}
      >
        Step 1. Please connect Phantom wallet.
      </Typography>
      <Typography
        sx={{
          fontSize: '18px',
          lineHeight: '21.09px',
          fontWeight: 400,
          color: 'text.second',
          mt: '30px'
        }}
      >
        Step 2. Please connect game if you want to link the NFT. (Optional)
      </Typography>
      <Typography
        sx={{
          fontSize: '18px',
          lineHeight: '21.09px',
          fontWeight: 400,
          color: 'text.second',
          mt: '30px'
        }}
      >
        Step 3. Please link the NFT you want to use in the game. (Optional)
      </Typography>
      <Grid
        sx={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
        <Button
          sx={{
            color: 'text.active',
          }}
          onClick={() => props.setStep('game')}
        >
          Next
        </Button>
      </Grid>
    </>
  )
}

export default Tutorial