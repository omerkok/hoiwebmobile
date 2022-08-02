import React from 'react';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import WideButton from '../WideButton';
import ContactFrom from '../ContactFrom';
import BlogPost from '../BlogPost';
import { globalStyles } from '../../assets/Styles';
import './Footer.css';
import BeforeAfter2 from '../../images/BeforeAfter2.png';
import AboutUsBuild from '../../images/AboutUsBuild.png';
import logo from '../../images/HoiLogoTop.svg';
import '../../assets/Styles/PStyles.css';

var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;

const BeforeAfter = () => {
  return (
    <div
      style={{
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
      }}>
      {' '}
      <span id='BeforeAfter'>{'BEFORE & AFTER'}</span>
      <span id='HairTransparent'>{'hair transplant'}</span>
      <div id='ImageContainer' style={{ paddingBottom: height * 0.1 }}>
        <div
          style={{
            width: '100%',
            height: 'auto',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <div style={{ width: '15%', height: '80%', paddingRight: '10%' }}>
            <img
              id='Image1'
              src={BeforeAfter2}
              style={{
                width: '100%',
                height: '100%',
                opacity: 0.5,
                objectFit: 'cover',
              }}
              alt='BeforeAfter'
            />
          </div>
          <div style={{ width: '50%', height: '100%' }}>
            <img
              src={BeforeAfter2}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              alt='BeforeAfter'
            />
          </div>
          <div style={{ width: '15%', height: '80%', paddingLeft: '10%' }}>
            <img
              id='Image2'
              src={BeforeAfter2}
              style={{
                width: '100%',
                height: '100%',
                opacity: 0.5,
                objectFit: 'cover',
              }}
              alt='BeforeAfter'
            />
          </div>
        </div>

        <p className='line7' style={styles.pStyle1}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commod
        </p>
        <WideButton
          text='MORE RESULT'
          onPress={() => console.log('tıllandı')}
        />
      </div>
    </div>
  );
};

const Bottom = () => {
  return (
    <div className='FooterBottomContainer' style={styles.footerBottomContainer}>
      <IconButton style={styles.logoStyle}>
        <img src={logo} style={styles.logoStyle} alt='Hoi' />
      </IconButton>
      <p style={styles.pStyle2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida.
      </p>
    </div>
  );
};

const AboutUs = () => {
  return (
    <div className='gradientbackground'>
      <span style={styles.textStyle}>{'ABOUT US'}</span>
      <img src={AboutUsBuild} style={styles.imageStyle} alt='BeforeAfter' />
      <p className='line7' style={styles.pStyle3}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
        lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Quis ipsum suspendisse ultrices gravida. Risus commod
      </p>
      <WideButton text='ABOUT US' onPress={() => console.log('tıklandı')} />
    </div>
  );
};

const BottomMenu = () => {
  return (
    <div style={styles.bottomMenuContainer}>
      <div style={styles.bottomMenuSubContainer}>
        <Link href='#' underline='none' style={styles.link}>
          {'HAIR TRANSPLANTATION'}
        </Link>
        <Link href='#' underline='none' style={styles.link}>
          {'BEARD TRANSPLANTATION'}
        </Link>
        <Link href='#' underline='none' style={styles.link}>
          {'AFRO TYPE'}
        </Link>
        <Link href='#' underline='none' style={styles.link}>
          {'WOMAN TRANSPLANTATION'}
        </Link>
        <Link href='#' underline='none' style={styles.link}>
          {'EYEBROW'}
        </Link>
      </div>
      <div style={styles.bottomMenuSubContainer}>
        <Link href='#' underline='none' style={styles.link}>
          {'HAIR TRANSPLANTATION'}
        </Link>
        <Link href='#' underline='none' style={styles.link}>
          {'BEARD TRANSPLANTATION'}
        </Link>
        <Link href='#' underline='none' style={styles.link}>
          {'AFRO TYPE'}
        </Link>
        <Link href='#' underline='none' style={styles.link}>
          {'WOMAN TRANSPLANTATION'}
        </Link>
        <Link href='#' underline='none' style={styles.link}>
          {'EYEBROW'}
        </Link>
      </div>
    </div>
  );
};

const Footer = ({ contact = true }) => {
  return (
    <div className='FooterContainer'>
      <BeforeAfter />
      {contact && <ContactFrom />}
      <BlogPost />
      <AboutUs />
      <BottomMenu />
      <Bottom />
    </div>
  );
};

export default Footer;

const styles = {
  footerBottomContainer: {
    height: height * 0.4,
    width: width,
    backgroundColor: globalStyles.greenColor,
  },
  link: {
    fontFamily: 'PoppinsMedium',
    color: globalStyles.greenColor,
    fontSize: globalStyles.h18,
    alignItems: 'flex-start',
    textAlign: 'left',
  },
  pStyle1: {
    fontFamily: 'PoppinsRegular',
    width: '80%',
    color: globalStyles.blackColor,
    fontSize: globalStyles.h18,
  },
  pStyle2: {
    fontFamily: 'PoppinsLight',
    width: '80%',
    color: globalStyles.whiteColor,
    fontSize: globalStyles.h14,
  },
  pStyle3: {
    fontFamily: 'PoppinsRegular',
    width: '80%',
    color: globalStyles.blackColor,
    fontSize: globalStyles.h18,
    marginBottom: globalStyles.m5,
  },
  textStyle: {
    width: '80%',
    color: globalStyles.whiteColor,
    fontFamily: 'PoppinsBold',
    fontSize: globalStyles.h35,
    marginBottom: globalStyles.m5,
  },
  imageStyle: {
    width: '80%',
    objectFit: 'contain',
    marginBottom: globalStyles.m5,
  },
  bottomMenuContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: height * 0.3,
    marginBottom: globalStyles.m7,
  },
  bottomMenuSubContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    width: '40%',
    paddingRight: globalStyles.p3,
    height: height * 0.3,
  },
  logoStyle: {
    height: width * 0.22,
    width: width * 0.22,
  },
};
