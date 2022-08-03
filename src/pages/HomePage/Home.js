import React from 'react';
import IconButton from '@mui/material/IconButton';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import WideButton from '../../components/WideButton';
import { globalStyles } from '../../assets/Styles';
import Asset from '../../images/Asset.png';
import AfroType from '../../images/AfroType.svg';
import BeardTransplant from '../../images/BeardTransplant.svg';
import HairTransplant from '../../images/HairTransplant.svg';
import WomanHairTransplant from '../../images/WomanHairTransplant.svg';
import HomePageBg from '../../images/HomePageBg.svg';
import './Home.css';

var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;

const OurClinicContent = () => {
  return (
    <div style={styles.ourClinicContainer}>
      <span style={styles.titleStyle}>{'OUR CLINIC'}</span>
      <img src={Asset} style={styles.imageStyle} alt='BeforeAfter' />
      <p style={styles.pStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
        lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Quis ipsum suspendisse ultrices gravida. Risus commod
      </p>
      <WideButton text='MORE' onPress={() => console.log('tıklandı')} />
    </div>
  );
};

const TypeHair = () => {
  return (
    <div className='typeHair' style={styles.typeContainer}>
      <div style={styles.typeSubcontainer}>
        <IconButton
          style={styles.typeIconButton}
          onClick={() => console.log('tıklandı')}>
          <img src={HairTransplant} style={styles.typeImage} alt='Hoi' />
          <span style={styles.typeImageTitle}>{'HAIR'}</span>
        </IconButton>
        <div
          style={{
            height: height * 0.03,
            width: '50%',
          }}>
          {''}
        </div>
        <IconButton
          style={styles.typeIconButton}
          onClick={() => console.log('tıklandı')}>
          <img src={BeardTransplant} style={styles.typeImage} alt='Hoi' />
          <span style={styles.typeImageTitle}>{'BEARD'}</span>
        </IconButton>
      </div>
      <div style={styles.typeSubcontainer}>
        <IconButton
          style={styles.typeIconButton}
          onClick={() => console.log('tıklandı')}>
          <img src={AfroType} style={styles.typeImage} alt='Hoi' />
          <span style={styles.typeImageTitle}>{'AFRO-TYPE'}</span>
        </IconButton>
        <div
          style={{
            height: height * 0.03,
            width: '50%',
          }}>
          {''}
        </div>
        <IconButton
          style={styles.typeIconButton}
          onClick={() => console.log('tıklandı')}>
          <img src={WomanHairTransplant} style={styles.typeImage} alt='Hoi' />
          <span style={styles.typeImageTitle}>{'WOMAN'}</span>
        </IconButton>
      </div>
    </div>
  );
};

export const Stages = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
  return (
    <div style={styles.stagesContainer}>
      <span style={styles.stagesTitle}>{'STAGES'}</span>
      <Swiper
        style={styles.stagesSwiper}
        autoplay={true}
        modules={[Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={pagination}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}>
        <SwiperSlide style={{}}>
          <img src={Asset} style={styles.stagesImage} alt='BeforeAfter' />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <img src={Asset} style={styles.stagesImage} alt='BeforeAfter' />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <img src={Asset} style={styles.stagesImage} alt='BeforeAfter' />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <img src={Asset} style={styles.stagesImage} alt='BeforeAfter' />
        </SwiperSlide>
      </Swiper>
      <p style={styles.stagesP}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
        lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Quis ipsum suspendisse ultrices gravida. Risus commod
      </p>
      <WideButton text='MORE' onPress={() => console.log('tıklandı')} />
    </div>
  );
};

const Home = () => {
  return (
    <div style={styles.container}>
      <Header />
      <div style={styles.divider}></div>
      <img src={HomePageBg} style={styles.backgroundImage1} />
      <img src={HomePageBg} style={styles.backgroundImage2} />
      <TypeHair />
      <Stages />
      <OurClinicContent />
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    width: width,
    height: height,
    display: 'flex',
    flexDirection: 'column',
  },
  divider: {
    marginTop: height * 0.27,
  },
  ourClinicContainer: {
    backgroundColor: globalStyles.whiteGreyColor,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '5%',
    paddingTop: '7%',
    paddingBottom: '7%',
  },
  titleStyle: {
    color: globalStyles.blackColor,
    fontFamily: 'PoppinsBold',
    fontSize: globalStyles.h35,
    marginBottom: '5%',
  },
  imageStyle: {
    width: '80%',
    objectFit: 'contain',
    marginBottom: '5%',
  },
  pStyle: {
    fontFamily: 'PoppinsRegular',
    width: width * 0.8,
    color: globalStyles.blackColor,
    fontSize: globalStyles.h18,
    marginBottom: '5%',
  },
  typeContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: height * 0.5,
    marginBottom: '7%',
  },
  typeSubcontainer: {
    display: 'flex',
    width: '35%',
    height: height * 0.5,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  typeIconButton: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '40%',
    width: '100%',
  },
  typeImage: {
    height: width * 0.12,
    width: width * 0.12,
    marginBottom: height * 0.01,
  },
  typeImageTitle: {
    color: globalStyles.greyColor,
    fontFamily: 'PoppinsSemiBold',
    fontSize: globalStyles.h20,
  },
  stagesContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: height * 0.05,
  },
  stagesTitle: {
    color: globalStyles.blackColor,
    fontFamily: 'PoppinsBold',
    fontSize: globalStyles.h35,
    marginBottom: height * 0.05,
  },
  stagesSwiper: {
    width: width,
    height:
      height < 600
        ? height * 0.42
        : height < 750
        ? height * 0.4
        : height > 870
        ? height * 0.34
        : height * 0.35,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  stagesImage: {
    width: '80%',
    objectFit: 'contain',
    marginBottom: '5%',
  },
  stagesP: {
    fontFamily: 'PoppinsRegular',
    width: width * 0.8,
    color: globalStyles.blackColor,
    fontSize: globalStyles.h18,
    marginBottom: '5%',
  },
  backgroundImage1: {
    opacity: 0.2,
    height: height * 1.5,
    width: '100%',
    objectFit: 'cover',
    position: 'absolute',
    objectPosition: width > 599 ? `5% 60%` : `15% 60%`,
  },
  backgroundImage2: {
    opacity: 0.2,
    height: height * 1.5,
    width: '100%',
    objectFit: 'cover',
    position: 'absolute',
    objectPosition: width > 599 ? `110% 60%` : `90% 60%`,
  },
};

export default Home;
