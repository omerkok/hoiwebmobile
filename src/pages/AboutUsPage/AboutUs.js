import React from 'react';
import IconButton from '@mui/material/IconButton';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import WideButton from '../../components/WideButton';
import { globalStyles } from '../../assets/Styles';
import HoiIcon from '../../images/HoiIcon.svg';
import HoiMan from '../../images/HoiMan.svg';
import Pers from '../../images/Pers.png';
import HomePageBg from '../../images/HomePageBg.svg';
import BgMobile2 from '../../images/BgMobile2.svg';

var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;

export const AboutUsContent = () => {
  return (
    <div style={styles.subContainer}>
      <img
        src={HoiIcon}
        style={{
          ...styles.logoStyle,
          marginTop: height * 0.05,
        }}
        alt='Hoi'
      />
      <img src={HoiMan} style={styles.logoStyle} alt='Hoi' />
      <span style={styles.title}>{'ABOUT US'}</span>
      <p
        className='demo-1'
        style={{
          ...styles.pStyle,
          marginBottom: height * 0.05,
        }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
        lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Quis ipsum suspendisse ultrices gravida. Risus commodLorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
        gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodLorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
        commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
        gravida. Risus commod
      </p>
      <img src={Pers} style={styles.imgStyle} />
      <p
        style={{
          ...styles.pStyle,
          marginBottom: height * 0.1,
        }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
        lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Quis ipsum suspendisse ultrices gravida. Risus commodLorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
        gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodLorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
        commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
        gravida. Risus commod
      </p>
    </div>
  );
};

const AboutUs = () => {
  return (
    <div style={styles.container}>
      <Header />
      <div style={styles.dividerStyle}></div>
      <img src={BgMobile2} style={styles.backgroundImage1} />
      <AboutUsContent />
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  dividerStyle: {
    marginTop: height * 0.25,
  },
  subContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  pStyle: {
    fontFamily: 'PoppinsRegular',
    width: width * 0.8,
    color: globalStyles.blackColor,
    fontSize: globalStyles.h18,
  },
  title: {
    color: globalStyles.blackColor,
    fontFamily: 'PlayfairDisplayBold',
    fontSize: globalStyles.h35,
    marginBottom: height * 0.02,
    width: '50%',
  },
  imgStyle: {
    width: '80%',
    objectFit: 'contain',
    marginBottom: height * 0.05,
  },
  logoStyle: {
    height: width * 0.45,
    width: width * 0.45,
    marginBottom: height * 0.05,
  },
  backgroundImage1: {
    opacity: 0.2,
    height: '450%',
    width: '100%',
    objectFit: 'cover',
    position: 'absolute',
    zIndex: -1,
  },
};

export default AboutUs;
