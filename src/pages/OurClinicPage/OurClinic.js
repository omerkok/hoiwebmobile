import React from 'react';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { globalStyles } from '../../assets/Styles';
import OurClinicRender1 from '../../images/OurClinicRender1.png';
import Asset from '../../images/Asset.png';
import './OurClinic.css';

var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;

const OurClinic = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
  return (
    <div style={styles.container}>
      <Header />
      <div style={styles.divider}></div>
      <div style={styles.subcontainer}>
        <div style={styles.subcontainer2}>
          <span style={styles.title}>{'WELCOME TO'}</span>
          <span style={styles.title2}>{'HAIR OF ISTANBUL'}</span>
        </div>
        <img
          src={OurClinicRender1}
          style={{
            width: '80%',
            objectFit: 'contain',
            zIndex: 1,
          }}
          alt='BeforeAfter'
        />
        <Divider style={styles.divider2} />
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
            <span style={styles.swiperTitle}>
              <Divider style={styles.divider3} />
              {'KITCHEN'}
              <Divider style={styles.divider4} />
            </span>
            <img src={Asset} style={styles.swiperImage} alt='BeforeAfter' />
          </SwiperSlide>
          <SwiperSlide>
            <span style={styles.swiperTitle}>
              <Divider style={styles.divider3} />
              {'PHOTO ROOM'}
              <Divider style={styles.divider4} />
            </span>
            <img src={Asset} style={styles.swiperImage} alt='BeforeAfter' />
          </SwiperSlide>
          <SwiperSlide>
            <span style={styles.swiperTitle}>
              <Divider style={styles.divider3} />
              {'PHOTO ROOM'}
              <Divider style={styles.divider4} />
            </span>
            <img src={Asset} style={styles.swiperImage} alt='BeforeAfter' />
          </SwiperSlide>
          <SwiperSlide>
            <span style={styles.swiperTitle}>
              <Divider style={styles.divider3} />
              {'PHOTO ROOM'}
              <Divider style={styles.divider4} />
            </span>
            <img src={Asset} style={styles.swiperImage} alt='BeforeAfter' />
          </SwiperSlide>
        </Swiper>
        <Divider style={styles.divider5} />
        <span style={styles.enjoyTitle}>{"YOU'LL ENJOY"}</span>
        <p style={styles.enjoyP}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida.
        </p>
        <Divider style={styles.divider5} />
      </div>
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
    marginTop: height * 0.3,
  },
  divider2: {
    width: width,
    height: height * 0.1,
    backgroundColor: globalStyles.whiteColor,
    border: 0,
  },
  divider3: {
    width: 'auto',
    height: 2,
    backgroundColor: globalStyles.greenColor,
  },
  divider4: {
    height: 2,
    backgroundColor: globalStyles.greenColor,
  },
  divider5: {
    width: width,
    height: height * 0.05,
    backgroundColor: globalStyles.whiteColor,
    border: 0,
  },
  subcontainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  subcontainer2: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 2,
    marginBottom: -height * 0.08,
  },
  title: {
    color: globalStyles.greenColor,
    fontFamily: 'PlayfairDisplayRegular',
    fontSize: globalStyles.h30,
    width: '80%',
  },
  title2: {
    color: globalStyles.greenColor,
    fontFamily: 'PlayfairDisplayMedium',
    fontSize: globalStyles.h30,
    marginBottom: height * 0.02,
    width: '80%',
  },
  swiper: {
    width: width,
    height:
      height < 600
        ? height * 0.6
        : height < 750
        ? height * 0.5
        : height > 870
        ? height * 0.38
        : height * 0.39,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  swiperTitle: {
    color: globalStyles.greenColor,
    fontFamily: 'PlayfairDisplayMedium',
    fontSize: globalStyles.h24,
    width: 'auto',
    border: 2,
    borderColor: globalStyles.greenColor,
    display: 'inline-block',
    marginLeft: width * 0.1,
    marginRight: width * 0.1,
  },
  swiperImage: {
    width: '80%',
    objectFit: 'contain',
    marginBottom: '5%',
    marginTop: height * 0.02,
  },
  enjoyTitle: {
    color: globalStyles.blackColor,
    fontFamily: 'PlayfairDisplayBold',
    fontSize: globalStyles.h35,
    marginBottom: height * 0.02,
    width: '50%',
  },
  enjoyP: {
    fontFamily: 'PoppinsRegular',
    width: width * 0.8,
    color: globalStyles.blackColor,
    fontSize: globalStyles.h18,
    marginBottom: height * 0.05,
  },
};

export default OurClinic;
