import React, { useEffect, useRef, useState } from 'react';

import { useSearchParams } from 'react-router-dom';
import Header from '../header/Header';

import data from '../data/assignment.json';

import classes from './Filters.module.scss';
import Movie from '../components/Movie';
import { Input, InputAdornment } from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

const Filters = () => {
  const [params, setParams] = useSearchParams();
  const [sortedData, setSortedData] = useState([]);
  const [filters, setFilters] = useState([]);
  const [counter, setCounter] = useState(0);
  const [openSortTab, setOpenSortTab] = useState(false);
  const [openFilterstab, setopenFilterstab] = useState(false);
  const [sortParams, setSortParams] = useState('');

  const filtersContainer = useRef();

  useEffect(() => {
    setSortedData(data);
    setFilters(params.getAll('filters'));
  }, []);

  const hightToLowSort = (a, b) => {
    if (a.rate_avrage > b.rate_avrage) {
      return -1;
    }
    if (a.rate_avrage < b.rate_avrage) {
      return 1;
    } else return 0;
  };

  const lowToHighSort = (a, b) => {
    if (a.rate_avrage > b.rate_avrage) {
      return 1;
    }
    if (a.rate_avrage < b.rate_avrage) {
      return -1;
    } else return 0;
  };

  const handleSortData = (e) => {
    setOpenSortTab(false);
    if (e.target.id === 'bot') {
      setParams({ sort: 'bot', filters: filters });
    }
    if (e.target.id === 'top') {
      setParams({ sort: 'top', filters: filters });
    }
  };

  const handleUpdateFilters = (e) => {
    setCounter(1);
    if (e.target.checked) {
      setFilters((filter) => [...filter, e.target.id]);
    }

    if (!e.target.checked) {
      setFilters(filters.filter((elem) => elem !== e.target.id));
    }
  };

  useEffect(() => {
    if (counter > 0) {
      setParams({ sort: params.get('sort'), filters: filters });
    }
  }, [filters, counter]);

  // drama action comedy horror
  useEffect(() => {
    let filteredData = [];
    let paramFilters = params.getAll('filters');
    setSortedData([]);
    setSortParams(params?.get('sort')?.toString());

    if (paramFilters.length > 0) {
      data.map((elem) => {
        paramFilters.map((filter) => {
          if (elem.categories[0].title_en === filter) {
            filteredData.push(elem);
          }
        });
      });
    }

    if (paramFilters.length <= 0 || paramFilters[0] === 'null') {
      filteredData = data;
    }

    if (params.get('sort') === 'top') {
      let tempData = [];
      tempData.push(...filteredData.sort(hightToLowSort));
      setSortedData(tempData);
    }
    if (params.get('sort') === 'bot') {
      let tempData = [];
      tempData.push(...filteredData.sort(lowToHighSort));
      setSortedData(tempData);
    } else setSortedData(filteredData);
  }, [params]);

  document.addEventListener('click', (e) => {
    if (
      filtersContainer.current &&
      !filtersContainer.current.contains(e.target)
    ) {
      setopenFilterstab(false);
    }
  });

  return (
    <div className={`${classes.filters}`}>
      <Header />

      <section className={`${classes['filters_content_container']}`}>
        <div className={`${classes['filters_content_container_backdrop']}`}>
          <section className={`${classes['filters_options_wrapper']}`}>
            <div
              className={`${classes['filters_filter_col_con']}`}
              ref={filtersContainer}
            >
              <Input
                type="text"
                readOnly
                value={
                  params?.getAll('filters')?.length === 0
                    ? 'همه ژانرها'
                    : params?.getAll('filters')?.toString().split(',')
                }
                className={`${classes['filters_input_show-state']}`}
                startAdornment={
                  <InputAdornment position="start">
                    {openFilterstab ? (
                      <KeyboardArrowUp
                        sx={{ margin: '0 .5rem', color: 'white' }}
                      />
                    ) : (
                      <KeyboardArrowDown
                        sx={{ margin: '0 .5rem', color: 'white' }}
                      />
                    )}
                  </InputAdornment>
                }
                inputProps={{ style: { cursor: 'pointer', color: 'white' } }}
                disableUnderline
                onClick={() => setopenFilterstab(!openFilterstab)}
              />
              <div
                className={`${classes['filters_filter_container']}`}
                style={{ transform: `scaleY(${openFilterstab ? '1' : '0'})` }}
              >
                <span className={`${classes['filters_t_rapper']}`}>
                  <div className={`${classes['filters_sort_item']}`}>
                    <input
                      type="checkbox"
                      id="action"
                      onChange={handleUpdateFilters}
                      name="action"
                      checked={params
                        ?.getAll('filters')
                        .toString()
                        .includes('action')}
                      className={`${classes['filters_input_checkbox']}`}
                    />
                    <label
                      className={`${classes['filters_sort_label']}`}
                      htmlFor="action"
                    >
                      اکشن
                      <div
                        className={`${classes['filters_sort_checkbox']}`}
                      ></div>
                    </label>
                  </div>
                  <div className={`${classes['filters_sort_item']}`}>
                    <input
                      type="checkbox"
                      id="drama"
                      onChange={handleUpdateFilters}
                      name="drama"
                      checked={params
                        ?.getAll('filters')
                        .toString()
                        .includes('drama')}
                      className={`${classes['filters_input_checkbox']}`}
                    />
                    <label
                      className={`${classes['filters_sort_label']}`}
                      htmlFor="drama"
                    >
                      درام
                      <div
                        className={`${classes['filters_sort_checkbox']}`}
                      ></div>
                    </label>
                  </div>
                </span>
                <span className={`${classes['filters_t_rapper']}`}>
                  <div className={`${classes['filters_sort_item']}`}>
                    <input
                      type="checkbox"
                      id="comedy"
                      onChange={handleUpdateFilters}
                      name="comedy"
                      checked={params
                        ?.getAll('filters')
                        .toString()
                        .includes('comedy')}
                      className={`${classes['filters_input_checkbox']}`}
                    />
                    <label
                      className={`${classes['filters_sort_label']}`}
                      htmlFor="comedy"
                    >
                      کمدی
                      <div
                        className={`${classes['filters_sort_checkbox']}`}
                      ></div>
                    </label>
                  </div>
                  <div className={`${classes['filters_sort_item']}`}>
                    <input
                      type="checkbox"
                      id="horror"
                      onChange={handleUpdateFilters}
                      name="horror"
                      checked={params
                        ?.getAll('filters')
                        .toString()
                        .includes('horror')}
                      className={`${classes['filters_input_checkbox']}`}
                    />
                    <label
                      className={`${classes['filters_sort_label']}`}
                      htmlFor="horror"
                    >
                      ترسناک
                      <div
                        className={`${classes['filters_sort_checkbox']}`}
                      ></div>
                    </label>
                  </div>
                </span>
              </div>
            </div>

            <div className={`${classes['filters_filter_col_con']}`}>
              <Input
                type="text"
                readOnly
                value={
                  sortParams && sortParams !== 'null'
                    ? sortParams === 'top'
                      ? 'بالا ترین امتیاز'
                      : 'پایین ترین امتیاز'
                    : 'مرتب سازی بر اساس امتیاز'
                }
                className={`${classes['filters_input_show-state']}`}
                startAdornment={
                  <InputAdornment position="start">
                    {openSortTab ? (
                      <KeyboardArrowUp
                        sx={{ margin: '0 .5rem', color: 'white' }}
                      />
                    ) : (
                      <KeyboardArrowDown
                        sx={{ margin: '0 .5rem', color: 'white' }}
                      />
                    )}
                  </InputAdornment>
                }
                inputProps={{ style: { cursor: 'pointer', color: 'white' } }}
                disableUnderline
                onClick={() => setOpenSortTab(!openSortTab)}
              />
              <div
                className={`${classes['filters_seq_container']}`}
                style={{ transform: `scaleY(${openSortTab ? '1' : '0'})` }}
              >
                <div className={`${classes['filters_sort_item']}`}>
                  <input
                    type="radio"
                    id="top"
                    name="seq"
                    onChange={handleSortData}
                    checked={params.get('sort') === 'top'}
                    className={`${classes['filters_input_checkbox']}`}
                  />
                  <label
                    className={`${classes['filters_sort_label']}`}
                    htmlFor="top"
                  >
                    بالا ترین امتیاز
                    <div
                      className={`${classes['filters_sort_checkbox']}`}
                    ></div>
                  </label>
                </div>
                <div className={`${classes['filters_sort_item']}`}>
                  <input
                    type="radio"
                    id="bot"
                    name="seq"
                    onChange={handleSortData}
                    checked={params.get('sort') === 'bot'}
                    className={`${classes['filters_input_checkbox']}`}
                  />
                  <label
                    className={`${classes['filters_sort_label']}`}
                    htmlFor="bot"
                  >
                    پایین ترین امتیاز
                    <div
                      className={`${classes['filters_sort_checkbox']}`}
                    ></div>
                  </label>
                </div>
              </div>
            </div>
          </section>
          <p className={`${classes['filters_title']}`}>
            لیست تمام فیلم ها و سریال ها
          </p>
          <section className={`${classes['filters_content']}`}>
            {sortedData.map((elem) => {
              return <Movie data={elem} key={elem.id} />;
            })}
          </section>
        </div>
      </section>
    </div>
  );
};

export default Filters;
