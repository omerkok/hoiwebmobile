import React from 'react';
import { globalStyles } from '../../assets/Styles';
import WideButton from '../WideButton';
import './ContactFrom.css';

var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;

const ContactFrom = () => {
  return (
    <div className='ContactFromContainer' style={{ height: height * 0.6 }}>
      <div className='ContactFromContainer' style={{ height: height * 0.4 }}>
        <input
          className='ContactFormInput'
          style={styles.inputStyle}
          placeholder='FULL NAME'
        />
        <input
          className='ContactFormInput'
          style={styles.inputStyle}
          placeholder='TELEPHONE NUMBER'
        />
        <input
          className='ContactFormInput'
          style={styles.inputStyle}
          placeholder='E-MAIL'
        />
        <textarea
          className='ContactFormInput'
          style={styles.textAreaStyle}
          placeholder='MESSAGE'
        />
      </div>
      <WideButton text={'CONTACT US'} onPress={() => console.log('tıklandı')} />
    </div>
  );
};

const styles = {
  inputStyle: {
    height: height * 0.05,
    width: width * 0.66,
    paddingLeft: width * 0.02,
    paddingRight: width * 0.02,
    fontFamily: 'PoppinsMedium',
    fontSize: globalStyles.h14,
  },
  textAreaStyle: {
    height: height * 0.15,
    width: width * 0.66,
    paddingTop: width * 0.02,
    paddingLeft: width * 0.02,
    paddingRight: width * 0.02,
    fontFamily: 'PoppinsMedium',
    fontSize: globalStyles.h14,
    resize: 'none',
  },
};

export default ContactFrom;
