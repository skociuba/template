import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import '../../../index.scss';

import 'react-loading-skeleton/dist/skeleton.css';
import {fetchTestData} from '../actions';

const BackendCriteria = ({filterData, toggleData, handleSideEffect, criteriaData, resetData}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTestData());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(handleSideEffect()); //czy to potrzebne?
  // }, [criteriaData]);

  const handleNameChange = (event, criteriaType) => {
    const value = event.target ? event.target.value : event.value;
    if (criteriaType) {
      const hasDependant = !!(
        criteriaData[criteriaType]?.dependant && criteriaData[criteriaType]?.dependant.length
      );
      if (hasDependant) {
        criteriaData[criteriaType]?.dependant?.map((dependant) => {
          dispatch(toggleData({type: dependant, value: value !== 'all'})); //czy to hasDependant potrzebne tylko by nie wyświetlać all?
        });
      }
    }

    dispatch(filterData({type: criteriaType, value}));
  };

  return (
    <div>
      <select
        onChange={(e) => {
          handleNameChange(e, 'EXAMPLE1');
        }}>
        {criteriaData.mappedDataOne?.items?.map((item) => (
          <option value={item.key} key={item.key}>
            {item.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BackendCriteria;
