import React, { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';

import Header from '../header/Header';

import { ReactComponent as Quality } from '../assests/high-quality-svgrepo-com.svg';
import { ReactComponent as Director } from '../assests/director-chair-svgrepo-com.svg';
import { ReactComponent as Global } from '../assests/global-svgrepo-com.svg';
import { ReactComponent as Folder } from '../assests/folder-svgrepo-com.svg';
import { ReactComponent as Time } from '../assests/time-svgrepo-com.svg';

import classes from './MoviePage.module.scss';
const MoviePage = () => {
  const [data, setData] = useState('');
  const { state } = useLocation();

  useEffect(() => {
    setData(state[0]);
  }, [state]);
  console.log(data);

  return (
    <div
      className={`${classes.moviepage}`}
      style={{ backgroundImage: `url(${data?.cover})` }}
    >
      <Header />
      <section className={`${classes['moviepage_content']}`}>
        <div className={`${classes['moviepage_content_wrapper']}`}>
          <span className={`${classes['moviepage_img_wrapper']}`}>
            <img
              className={`${classes['moviepage_img']}`}
              src={data?.pic?.movie_img_b}
              alt=""
            />
            <button className={`${classes['moviepage_trailer_btn']}`}>
              پخش آنلاین
            </button>
          </span>
          <span className={`${classes['moviepage_details_wrapper']}`}>
            <h1>
              دانلود فیلم {data?.movie_title} ({data?.movie_title_en})
            </h1>

            <div className={`${classes['moviepage_point_wrapper']}`}>
              <p
                className={`${classes['moviepage_svg_container']}`}
                style={{
                  backgroundColor: `${
                    parseInt(data?.avg_rate_label) > 70 ? 'green' : 'red'
                  }`,
                  borderRadius: '5px',
                }}
              >
                {parseInt(data?.avg_rate_label)}%
              </p>
              &nbsp;
              <p>پیشنهاد شده</p>
            </div>

            <span className={`${classes['moviepage_details']}`}>
              <div className={`${classes['moviepage_detail']}`}>
                <span className={`${classes['moviepage_svg_container']}`}>
                  <Quality />
                </span>
                <p>کیفیت : &nbsp;</p>
                <p>{data?.HD === true ? 'HD' : 'webDl'}</p>
              </div>
              <div className={`${classes['moviepage_detail']}`}>
                <span className={`${classes['moviepage_svg_container']}`}>
                  <Folder />
                </span>
                <p>ژانر : &nbsp;</p>
                <p>{data && data?.categories[0]?.title}</p>
              </div>
              <div className={`${classes['moviepage_detail']}`}>
                <span className={`${classes['moviepage_svg_container']}`}>
                  <Director />
                </span>
                <p>کارگردان : &nbsp;</p>
                <p>{data && data?.director}</p>
              </div>
              <div className={`${classes['moviepage_detail']}`}>
                <span className={`${classes['moviepage_svg_container']}`}>
                  <Time />
                </span>
                <p>زمان : &nbsp;</p>
                <p>{data && data?.duration?.text}</p>
              </div>
              <div className={`${classes['moviepage_detail']}`}>
                <span className={`${classes['moviepage_svg_container']}`}>
                  <Global />
                </span>
                <p>ساخت : &nbsp;</p>
                <p>{data && data?.countries[0]?.country_en}</p>
              </div>
            </span>
            <span className={`${classes['moviepage_description']}`}>
              <p>{data?.descr}</p>
            </span>
          </span>
        </div>
      </section>
    </div>
  );
};

export default MoviePage;
