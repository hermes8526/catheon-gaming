import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
	styled,
	Grid,
	Button,
} from '@mui/material'

import Tutorial from './Tutorial'
import GameConnect from './GameConnect'
import cardImg from '../../assets/images/card.png'

const StyledButton = styled(Button)(() => ({
	width: '100%',
	height: '35px',
	justifyContent: 'flex-start',
	textTransform: 'initial',
	fontSize: '20px',
	lineHeight: '23px',
	borderRadius: '6px',
	fontWeight: 'normal',
	'&:hover': {
		backgroundColor: 'rgba(255, 255, 255, 0.05)'
	}
}))

const MyNFT: React.FC = () => {

	const [step, setStep] = useState<string>('tutorial')
	const isNFTForSale = window.location.pathname === '/nft/mint'
	const isMyNFT = window.location.pathname === '/nft/my-nft'

	return (
		<Grid container justifyContent="center"
			sx={{
				p: '30px 0 50px',
				mt: 0,
				flexGrow: 1,
				bgcolor: 'background.default',
			}}
		>
			<Grid item
				sx={{
					width: '292px',
					height: 'calc(100vh - 154px)',
					p: '40px 30px',
					mr: '26px',
					background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), #121212'
				}}
			>
				<NavLink to="/nft/mint"
					style={{
						textDecoration: 'none'
					}}
				>
					<StyledButton
						sx={isNFTForSale
							? {
								color: 'text.primary',
								bgcolor: 'rgba(255, 255, 255, 0.2)',
								fontWeight: 'bold'
							}
							: {
								color: 'text.primary',
							}}>
						<img src={cardImg} style={{ marginRight: '8px' }} alt="card" />
						NFT for Sale
					</StyledButton>
				</NavLink>
				<NavLink to="/nft/my-nft"
					style={{
						textDecoration: 'none'
					}}
				>
					<StyledButton
						sx={isMyNFT
							? {
								color: 'text.primary',
								bgcolor: 'rgba(255, 255, 255, 0.2)',
								fontWeight: 'bold'
							}
							: {
								color: 'text.primary',
							}}
					>
						<img src={cardImg} style={{ marginRight: '8px' }} alt="card" />
						My NFTs
					</StyledButton>
				</NavLink>
			</Grid>
			<Grid item
				sx={(step === 'tutorial')
					? {
						width: '928px',
						height: 'calc(100vh - 154px)',
						p: '30px 50px',
						background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), #121212'
					}
					: {
						width: '928px',
						p: '30px 50px',
					}}
			>
				{step === 'tutorial' && <Tutorial setStep={setStep} />}
				{step === 'game' && <GameConnect />}
			</Grid>
		</Grid>
	)
}

export default MyNFT