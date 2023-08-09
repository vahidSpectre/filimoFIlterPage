import React, { useState } from 'react';

import classes from './Movie.module.scss';
import { Skeleton, Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const Movie = (props) => {
  const [loadingCover, setLoadingCover] = useState(true);

  const nav = useNavigate();

  return (
    <Tooltip title={props.data.movie_title} followCursor>
      <div
        key={props.data.id}
        className={`${classes.movie}`}
        onClick={() => {
          nav(`/movie/${props.data.movie_title_en}`, { state: [props.data] });
        }}
      >
        <Skeleton
          className={`${classes['movie_cover_skeleton']}`}
          variant="rectangular"
          animation="wave"
          style={{ display: `${loadingCover ? 'block' : 'none'}` }}
        />
        <img
          className={`${classes['movie_cover_image']}`}
          src={props.data.pic.movie_img_b}
          alt=""
          onLoad={() => {
            setLoadingCover(false);
          }}
          style={{ display: `${loadingCover ? 'none' : 'block'}` }}
        />
        <div className={`${classes['movie_details_container']}`}>
          <p className={`${classes['movie_details_name']}`}>
            {props.data.movie_title}
          </p>
          <p className={`${classes['movie_details_point']}`}>
            {props.data.rate_avrage} :امتیاز
          </p>
        </div>
      </div>
    </Tooltip>
  );
};

export default Movie;
