import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import '../../../index.scss';

import 'react-loading-skeleton/dist/skeleton.css';
import {fetchTestData} from '../actions';

const BackendCriteria = ({
  filterOrderStatusData,
  toggleCriteriaFieldStatus,
  handleSideEffect,
  criteriaData,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTestData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(handleSideEffect()); //czy to potrzebne?
  }, [criteriaData]);

  const handleNameChange = (event, criteriaType) => {
    const value = event.target ? event.target.value : event.value;

    if (criteriaType) {
      const hasDependant = !!(
        criteriaData[criteriaType]?.dependant && criteriaData[criteriaType]?.dependant.length
      );
      if (hasDependant) {
        criteriaData[criteriaType]?.dependant?.map((dependant) => {
          dispatch(toggleCriteriaFieldStatus({type: dependant, value: value !== 'all'})); //czy to hasDependant potrzebne tylko by nie wyświetlać all?
        });
      }
    }

    dispatch(filterOrderStatusData({type: criteriaType, value}));
  };

  return (
    <div>
      <select
        onChange={(e) => {
          handleNameChange(criteriaData?.names[e.target.value]?.title, 'names');
        }}>
        <option value={'all'}>all</option>
        {criteriaData.names?.map((name) => (
          <option value={name} key={name}>
            {criteriaData?.names[name]?.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BackendCriteria;
