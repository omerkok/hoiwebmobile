import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Menu,
  WhatsappOutlined,
  Instagram,
  FacebookOutlined,
  Twitter,
  YouTube,
  LinkedIn,
  Close,
} from '@mui/icons-material';
import PropTypes from 'prop-types';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import IconButton from '@mui/material/IconButton';
import HeaderMenu from '../HeaderMenu';
import { globalStyles } from '../../assets/Styles';
import './Header.css';
import logo from '../../images/HoiLogoTop.svg';

var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const Header = (props) => {
  let width = document.documentElement.clientWidth;
  let height = document.documentElement.clientHeight;
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <HideOnScroll {...props}>
        <div style={styles.container}>
          <div className='HeaderContainerTop' style={styles.headerContainerTop}>
            <IconButton style={styles.logoStyle}>
              <Link style={{ textDecoration: 'none' }} to={'/'}>
                <img src={logo} style={styles.logoStyle} alt='Hoi' />
              </Link>
            </IconButton>
            <div style={{ color: 'transparent', width: width * 0.24 }}></div>
            <IconButton
              style={styles.menuIconStyle}
              onClick={() => setOpenMenu(!openMenu)}>
              {!openMenu ? (
                <Menu
                  style={{
                    ...styles.menuIconStyle,
                    color: globalStyles.whiteColor,
                  }}
                />
              ) : (
                <Close
                  style={{
                    ...styles.menuIconStyle,
                    color: globalStyles.whiteColor,
                  }}
                />
              )}
            </IconButton>
            <div style={{ color: 'transparent', width: width * 0.1 }}></div>
          </div>
          <div
            className='HeaderContainerBottom'
            style={styles.headerContainerBottom}>
            <IconButton style={styles.iconButton}>
              <WhatsappOutlined style={styles.icon} />
            </IconButton>
            <IconButton style={styles.iconButton}>
              <Instagram style={styles.icon} />
            </IconButton>
            <IconButton style={styles.iconButton}>
              <FacebookOutlined style={styles.icon} />
            </IconButton>
            <IconButton style={styles.iconButton}>
              <Twitter style={styles.icon} />
            </IconButton>
            <IconButton style={styles.iconButton}>
              <YouTube style={styles.icon} />
            </IconButton>
            <IconButton style={styles.iconButton}>
              <LinkedIn style={styles.icon} />
            </IconButton>
          </div>
          {openMenu && <HeaderMenu />}
        </div>
      </HideOnScroll>
    </>
  );
};

export default Header;

const styles = {
  container: {
    height: height * 0.2,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    width: '100%',
    alignItems: 'center',
    marginBottom: globalStyles.m7,
    position: 'fixed',
    zIndex: 65,
  },
  icon: {
    height: width * 0.05,
    width: width * 0.05,
    color: globalStyles.greenColor,
    backgroundColor: globalStyles.whiteColor,
    borderRadius: width * 0.5,
    padding: width * 0.01,
  },
  iconButton: {
    height: width * 0.06,
    width: width * 0.06,
  },
  headerContainerBottom: {
    height: width * 0.14,
    alignItems: 'center',
    backgroundColor: globalStyles.greenColor,
    marginLeft: width * 0.05,
    width: width * 0.8,
    paddingRight: width * 0.05,
    paddingLeft: width * 0.05,
    borderBottomLeftRadius: width * 0.1,
    borderBottomRightRadius: width * 0.1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  headerContainerTop: {
    height: height * 0.15,
    justifyContent: 'center',
    backgroundColor: globalStyles.greenColor,
    width: width,
  },
  logoStyle: {
    height: width * 0.22,
    width: width * 0.22,
  },
  menuIconStyle: {
    height: width * 0.06,
    width: width * 0.06,
  },
};
