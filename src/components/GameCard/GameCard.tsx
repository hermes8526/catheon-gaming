import React, { useState } from 'react'
import {
  Collapse,
  Card,
  CardMedia,
  styled,
  Typography,
  CardActionArea
} from '@mui/material'

interface GameCardProps {
  img: any,
  title: string,
  startDate: string,
  endDate: string,
  onClick: () => void
}

const LabelTypography = styled(Typography)(() => ({
  fontSize: '14px',
  color: '#FFFFFF99',
  marginTop: '15px'
}))

const DateTypography = styled(Typography)(() => ({
  fontSize: '18px',
  lineHeight: '21px',
  marginTop: '1.5px',
  color: '#ffffff',
}))

const GameCard: React.FC<GameCardProps> = (props) => {
  const [expanded, setExpanded] = useState<boolean>(false)
  const [opacity, setOpacity] = useState<number>(.5)
  const [scale, setScale] = useState<number>(1)

  const toggleDetails = (toggle: boolean) => {
    if (toggle) {
      setExpanded(false)
      setOpacity(.5)
      setScale(1)
    } else {
      setExpanded(true)
      setOpacity(1)
      setScale(1.1)
    }
  }

  return (
    <Card
      onMouseEnter={() => toggleDetails(expanded)}
      onMouseLeave={() => toggleDetails(expanded)}
      onClick={props.onClick}
      sx={{
        width: 269,
        boxShadow: 'none',
        opacity: opacity,
        transform: `scale(${scale})`
      }}>
      <CardActionArea
        sx={{
          background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), #121212',
          p: '10px',
        }}
      >
        <CardMedia
          component="img"
          height="140"
          image={props.img}
          alt={props.title}
        />
        <Typography
          sx={{
            mt: '15px',
            fontSize: '20px'
          }}
        >
          {props.title}
        </Typography>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <LabelTypography>
            STARTING DATE:
          </LabelTypography>
          <DateTypography>
            {props.startDate}
          </DateTypography>
          <LabelTypography>
            ENDING DATE:
          </LabelTypography>
          <DateTypography>
            {props.endDate}
          </DateTypography>
        </Collapse>
      </CardActionArea>
    </Card >
  )
}

export default GameCard