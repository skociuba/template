import {shared} from 'sharedConstants';
import isEmpty from 'lodash/isEmpty';
export const getMappedTestResponse = (response) => {
  const listCriteria = response?.payload?.listCriteria || [];
  const state = shared.backend;
  const mappedData = {};
  const mappedState = {};
  listCriteria.forEach((item) => {
    const key = item?.criteriaKey;
    const stateCriteriaItem = Object.keys(state).filter((filteringKey) => {
      return state[filteringKey].backendMappingKey === key;
    });
    if (shared.getDataFromBackendCriteriaKeys.includes(key)) {
      mappedData[key] = {
        ...(stateCriteriaItem.length && state[stateCriteriaItem[0]]),
        ...{
          backendMappingKey: key,
          items: item.items.map((nestedItem) => {
            return {
              key: nestedItem.itemKey,
              title: nestedItem.itemValue || nestedItem.itemKey,
              isSelected: false,
            };
          }),
        },
      };
    }
  });
  if (state) {
    Object.keys(state).forEach((criteriaKey) => {
      mappedState[criteriaKey] = {
        ...mappedState[criteriaKey],
        ...(shared.getDataFromBackendCriteriaKeys.includes(state[criteriaKey].backendMappingKey) &&
        !isEmpty(mappedData[state[criteriaKey].backendMappingKey])
          ? mappedData[state[criteriaKey].backendMappingKey]
          : state[criteriaKey]),
      };
    });
  }
  return mappedState;
};
