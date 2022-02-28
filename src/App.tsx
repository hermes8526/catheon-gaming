import React, { useMemo, useState, createContext } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';
import { amber, deepOrange, grey, deepPurple } from '@mui/material/colors';
import Header from './components/Header';
import NFTForSale from './views/NFTForSale'
import MyNFT from './views/MyNFT';

const ColorModeContext = createContext({ toggleColorMode: () => { } });

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        // palette values for light mode
        primary: amber,
        text: {
          primary: grey[900],
          secondary: grey[800],
        },
      }
      : {
        // palette values for dark mode
        primary: deepPurple,
        background: {
          default: '#121212',
          second: 'rgba(255, 255, 255, 0.12)',
          header: '#000000',
          active: '#9870FF',
        },
        text: {
          primary: '#ffffff',
          second: '#FFFFFF99',
          third: '#000000',
          fourth: '#FFFFFFDE',
          active: '#9870FF',
        },
      }),
  },
});

function App() {
  const [mode, setMode] = useState<PaletteMode>('dark');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [],
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <Switch>
            <Route path="/nft/mint" exact><NFTForSale /></Route>
            <Route path="/nft/my-nft" exact><MyNFT /></Route>
            <Redirect from="/" to="/nft/mint" />
          </Switch>
        </Router >
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
