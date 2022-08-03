import React, { useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import { globalStyles } from '../../assets/Styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DhiFue from '../../images/DhiFue.png';
import DhiFu2 from '../../images/DhiFue2.png';

var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;

export const DhiFueContent = () => {
  return (
    <div style={styles.subcontainer}>
      <img src={DhiFue} style={styles.imageStyle} alt='BeforeAfter' />
      <span style={styles.titleStyle}>{'FUE'}</span>
      <p style={styles.pStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
        lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Quis ipsum suspendisse ultrices gravida. Risus commod
      </p>
      <img src={DhiFu2} style={styles.imageStyle} alt='BeforeAfter' />
      <span style={styles.titleStyle}>{'DHI'}</span>
      <p style={styles.pStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
        lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Quis ipsum suspendisse ultrices gravida. Risus commod
      </p>
      <span style={styles.titleStyle}>{'FUE - DHI DIFFERENT'}</span>
      <p style={styles.pStyle}>
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

const DhiAndFue = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={styles.container}>
      <Header />
      <div style={styles.divider}></div>
      <DhiFueContent />
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
  divider: {
    marginTop: height * 0.27,
  },
  subcontainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  imageStyle: {
    width: '80%',
    objectFit: 'contain',
    marginBottom: height * 0.05,
  },
  titleStyle: {
    color: globalStyles.blackColor,
    fontFamily: 'PlayfairDisplayBold',
    fontSize: globalStyles.h60,
    marginBottom: height * 0.05,
  },
  pStyle: {
    fontFamily: 'PoppinsRegular',
    width: width * 0.8,
    color: globalStyles.blackColor,
    fontSize: globalStyles.h18,
    marginBottom: height * 0.1,
  },
};

export default DhiAndFue;
