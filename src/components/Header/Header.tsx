import * as React from 'react'

import {
  styled,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  MenuItem,
  Paper,
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'
import MoreIcon from '@mui/icons-material/MoreVert'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import SettingsIcon from '@mui/icons-material/Settings'

import logo from '../../assets/images/logo.png'
import phantom from '../../assets/images/phantom.png'
import sol from '../../assets/images/sol.png'

const pages = ['NFT', 'Exchange', 'Staking']

const StyledTypography = styled(Typography)(() => ({
  margin: '0 17px',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer'
}))

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <AppBar position="static"
      sx={{
        height: 74,
        bgcolor: 'background.header',
        justifyContent: 'center',
      }}>
      <Container sx={{ maxWidth: '1920px !important' }}>
        <Toolbar disableGutters>
          <Box
            sx={{ mr: '100px', display: { xs: 'none', md: 'flex' } }}
          >
            <img src={logo} alt="logo" />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ mr: '110px', display: { xs: 'flex', md: 'none' } }}>
            <img src={logo} alt="logo" />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <StyledTypography key={page}>
                {page}
              </StyledTypography>
            ))}
          </Box>
          <Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <StyledTypography>
                Bridge
              </StyledTypography>
              <IconButton size="large" aria-label="darkmode icon" color="inherit">
                <DarkModeIcon />
              </IconButton>
              <IconButton
                size="large"
                aria-label="setting icon"
                color="inherit"
              >
                <SettingsIcon sx={{ color: 'text.active' }} />
              </IconButton>
              <IconButton
                size="large"
                aria-label="phantom icon"
                color="inherit"
              >
                <img src={phantom} alt="phantom wallet" />
              </IconButton>

              <Paper
                sx={{
                  bgcolor: 'rgba(255, 255, 255, 0.12)',
                  p: '6px 15px 6px 8px',
                  display: 'flex',
                  alignItems: 'center',
                  ml: '12px'
                }}>
                <img src={sol} alt="sol" />
                <Typography
                  sx={{
                    fontSize: '14px',
                    ml: '12px'
                  }}
                >0x12ab...21ba</Typography>
              </Paper>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-haspopup="true"
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Header
