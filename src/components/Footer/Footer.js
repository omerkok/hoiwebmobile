import React from 'react';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
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
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
  return (
    <div
      style={{
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
      }}>
      {' '}
      <span id='BeforeAfter' style={{ marginBottom: height * 0.02 }}>
        {'BEFORE & AFTER'}
      </span>
      <div id='ImageContainer' style={{ paddingBottom: height * 0.1 }}>
        <Swiper
          style={styles.swiper}
          autoplay={true}
          modules={[Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={pagination}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}>
          <SwiperSlide>
            <span style={styles.swiperTitle}>{'hair transplant'}</span>
            <img
              src={BeforeAfter2}
              style={styles.swiperImage}
              alt='BeforeAfter'
            />
          </SwiperSlide>
          <SwiperSlide>
            <span style={styles.swiperTitle}>{'afro type'}</span>
            <img
              src={BeforeAfter2}
              style={styles.swiperImage}
              alt='BeforeAfter'
            />
          </SwiperSlide>
          <SwiperSlide>
            <span style={styles.swiperTitle}>{'beard'}</span>
            <img
              src={BeforeAfter2}
              style={styles.swiperImage}
              alt='BeforeAfter'
            />
          </SwiperSlide>
          <SwiperSlide>
            <span style={styles.swiperTitle}>{'woman'}</span>
            <img
              src={BeforeAfter2}
              style={styles.swiperImage}
              alt='BeforeAfter'
            />
          </SwiperSlide>
        </Swiper>

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
  swiper: {
    width: width,
    height:
      height < 750
        ? height * 0.63
        : height > 870
        ? height * 0.63
        : height * 0.5,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  swiperTitle: {
    color: globalStyles.greyBlueColor,
    fontFamily: 'PoppinsBold',
    fontSize: globalStyles.h24,
    width: 'auto',
    display: 'inline-block',
    marginLeft: width * 0.2,
    marginRight: width * 0.2,
  },
  swiperImage: {
    width: '60%',
    objectFit: 'contain',
    marginBottom: '5%',
    marginTop: height * 0.02,
  },
};
