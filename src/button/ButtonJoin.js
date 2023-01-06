import React from 'react';
import Button from '@mui/material/Button';


const ButtonJoin = (props) => {
  return (
    <div>
        <Button variant="contained" color="primary" href="#join">{props}</Button>
    </div>
  )
}

export default ButtonJoin;