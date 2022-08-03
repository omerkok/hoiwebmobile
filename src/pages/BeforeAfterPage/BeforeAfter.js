import React, { useEffect, useState } from 'react';
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
import WideButton from '../../components/WideButton';
import { globalStyles } from '../../assets/Styles';
import AfroType from '../../images/AfroType.svg';
import BeardTransplant from '../../images/BeardTransplant.svg';
import HairTransplant from '../../images/HairTransplant.svg';
import WomanHairTransplant from '../../images/WomanHairTransplant.svg';
import BeforeAfterKart1 from '../../images/BeforeAfterKart1.png';
import BeforeAfterKart2 from '../../images/BeforeAfterKart2.png';
import BeforeAfterKart3 from '../../images/BeforeAfterKart3.png';
import BeforeAfterKart4 from '../../images/BeforeAfterKart4.png';
import BeforeAfterModel1 from '../../images/BeforeAfterModel1.png';
import BeforeAfterModel2 from '../../images/BeforeAfterModel2.png';
import BeforeAfterModel3 from '../../images/BeforeAfterModel3.png';
import Asset from '../../images/Asset.png';
import './BeforeAfter.css';

var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;

var typeList = [
  {
    url: AfroType,
    Selected: true,
  },
  {
    url: BeardTransplant,
    Selected: false,
  },
  {
    url: HairTransplant,
    Selected: false,
  },
  {
    url: WomanHairTransplant,
    Selected: false,
  },
];

var peopleImageList1 = [
  {
    url: BeforeAfterKart1,
    Name: 'JOHHNY',
    Selected: true,
  },
  {
    url: BeforeAfterKart2,
    Name: 'AHMET',
    Selected: false,
  },
  {
    url: BeforeAfterKart3,
    Name: 'RICHARD',
    Selected: false,
  },
  {
    url: BeforeAfterKart4,
    Name: 'KANE',
    Selected: false,
  },
  {
    url: BeforeAfterKart1,
    Name: 'BALE',
    Selected: false,
  },
  {
    url: BeforeAfterKart2,
    Name: 'KEMAL',
    Selected: false,
  },
  {
    url: BeforeAfterKart3,
    Name: 'JAKE',
    Selected: false,
  },
  {
    url: BeforeAfterKart4,
    Name: 'JORDAN',
    Selected: false,
  },
];
var peopleImageList2 = [
  {
    url: BeforeAfterKart1,
    Name: 'JOHHNY',
    Selected: true,
  },
  {
    url: BeforeAfterKart2,
    Name: 'AHMET',
    Selected: false,
  },
  {
    url: BeforeAfterKart3,
    Name: 'RICHARD',
    Selected: false,
  },
  {
    url: BeforeAfterKart4,
    Name: 'KANE',
    Selected: false,
  },
  {
    url: BeforeAfterKart1,
    Name: 'BALE',
    Selected: false,
  },
  {
    url: BeforeAfterKart2,
    Name: 'KEMAL',
    Selected: false,
  },
  {
    url: BeforeAfterKart3,
    Name: 'JAKE',
    Selected: false,
  },
  {
    url: BeforeAfterKart4,
    Name: 'JORDAN',
    Selected: false,
  },
];
var peopleImageList3 = [
  {
    url: BeforeAfterKart1,
    Name: 'JOHHNY',
    Selected: true,
  },
  {
    url: BeforeAfterKart2,
    Name: 'AHMET',
    Selected: false,
  },
  {
    url: BeforeAfterKart3,
    Name: 'RICHARD',
    Selected: false,
  },
  {
    url: BeforeAfterKart4,
    Name: 'KANE',
    Selected: false,
  },
  {
    url: BeforeAfterKart1,
    Name: 'BALE',
    Selected: false,
  },
  {
    url: BeforeAfterKart2,
    Name: 'KEMAL',
    Selected: false,
  },
  {
    url: BeforeAfterKart3,
    Name: 'JAKE',
    Selected: false,
  },
  {
    url: BeforeAfterKart4,
    Name: 'JORDAN',
    Selected: false,
  },
];
var peopleImageList4 = [
  {
    url: BeforeAfterKart1,
    Name: 'JOHHNY',
    Selected: true,
  },
  {
    url: BeforeAfterKart2,
    Name: 'AHMET',
    Selected: false,
  },
  {
    url: BeforeAfterKart3,
    Name: 'RICHARD',
    Selected: false,
  },
  {
    url: BeforeAfterKart4,
    Name: 'KANE',
    Selected: false,
  },
  {
    url: BeforeAfterKart1,
    Name: 'BALE',
    Selected: false,
  },
  {
    url: BeforeAfterKart2,
    Name: 'KEMAL',
    Selected: false,
  },
  {
    url: BeforeAfterKart3,
    Name: 'JAKE',
    Selected: false,
  },
  {
    url: BeforeAfterKart4,
    Name: 'JORDAN',
    Selected: false,
  },
];

