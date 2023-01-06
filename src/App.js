import React, { useEffect, useState } from 'react';
import './App.css';
import {ThemeProvider} from "@mui/material";
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import { green, purple, red } from '@mui/material/colors';
import { theme } from './mediaQuerys/mediaQuerys';
import ButtonJoin from './button/ButtonJoin';

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
      <Typography variant=''>Feel The Music</Typography>
      <Typography variant=''>Stream over 20 thousand songs with one click</Typography>
      <ButtonJoin props = 'Join Now'/>
      <Typography variant=''>{w} px</Typography>
      <Typography variant='' sx={
        {display: {
          tablet: 'none'
        }}
      }>Mobile
      </Typography>
      <Typography variant='' sx={
        {display: {
          mobile: 'none',
          tablet: 'block',
          desktop: 'none'
        }}
      }>Tablet</Typography>
      <Typography variant=''
      sx={
        {display: {
          mobile: 'none',
          tablet: 'none',
          desktop: 'block'
        }}
      }>Desktop</Typography>
      </Responsive>
    </div>
    </ThemeProvider>
  );
}


