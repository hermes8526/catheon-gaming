import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
	styled,
	Grid,
	Button,
} from '@mui/material'

import cardImg from '../../assets/images/card.png'
import GameRoom from './GameRoom'
import Purchase from './Purchase'

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

const NFTForSale: React.FC = () => {

	const [stage, setStage] = useState<string>('game')
	const isNFTForSale = window.location.pathname === '/nft/mint'
	const isMyNFT = window.location.pathname === '/nft/my-nft'

	const clickGameRoom = () => {
		setStage('purchase')
	}

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
				sx={{
					width: '928px',
					height: 'calc(100vh - 154px)',
					p: '30px 50px',
					background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), #121212'
				}}
			>
				{stage === 'game' && <GameRoom onClick={clickGameRoom} />}
				{stage === 'purchase' && <Purchase onClick={clickGameRoom} />}
			</Grid>
		</Grid >
	)
}

export default NFTForSale