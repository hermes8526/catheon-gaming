import React, { useState } from 'react'

import {
  Box,
  Modal,
  Typography,
  Zoom,
  Button,
  Grid,
  Card,
  CardActionArea
} from '@mui/material'

import solImg from '../../assets/images/sol.png'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)), #121212',
  p: '40px 65.5px',
  textAlign: 'center',
  borderRadius: '4px'
}

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
  openModal: boolean,
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>,
}

const NFTModal: React.FC<ModalProps> = (props) => {

  const [isDetail, setIsDetail] = useState<boolean>(false)
  const handleClose = () => {
    props.setOpenModal(false)
  }

  return (
    <Modal
      open={props.openModal}
      onClose={() => props.setOpenModal(false)}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style }}>
        {!isDetail && <Zoom in={!isDetail}>
          <Card onClick={() => setIsDetail(true)}>
            <CardActionArea>
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
              </Box>
            </CardActionArea>
          </Card>
        </Zoom>}
        {isDetail && <Zoom in={isDetail}>
          <Card onClick={() => setIsDetail(false)}>
            <CardActionArea>
              <Grid
                sx={{
                  background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09)), #121212',
                  width: 269,
                  height: 488,
                  borderRadius: '8px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  p: '57px 20px',
                  display: 'flex',
                  justifyContent: "space-between",
                  flexDirection: "column"
                }}
              >
                {props.attributes.map((attribute) => (
                  <Grid key={attribute.attr} container
                    sx={{
                      fontSize: '16px',
                      lineHeight: '150%',
                      color: 'text.primary',
                      fontWeight: 'normal',
                    }}
                  >
                    <Grid item xs={5}>
                      <Typography
                        sx={{
                          fontWeight: 'bold'
                        }}
                      >
                        {attribute.attr}
                      </Typography>
                    </Grid>
                    <Grid item xs={7}>
                      <Typography>
                        {attribute.val}
                      </Typography>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </CardActionArea>
          </Card>
        </Zoom>}
        <Typography
          sx={{
            fontSize: '18px',
            fontWeight: 'normal',
            color: 'text.fourth',
            textAlign: 'center',
            mt: '15px'
          }}
        >
          Raraty: {props.rarity}
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: '15px',
            color: 'text.third',
            bgcolor: 'background.active',
            '&:hover': {
              bgcolor: 'background.active',
            }
          }}
          onClick={handleClose}
        >
          ClOSE
        </Button>
      </Box>
    </Modal>
  )
}

export default NFTModal