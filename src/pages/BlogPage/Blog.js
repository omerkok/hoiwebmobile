import React, { useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { globalStyles } from '../../assets/Styles';
import BlogImage from '../../images/BlogImage.png';
import DhiFu2 from '../../images/DhiFue2.png';

var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;

export const BlogContent = () => {
  return (
    <div style={styles.blogContainer}>
      <img src={BlogImage} style={styles.blogImage} alt='BeforeAfter' />
      <span style={styles.blogTitle}>{'WOMAN HAIR PROBLEMS'}</span>
      <p
        style={{
          ...styles.blogP,
          marginBottom: height * 0.05,
        }}>
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
      <span style={styles.blogTitle}>{'IMPORTANT'}</span>
      <p
        style={{
          ...styles.blogP,
          marginBottom: height * 0.1,
        }}>
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
      <img src={BlogImage} style={styles.blogImage} alt='BeforeAfter' />
      <span style={styles.blogTitle}>{'RESULT'}</span>
      <p
        style={{
          ...styles.blogP,
          marginBottom: height * 0.05,
        }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
        lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <span style={styles.blogTitle}>{'SUGGESTIONS'}</span>
      <p
        style={{
          ...styles.blogP,
          marginBottom: height * 0.15,
        }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
        lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <span style={styles.blogLink}>{'CAUSES OF HAIR LOSS'}</span>
      <span style={styles.blogLink}>{'FIRST THREE MONTHS'}</span>
      <span style={styles.blogLink}>{'FIRST WASH'}</span>
      <span style={styles.blogLink}>{'DONOR AREA'}</span>
      <span style={styles.blogLink}>{'AFRO TYPE'}</span>
      <span style={styles.blogLink}>{'WOMAN HAIR TRANSPLANT'}</span>
      <span style={styles.blogLink}>{'BEFORE OPERATION'}</span>
      <span style={styles.blogLink}>{'NUTRITION AND HAIR'}</span>
      <span style={styles.blogMore}>{'MORE'}</span>
    </div>
  );
};

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={styles.container}>
      <Header />
      <div style={styles.divider}></div>
      <BlogContent />
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
  blogContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  blogTitle: {
    color: globalStyles.blackColor,
    fontFamily: 'PlayfairDisplayBold',
    fontSize: globalStyles.h35,
    marginBottom: height * 0.02,
    width: '50%',
  },
  blogP: {
    fontFamily: 'PoppinsRegular',
    width: width * 0.8,
    color: globalStyles.blackColor,
    fontSize: globalStyles.h18,
  },
  blogImage: {
    width: '80%',
    objectFit: 'contain',
    marginBottom: height * 0.05,
  },
  blogLink: {
    color: globalStyles.brownColor,
    fontFamily: 'PlayfairDisplayBold',
    fontSize: globalStyles.h35,
    textDecoration: 'underline',
    marginBottom: height * 0.07,
    width: '90%',
  },
  blogMore: {
    color: globalStyles.brownColor,
    fontFamily: 'PlayfairDisplayBold',
    fontSize: globalStyles.h35,
    textDecoration: 'underline',
    marginBottom: height * 0.15,
    width: '90%',
  },
};

export default Blog;
