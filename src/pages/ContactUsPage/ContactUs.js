import React from 'react';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import {
  Menu,
  WhatsappOutlined,
  Instagram,
  FacebookOutlined,
  Twitter,
  YouTube,
  LinkedIn,
} from '@mui/icons-material';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../components/Footer/Footer.css';
import { globalStyles } from '../../assets/Styles';
import BeforeAfter2 from '../../images/BeforeAfter2.png';
import AboutUsBuild from '../../images/AboutUsBuild.png';
import logo from '../../images/HoiLogoTop.svg';
import WideButton from '../../components/WideButton';
import ContactFrom from '../../components/ContactFrom';
import BlogPost from '../../components/BlogPost';
import brazil from '../../images/brazil.svg';
import france from '../../images/france.svg';
import germany from '../../images/germany.svg';
import russia from '../../images/russia.svg';
import spain from '../../images/spain.svg';
import turkey from '../../images/turkey.svg';
import unitedKingdom from '../../images/united-kingdom.svg';
import unitedStates from '../../images/united-states.svg';
import '../../assets/Styles/PStyles.css';

var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;

const ContactUs = () => {
  return (
    <div style={styles.container}>
      <Header />
      <div style={styles.divider}></div>
      <div style={styles.subContainer}>
        <span style={styles.title}>{'CONTACT US'}</span>
        <IconButton style={styles.iconButton}>
          <WhatsappOutlined style={styles.icon} />
        </IconButton>
        <div style={styles.contentBack}>
          <div style={styles.blog}>
            <div style={styles.iconButton1}>
              <img src={unitedKingdom} style={styles.image} />
              <span style={styles.numberText}>{'+90 (530) 688 42 47'}</span>
            </div>
            <div style={styles.iconButton1}>
              <img src={unitedStates} style={styles.image} />
              <span style={styles.numberText}>{'+90 (530) 688 42 47'}</span>
            </div>
            <div style={styles.iconButton1}>
              <img src={germany} style={styles.image} />
              <span style={styles.numberText}>{'+90 (530) 688 42 47'}</span>
            </div>
            <div style={styles.iconButton1}>
              <img src={spain} style={styles.image} />
              <span style={styles.numberText}>{'+90 (530) 688 42 47'}</span>
            </div>
          </div>
          <div style={styles.blog}>
            <div style={styles.iconButton1}>
              <img src={russia} style={styles.image} />
              <span style={styles.numberText}>{'+90 (530) 688 42 47'}</span>
            </div>
            <div style={styles.iconButton1}>
              <img src={france} style={styles.image} />
              <span style={styles.numberText}>{'+90 (530) 688 42 47'}</span>
            </div>
            <div style={styles.iconButton1}>
              <img src={brazil} style={styles.image} />
              <span style={styles.numberText}>{'+90 (530) 688 42 47'}</span>
            </div>
            <div style={styles.iconButton1}>
              <img src={turkey} style={styles.image} />
              <span style={styles.numberText}>{'+90 (530) 688 42 47'}</span>
            </div>
          </div>
        </div>
        <div
          style={{
            ...styles.blog2,
            justifyContent: 'space-between',
          }}>
          <div style={styles.iconButton2}>
            <Instagram style={styles.icon2} />
            <span style={styles.numberText2}>{'hairofistanbul'}</span>
          </div>
          <div style={styles.iconButton2}>
            <FacebookOutlined style={styles.icon2} />
            <span style={styles.numberText2}>{'hairofistanbul'}</span>
          </div>
          <div style={styles.iconButton2}>
            <Twitter style={styles.icon2} />
            <span style={styles.numberText2}>{'hairofistanbul'}</span>
          </div>
        </div>
        <div
          style={{
            ...styles.blog2,
            justifyContent: 'center',
          }}>
          <div style={styles.iconButton2}>
            <YouTube style={styles.icon2} />
            <span style={styles.numberText2}>{'hairofistanbul'}</span>
          </div>
          <div style={styles.iconButton2}>
            <LinkedIn style={styles.icon2} />
            <span style={styles.numberText2}>{'hairofistanbul'}</span>
          </div>
        </div>
      </div>
      <Divider style={styles.divider2} />
      <ContactFrom />
      <Divider style={styles.divider2} />
      <Footer contact={false} />
    </div>
  );
};

export default ContactUs;

const styles = {
  icon: {
    height: width * 0.1,
    width: width * 0.1,
    color: globalStyles.whiteColor,
    backgroundColor: globalStyles.greenColor,
    borderRadius: width * 0.1,
    padding: width * 0.01,
  },
  iconButton: {
    height: width * 0.05,
    width: width * 0.05,
  },
  icon2: {
    height: width * 0.05,
    width: width * 0.05,
    color: globalStyles.whiteColor,
    backgroundColor: globalStyles.greenColor,
    borderRadius: width * 0.1,
    padding: width * 0.01,
    marginBottom: height * 0.01,
  },
  iconButton2: {
    width: '31%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  divider: {
    marginTop: height * 0.27,
  },
  divider2: {
    width: width,
    height: height * 0.05,
    backgroundColor: globalStyles.whiteDarkColor,
    border: 0,
  },
  subContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: height * 0.08,
  },
  title: {
    color: globalStyles.blackColor,
    fontFamily: 'PlayfairDisplayBold',
    fontSize: globalStyles.h35,
    marginBottom: height * 0.05,
  },
  contentBack: {
    marginTop: height * 0.05,
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10%',
    backgroundColor: globalStyles.greenOpacity3,
    marginBottom: height * 0.05,
  },
  blog: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  iconButton1: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height * 0.02,
  },
  image: {
    width: globalStyles.flagSize,
    height: globalStyles.flagSize,
    marginRight: 5,
  },
  numberText: {
    width: '80%',
    color: globalStyles.blackColor,
    fontFamily: 'PoppinsMedium',
    fontSize: globalStyles.h16,
    marginRight: 2,
  },
  numberText2: {
    width: '98%',
    color: globalStyles.blackColor,
    fontFamily: 'PoppinsMedium',
    fontSize: globalStyles.h16,
  },
  blog2: {
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    paddingTop: height * 0.02,
  },
};
