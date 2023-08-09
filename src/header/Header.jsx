import React, { useEffect, useState } from 'react';

import { Button, IconButton } from '@mui/material';
import { Home, Menu, Search, Slideshow } from '@mui/icons-material';

import { useNavigate } from 'react-router-dom';

import { ReactComponent as Fire } from '../assests/fire-svgrepo-com.svg';
import { ReactComponent as School } from '../assests/icon--white.svg';
import logo from '../assests/logo--color-white.svg';

import classes from './Header.module.scss';
const Header = () => {
  const [displayGoToHome, setDisplayGoToHome] = useState(false);
  const [openSmallScreenMenu, setOpenSmallScreenMenu] = useState(false);

  useEffect(() => {
    if (window.location.pathname !== '/') {
      setDisplayGoToHome(true);
    }
  }, []);

  const nav = useNavigate();

  const handleGoToHomepage = () => {
    nav('/');
  };

  return (
    <div className={`${classes.header}`}>
      <div className={`${classes['header_content']}`}>
        <span className={`${classes['header_rightSide']}`}>
          <div
            className={`${classes['header_logo']}`}
            onClick={handleGoToHomepage}
          >
            <img
              className={`${classes['header_logo_img']}`}
              src={logo}
              alt="logo"
            />
          </div>
          <div className={`${classes['header_divider']}`} />
          <IconButton
            className={`${classes['header_smallscreen_wrapper']}`}
            onClick={() => setOpenSmallScreenMenu(!openSmallScreenMenu)}
          >
            <Menu sx={{ color: 'white' }} />
            <ul
              className={`${classes['header_smallscreen_menu']}`}
              style={{
                transform: `scaleY(${openSmallScreenMenu ? '1' : '0'})`,
              }}
            >
              <li>
                {displayGoToHome && (
                  <Button
                    startIcon={
                      <Home
                        className={`${classes['header_fire_icon']}`}
                        sx={{ color: '#fdc13b' }}
                      />
                    }
                    className={`${classes['header_btn']}`}
                    onClick={handleGoToHomepage}
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'flex-start',
                    }}
                  >
                    صفحه اصلی
                  </Button>
                )}
              </li>
              <li>
                <a href="">
                  <Button
                    startIcon={
                      <Fire className={`${classes['header_fire_icon']}`} />
                    }
                    className={`${classes['header_btn']}`}
                  >
                    فیلیموتور
                  </Button>
                </a>
              </li>
              <li>
                <a href="">
                  <Button
                    startIcon={
                      <School className={`${classes['header_fire_icon']}`} />
                    }
                    className={`${classes['header_btn']}`}
                  >
                    فیلیمو مدرسه
                  </Button>
                </a>
              </li>
              <li>
                <a href="">
                  <Button
                    startIcon={
                      <Search
                        className={`${classes['header_fire_icon']}`}
                        sx={{ transform: 'scaleX(-1)' }}
                      />
                    }
                    className={`${classes['header_btn']}`}
                  >
                    جستجو
                  </Button>
                </a>
              </li>
            </ul>
          </IconButton>
          <ul className={`${classes['header_btn_wrapper']}`}>
            <li>
              {displayGoToHome && (
                <Button
                  startIcon={
                    <Home
                      className={`${classes['header_fire_icon']}`}
                      sx={{ color: '#fdc13b' }}
                    />
                  }
                  className={`${classes['header_btn']}`}
                  onClick={handleGoToHomepage}
                >
                  صفحه اصلی
                </Button>
              )}
            </li>
            <li>
              <a href="">
                <Button
                  startIcon={
                    <Fire className={`${classes['header_fire_icon']}`} />
                  }
                  className={`${classes['header_btn']}`}
                >
                  فیلیموتور
                </Button>
              </a>
            </li>
            <li>
              <a href="">
                <Button
                  startIcon={
                    <School className={`${classes['header_fire_icon']}`} />
                  }
                  className={`${classes['header_btn']}`}
                >
                  فیلیمو مدرسه
                </Button>
              </a>
            </li>
            <li>
              <a href="">
                <Button
                  startIcon={
                    <Search
                      className={`${classes['header_fire_icon']}`}
                      sx={{ transform: 'scaleX(-1)' }}
                    />
                  }
                  className={`${classes['header_btn']}`}
                >
                  جستجو
                </Button>
              </a>
            </li>
          </ul>
        </span>
        <span className={`${classes['header_leftSide']}`}>
          <Button
            variant="contained"
            className={`${classes['header_btn_left']} ${classes['header_btn_login']}`}
          >
            ورود
          </Button>
          <Button
            variant="contained"
            className={`${classes['header_btn_left']} ${classes['header_btn_subscribe']}`}
            endIcon={<Slideshow />}
          >
            خرید اشتراک فیلیمو
          </Button>
        </span>
      </div>
    </div>
  );
};

export default Header;
