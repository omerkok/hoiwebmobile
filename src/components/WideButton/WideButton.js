import React from 'react';
import Button from '@mui/material/Button';
import { globalStyles } from '../../assets/Styles';
import './WideButton.css';
const WideButton = ({ text, onPress }) => {
  let width = document.documentElement.clientWidth;
  let height = document.documentElement.clientHeight;
  return (
    <Button
      variant='contained'
      className='WideButtonContainer'
      style={{
        height: height * 0.06,
        width: width * 0.8,
        backgroundColor: globalStyles.greenColor,
        borderRadius: 15,
      }}
      onClick={onPress}>
      <span
        style={{
          fontFamily: 'PoppinsMedium',
          color: globalStyles.whiteColor,
          fontSize: globalStyles.h24,
        }}>
        {text}
      </span>
    </Button>
  );
};

export default WideButton;
