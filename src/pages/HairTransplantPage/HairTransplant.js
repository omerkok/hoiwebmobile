import React from 'react';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { globalStyles } from '../../assets/Styles';
import BeardTransplant from '../../images/BeardTransplant.png';
import Dsc1 from '../../images/Dsc1.png';
import DscCopy1 from '../../images/DscCopy1.png';
import DscCopy2 from '../../images/DscCopy2.png';
import DscCopy3 from '../../images/DscCopy3.png';
import '../../assets/Styles/PStyles.css';

var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;

export const WhoCan = () => {
  return (
    <div style={styles.whoCanContainer}>
      <div style={styles.whoCanSubcontainer}>
        <span style={styles.whoCanTitle}>
          {'WHO CAN HAVE A HAIR TRANSPLANT'}
        </span>
        <p style={styles.whocCanP}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida.
        </p>
      </div>
      <div style={styles.whoCanSubcontainer2}>
        <img
          src={BeardTransplant}
          style={styles.whoCanImage}
          alt='BeforeAfter'
        />
      </div>
    </div>
  );
};

export const DividerConst = () => {
  return <Divider style={styles.dividerConst} />;
};

export const Operations = () => {
  return (
    <div style={styles.operationsContainer}>
      <div style={styles.operationsSubcontainer}>
        {' '}
        <span style={styles.operationsTitle}>{'BEFORE OPERATION'}</span>
        <p style={styles.operationsSubTitle}>
          Hair transplants are suitable for both men and women of all
          ethnicities. <br /> <br /> Two factors are need to be considered for a
          hair transplant:
        </p>
      </div>
      <div style={styles.operationsDiv1}>
        <div style={styles.operationsDiv2}>
          <p style={styles.operationsP2}>
            1. There is enough healthy hair on your head to transplant to the
            place where hair is needed.
            <br /> <br /> 2. The capacity to develop hair in areas of your scalp
            that are thinning.
            <br /> <br /> You can find out whether you have both during a
            consultation. Professionals at Hair of Istanbul will examine your
            scalp thoroughly.
            <br /> <br /> A blood test may be required to determine the cause of
            your hair loss. This can help you figure out what's going on in your
            body and what's causing your hair loss..
          </p>
        </div>
        <div style={styles.operationsImageContainer}>
          <img src={Dsc1} style={styles.operationsImage} alt='BeforeAfter' />
        </div>
      </div>
      <div style={styles.operationsSubcontainer2}>
        <div style={styles.operationsSubcontainer3}>
          <img src={DscCopy3} style={styles.operationsImage} alt='Hoi' />
          <div style={styles.operationsTitleContainer2}>
            <span className='line2' style={styles.operationsTitle2}>
              {'ANALYSIS'}
            </span>
          </div>
          <span style={styles.operationsSubTitle2}>
            {'1. There is enough healthy hair on your head...'}
          </span>
        </div>
        <div style={styles.operationsSubcontainer3}>
          <img src={DscCopy2} style={styles.operationsImage} alt='Hoi' />
          <div style={styles.operationsTitleContainer2}>
            <span className='line2' style={styles.operationsTitle2}>
              {'DONOR AREA'}
            </span>
          </div>
          <span style={styles.operationsSubTitle2}>
            {'1. There is enough healthy hair on your head...'}
          </span>
        </div>
        <div style={styles.operationsSubcontainer3}>
          <img src={DscCopy3} style={styles.operationsImage} alt='Hoi' />
          <div style={styles.operationsTitleContainer2}>
            <span className='line2' style={styles.operationsTitle2}>
              {'GRAFT  SEPERATION '}
            </span>
          </div>
          <span style={styles.operationsSubTitle2}>
            {'1. There is enough healthy hair on your head...'}
          </span>
        </div>
      </div>
    </div>
  );
};

const HairTransplant = () => {
  return (
    <div style={styles.container}>
      <Header />
      <div style={styles.divider}></div>
      <WhoCan />
      <DividerConst />
      <Operations />
      <DividerConst />
      <Operations />
      <DividerConst />
      <Operations />
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
  whoCanContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  whoCanSubcontainer: {
    width: '40%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  whoCanSubcontainer2: {
    width: '40%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  whoCanTitle: {
    fontFamily: 'PoppinsBold',
    color: globalStyles.greenColor,
    fontSize: globalStyles.h30,
    textAlign: 'left',
  },
  whocCanP: {
    fontFamily: 'PoppinsRegular',
    color: globalStyles.blackColor,
    fontSize: globalStyles.h18,
    textAlign: 'left',
  },
  whoCanImage: {
    width: '115%',
    height: height * 0.5,
    objectFit: 'contain',
  },
  dividerConst: {
    width: width,
    height: height * 0.05,
    backgroundColor: globalStyles.whiteGreyColor,
    border: 0,
  },
  operationsContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: height * 0.03,
    paddingBottom: height * 0.05,
  },
  operationsSubcontainer: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  operationsTitle: {
    width: '100%',
    fontFamily: 'PoppinsBold',
    color: globalStyles.greenColor,
    fontSize: globalStyles.h30,
    textAlign: 'center',
  },
  operationsSubTitle: {
    width: '100%',
    fontFamily: 'PoppinsSemiBold',
    color: globalStyles.blackColor,
    fontSize: globalStyles.h18,
    textAlign: 'left',
  },
  operationsDiv1: {
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  operationsDiv2: {
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  operationsP2: {
    width: '100%',
    fontFamily: 'PoppinsRegular',
    color: globalStyles.blackColor,
    fontSize: globalStyles.h14,
    textAlign: 'left',
  },
  operationsImageContainer: {
    width: '35%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  operationsSubcontainer2: {
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginTop: height * 0.03,
  },
  operationsSubcontainer3: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '31%',
  },
  operationsImage: {
    width: '100%',
    objectFit: 'contain',
  },
  operationsTitleContainer2: {
    width: '100%',
    height: height * 0.08,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  operationsTitle2: {
    width: '100%',
    color: globalStyles.greenColor,
    fontFamily: 'PoppinsBold',
    fontSize: globalStyles.h18,
  },
  operationsSubTitle2: {
    width: '100%',
    color: globalStyles.blackDarkColor,
    fontFamily: 'PoppinsRegular',
    fontSize: globalStyles.h18,
  },
};

export default HairTransplant;
