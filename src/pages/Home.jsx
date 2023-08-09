import React from 'react';

import logo from '../assests/logo--color-white2.svg';
import star from '../assests/star.png';

import classes from './Home.module.scss';
import { useNavigate } from 'react-router-dom';
import Header from '../header/Header';
import { Button } from '@mui/material';
import { KeyboardBackspace } from '@mui/icons-material';
const Home = () => {
  const nav = useNavigate();
  const handleGoToFilters = () => {
    nav('/filters');
  };
  return (
    <div className={`${classes.home}`}>
      <Header />
      <div className={`${classes['home_overlay']}`}>
        <span>
          <img className={`${classes['home_logo']}`} src={logo} alt="" />
        </span>
        <span>
          <div className={`${classes['home_stars_wrapper']}`}>
            <span>
              <img
                className={`${classes['home_star_img']}`}
                src={star}
                alt=""
              />
            </span>
            <span>
              <img
                className={`${classes['home_star_img']}`}
                src={star}
                alt=""
              />
            </span>
            <span>
              <img
                className={`${classes['home_star_img']}`}
                src={star}
                alt=""
              />
            </span>
          </div>
          <p className={`${classes['home_welcome_text']}`}>
            به دنیای هزاران فیلم و سریال ایرانی و خارجی خوش اومدی
          </p>
          <div className={`${classes['home_stars_wrapper']}`}>
            <span>
              <img
                className={`${classes['home_star_img']}`}
                src={star}
                alt=""
              />
            </span>
            <span>
              <img
                className={`${classes['home_star_img']}`}
                src={star}
                alt=""
              />
            </span>
            <span>
              <img
                className={`${classes['home_star_img']}`}
                src={star}
                alt=""
              />
            </span>
          </div>
        </span>
        <span>
          <Button
            variant="contained"
            className={`${classes['home_filters_btn']}`}
            disableRipple
            startIcon={<KeyboardBackspace />}
            onClick={handleGoToFilters}
          >
            گشتی در فیلیمو
          </Button>
        </span>
      </div>
    </div>
  );
};

export default Home;
