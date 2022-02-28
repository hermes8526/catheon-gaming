import React from 'react'

import {
  Box,
  Modal,
  Typography,
  Link,
  Button
} from '@mui/material'

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)), #121212',
  p: '16px 32px 18px',
  textAlign: 'center',
  borderRadius: '4px'
}

interface ModalProps {
  type: string,
  linkText: string,
  link: string,
  openModal: boolean,
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>,
  setOpenNFTModal: React.Dispatch<React.SetStateAction<boolean>>
}

const PurchaseModal: React.FC<ModalProps> = (props) => {
  const handleClose = () => {
    props.setOpenModal(false)
    props.setOpenNFTModal(true)
  }

  return (
    <Modal
      open={props.openModal}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style, width: 400 }}>
        {props.type === 'true' && <CheckCircleIcon sx={{ color: '#03DAC6' }} />}
        {props.type === 'false' && <ErrorIcon sx={{ color: '#CF6679' }} />}
        {props.type === 'true' && <Typography
          sx={{
            fontSize: '16px',
            lineHeight: '24px',
            mt: '15px',
            color: 'text.fourth',
            fontWeight: 400,
          }}
        >
          Congratulations!
        </Typography>}
        <Typography
          sx={{
            fontSize: '14px',
            lineHeight: '20px',
            mt: '13px',
            color: 'text.fourth',
            fontWeight: 400,
          }}
        >
          {props.type === 'true' && <>Chaos chest purchase succeeded. <br />
            You can review the transaction at {` `}</>}
          {props.type === 'false' && <>Chaos chest purchase failed. <br />
            You can review the transaction at {` `}</>}
          <Link href={`${props.link}`} underline="always" target="_blank"
            sx={{
              color: 'text.fourth',
              textDecorationColor: 'text.fourth'
            }}
          >
            {props.linkText}
          </Link>.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end'
          }}
        >
          <Button
            sx={{
              color: 'text.active',
              mt: '34px'
            }}
            onClick={handleClose}
          >
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  )
}

export default PurchaseModal