var peopleList = [
  {
    url: peopleImageList1,
    Selected: true,
  },
  {
    url: peopleImageList2,
    Selected: false,
  },
  {
    url: peopleImageList3,
    Selected: false,
  },
  {
    url: peopleImageList4,
    Selected: false,
  },
];

var carouselImageList1 = [
  {
    url: BeforeAfterModel1,
  },
  {
    url: BeforeAfterModel2,
  },
  {
    url: BeforeAfterModel3,
  },
  {
    url: BeforeAfterModel3,
  },
];
var carouselImageList2 = [
  {
    url: BeforeAfterModel1,
  },
  {
    url: BeforeAfterModel2,
  },
  {
    url: BeforeAfterModel3,
  },
  {
    url: BeforeAfterModel3,
  },
];
var carouselImageList3 = [
  {
    url: BeforeAfterModel1,
  },
  {
    url: BeforeAfterModel2,
  },
  {
    url: BeforeAfterModel3,
  },
  {
    url: BeforeAfterModel3,
  },
];
var carouselImageList4 = [
  {
    url: BeforeAfterModel1,
  },
  {
    url: BeforeAfterModel2,
  },
  {
    url: BeforeAfterModel3,
  },
  {
    url: BeforeAfterModel3,
  },
];

var carouselList = [
  {
    list: carouselImageList1,
    Selected: true,
  },
  {
    list: carouselImageList2,
    Selected: false,
  },
  {
    list: carouselImageList3,
    Selected: false,
  },
  {
    list: carouselImageList4,
    Selected: false,
  },
];

/*export const SelectType = () => {
  const [typeListState, setTypeListState] = useState(typeList);

  const changeSelected = (n) => {
    console.log('n', n)
    typeListState.find((x) => x.url === n.url).Selected = !n.Selected;
    console.log('typeListState', typeListState)
    setTypeListState(typeListState);
  };

  return (
   
  );
};*/

