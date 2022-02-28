import React from 'react'
import {
  Grid,
  Typography,
  Divider
} from '@mui/material'

import GameCard from '../../components/GameCard'

import angryMalsImg from '../../assets/images/angrymals.png'
import seoulStartImg from '../../assets/images/seoulstar.png'
import solChicksImg from '../../assets/images/solchicks.png'

const rooms = [
  {
    img: angryMalsImg,
    title: "Angrymals",
    startDate: "2022/2/23 15:00 GMT",
    endDate: 'until sold out'
  },
  {
    img: seoulStartImg,
    title: "Seoul Stars",
    startDate: "2022/4/1 15:00 GMT",
    endDate: '2022/4/3 15:00 GMT'
  },
  {
    img: solChicksImg,
    title: "Solchicks",
    startDate: "2022/1/1 15:00 GMT",
    endDate: '2022/1/5 15:00 GMT'
  }
]

interface GameRoomProps {
  onClick: () => void
}

const GameRoom: React.FC<GameRoomProps> = (props) => {
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
        Select a Game to Purchase NFT
      </Typography>
      <Divider
        sx={{
          color: 'text.second',
          mt: '15px',
          mb: '56px'
        }}
      />
      <Grid container justifyContent="space-between">
        {rooms.map((room, index) => (
          <GameCard
            key={index}
            img={room.img}
            title={room.title}
            startDate={room.startDate}
            endDate={room.endDate}
            onClick={props.onClick}
          />
        ))}
      </Grid>
    </>
  )
}

export default GameRoom