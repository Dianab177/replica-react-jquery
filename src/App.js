import React, { useEffect, useState } from 'react';
import './App.css';
import { Typography, ThemeProvider } from '@mui/material';
import { styled } from '@mui/system';
import { green, purple, red } from '@mui/material/colors';
import {theme} from './mediaQuerys/mediaQuerys';

const Responsive = styled('div')(({theme}) => ({
[theme.breakpoints.up('mobile')]: {
  color: green[500]
},
[theme.breakpoints.up('tablet')]: {
  color: purple[500]
},
[theme.breakpoints.up('desktop')]: {
  color: red[500]
}
}));

export default function App() {
  const [w, setW] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setW(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Responsive className="App-header">
      <Typography variant='h4'>Réplica React Mediaquery</Typography>
      <Typography variant='h4'>{w} px</Typography>
      </Responsive>
    </div>
    </ThemeProvider>
  );
}