export const Carousel = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
  return (
    <div style={styles.carouselContainer}>
      <Swiper
        style={styles.swiperStyles}
        autoplay={true}
        modules={[Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={pagination}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}>
        <SwiperSlide>
          <span style={styles.swiperTitle}>{'HAIR TRANSPLANT'}</span>
          <img src={Asset} style={styles.swiperImage} alt='BeforeAfter' />
        </SwiperSlide>
        <SwiperSlide>
          <span style={styles.swiperTitle}>{'PHOTO ROOM'}</span>
          <img src={Asset} style={styles.swiperImage} alt='BeforeAfter' />
        </SwiperSlide>
        <SwiperSlide>
          <span style={styles.swiperTitle}>{'PHOTO ROOM'}</span>
          <img src={Asset} style={styles.swiperImage} alt='BeforeAfter' />
        </SwiperSlide>
        <SwiperSlide>
          <span style={styles.swiperTitle}>{'PHOTO ROOM'}</span>
          <img src={Asset} style={styles.swiperImage} alt='BeforeAfter' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export const SelectPeople = () => {
  return (
    <div style={styles.selectContainer}>
      <div style={styles.selectSubcontainer}>
        <IconButton style={styles.selectIconButton}>
          <img
            src={BeforeAfterKart1}
            style={styles.selectImage}
            alt='BeforeAfter'
          />
          <span style={styles.selectText}>{'JONNY'}</span>
        </IconButton>
        <IconButton style={styles.selectIconButton}>
          <img
            src={BeforeAfterKart2}
            style={styles.selectImage}
            alt='BeforeAfter'
          />
          <span style={styles.selectText}>{'AHMET'}</span>
        </IconButton>
        <IconButton style={styles.selectIconButton}>
          <img
            src={BeforeAfterKart3}
            style={styles.selectImage}
            alt='BeforeAfter'
          />
          <span style={styles.selectText}>{'RICHARD'}</span>
        </IconButton>
        <IconButton style={styles.selectIconButton}>
          <img
            src={BeforeAfterKart4}
            style={styles.selectImage}
            alt='BeforeAfter'
          />
          <span style={styles.selectText}>{'KANE'}</span>
        </IconButton>
        <IconButton style={styles.selectIconButton}>
          <img
            src={BeforeAfterKart1}
            style={styles.selectImage}
            alt='BeforeAfter'
          />
          <span style={styles.selectText}>{'JONNY'}</span>
        </IconButton>
        <IconButton style={styles.selectIconButton}>
          <img
            src={BeforeAfterKart2}
            style={{
              width: '100%',
              objectFit: 'contain',
              marginBottom: '5%',
              marginTop: height * 0.02,
              opacity: 0.5,
            }}
            alt='BeforeAfter'
          />
          <span style={styles.selectText}>{'AHMET'}</span>
        </IconButton>
        <IconButton style={styles.selectIconButton}>
          <img
            src={BeforeAfterKart3}
            style={styles.selectImage}
            alt='BeforeAfter'
          />
          <span style={styles.selectText}>{'RICHARD'}</span>
        </IconButton>
        <IconButton style={styles.selectIconButton}>
          <img
            src={BeforeAfterKart4}
            style={styles.selectImage}
            alt='BeforeAfter'
          />
          <span style={styles.selectText}>{'KANE'}</span>
        </IconButton>
      </div>
    </div>
  );
};

const BeforeAfter = () => {
  const [typeListState, setTypeListState] = useState(typeList);
  const changeSelected = (n) => {
    var temp = JSON.parse(JSON.stringify(typeListState));
    temp.map((n, i) => {
      n.Selected = false;
    });
    temp.find((x) => x.url === n.url).Selected = true;
    setTypeListState(temp);
  };

  return (
    <div style={styles.container}>
      <Header />
      <div style={styles.dividerStyle}></div>
      <div style={styles.typeSubContainer}>
        <div style={styles.typeSubContainer2}>
          {typeListState.map((n, i) => {
            return (
              <IconButton
                key={i}
                style={styles.typeIconButton}
                onClick={() => changeSelected(n)}>
                <img
                  src={n.url}
                  style={{
                    ...styles.typeImg,
                    width: n.Selected == true ? '100%' : '70%',
                    opacity: n.Selected == true ? 1 : 0.5,
                  }}
                  alt='Hoi'
                />
              </IconButton>
            );
          })}
        </div>
      </div>
      <Carousel />
      <SelectPeople />
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
    marginTop: height * 0.3,
  },
  typeSubContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: height * 0.02,
  },
  typeSubContainer2: {
    display: 'flex',
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height:
      width < 400
        ? height * 0.15
        : width <= 579
        ? height * 0.16
        : width >= 580
        ? height * 0.18
        : height * 0.15,
  },
  typeIconButton: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '24%',
  },
  typeImg: {
    marginBottom: height * 0.01,
    objectFit: 'contain',
  },
  selectContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: height * 0.05,
  },
  selectSubcontainer: {
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  selectIconButton: {
    width: '22%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  selectImage: {
    width: '100%',
    objectFit: 'contain',
    marginBottom: '5%',
    marginTop: height * 0.02,
  },
  selectText: {
    color: globalStyles.greenColor,
    fontFamily: 'PlayfairDisplayBold',
    fontSize: globalStyles.h16,
  },
  carouselContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: height * 0.05,
  },
  swiperStyles: {
    width: width,
    height:
      height < 750 ? height * 0.5 : height > 870 ? height * 0.5 : height * 0.39,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  swiperTitle: {
    color: globalStyles.blackColor,
    fontFamily: 'PlayfairDisplayBold',
    fontSize: globalStyles.h35,
    width: 'auto',
    marginLeft: width * 0.1,
    marginRight: width * 0.1,
  },
  swiperImage: {
    width: '80%',
    objectFit: 'contain',
    marginBottom: globalStyles.m5,
    marginTop: height * 0.02,
  },
};

export default BeforeAfter;
