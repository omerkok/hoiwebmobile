import React from 'react';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import { globalStyles } from '../../assets/Styles';

var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;

const Menu = () => {
  return (
    <div
      style={{
        width: width,
        height: height * 0.6,
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        position: 'absolute',
        top: height * 0.15,
        zIndex: 99,
      }}>
      <Link style={{ textDecoration: 'none' }} to={'/'}>
        <span style={styles.operationsTitle2}>{'HOME'}</span>
      </Link>
      <Divider style={styles.dividerConst} />
      <Link style={{ textDecoration: 'none' }} to={'/hairtransplant'}>
        <span style={styles.operationsTitle2}>{'HAIR TRANSPLANT'}</span>
      </Link>
      <Divider style={styles.dividerConst} />
      <Link style={{ textDecoration: 'none' }} to={'/hairtransplant'}>
        <span style={styles.operationsTitle2}>{'BEARD TRANSPLANT'}</span>
      </Link>
      <Divider style={styles.dividerConst} />
      <Link style={{ textDecoration: 'none' }} to={'/hairtransplant'}>
        <span style={styles.operationsTitle2}>{'WOMAN HAIR TRANSPLANT'}</span>
      </Link>
      <Divider style={styles.dividerConst} />
      <Link style={{ textDecoration: 'none' }} to={'/beforeafter'}>
        <span style={styles.operationsTitle2}>{'BEFORE & AFTER'}</span>
      </Link>
      <Divider style={styles.dividerConst} />
      <Link style={{ textDecoration: 'none' }} to={'/dhiandfue'}>
        <span style={styles.operationsTitle2}>{'FUE - DHI'}</span>
      </Link>
      <Divider style={styles.dividerConst} />
      <Link style={{ textDecoration: 'none' }} to={'/ourclinic'}>
        <span style={styles.operationsTitle2}>{'OUR CLINIC'}</span>
      </Link>
      <Divider style={styles.dividerConst} />
      <Link style={{ textDecoration: 'none' }} to={'/blog'}>
        <span style={styles.operationsTitle2}>{'BLOG'}</span>
      </Link>
      <Divider style={styles.dividerConst} />
      <Link style={{ textDecoration: 'none' }} to={'/aboutus'}>
        <span style={styles.operationsTitle2}>{'ABOUT US'}</span>
      </Link>
      <Divider style={styles.dividerConst} />
      <Link style={{ textDecoration: 'none' }} to={'/contactus'}>
        <span style={styles.operationsTitle2}>{'CONTACT US'}</span>
      </Link>
    </div>
  );
};

const styles = {
  operationsTitle2: {
    backgroundColor: 'transparent',
    width: '80%',
    color: globalStyles.greenColor,
    fontFamily: 'PoppinsBold',
    fontSize: globalStyles.h24,
  },
  dividerConst: {
    width: '80%',
    height: 1,
    backgroundColor: globalStyles.greenOpacity5,
    marginTop: height * 0.005,
    marginBottom: height * 0.005,
  },
};

export default Menu;
