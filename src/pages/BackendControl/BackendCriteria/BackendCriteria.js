import React, {useEffect} from 'react';
import Button from '@material/react-button';
import {useDispatch} from 'react-redux';
import '../../../index.scss';
import Multiselect from 'multiselect-react-dropdown';

import 'react-loading-skeleton/dist/skeleton.css';
import {fetchTestData} from '../actions';

const BackendCriteria = ({filterData, toggleData, handleSideEffect, criteriaData, resetData}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTestData());
  }, [dispatch]);

  const handleCriteriaSearch = (event, criteriaType) => {
    const value = event.target ? event.target.value : event.value ? event.value : event;
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
      <Button onClick={handleSideEffect}>search</Button>
      <p />
      <select
        onChange={(e) => {
          handleCriteriaSearch(e, 'mappedDataOne');
        }}>
        <option value={'all'}>all</option>
        {criteriaData.mappedDataOne?.items?.map((item) => (
          <option value={item.key} key={item.key}>
            {item.title}
          </option>
        ))}
      </select>
      <p />
      <Multiselect
        value={
          criteriaData.mappedDataTwo?.items
            ?.filter(({isSelected}) => isSelected === true)
            ?.map((item) => ({value: item.key, label: item.title})) || []
        }
        options={criteriaData?.mappedDataTwo?.items?.map((item) => item)}
        onSelect={(e) => {
          handleCriteriaSearch(e, 'mappedDataTwo');
        }}
        showCheckbox={true}
        placeholder="All"
        displayValue="title"
        onRemove={(e) => {
          handleCriteriaSearch(e, 'mappedDataTwo');
        }}
      />
      {/* <select
        multiple={true}
        value={
          criteriaData.mappedDataTwo?.items
            ?.filter(({isSelected}) => isSelected === true)
            ?.map((item) => ({value: item.key, label: item.title})) || []
        }
        onChange={(e) => {
          handleCriteriaSearch(e, 'mappedDataTwo');
        }}>
        <option value={'all'}>all</option>
        {criteriaData.mappedDataTwo?.items?.map((item) => (
          <option value={item.key} key={item.key}>
            {item.title}
          </option>
        ))}
      </select> */}
      <p />
      <input
        value={criteriaData?.input?.value}
        onChange={(e) => {
          handleCriteriaSearch({value: e?.target?.value}, 'input');
        }}
        onKeyDown={({key}) => {
          if (key === 'Enter') {
            handleSideEffect();
          }
        }}
      />
    </div>
  );
};

export default BackendCriteria;
