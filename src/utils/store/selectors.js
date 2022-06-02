import {shared} from 'sharedConstants';

const {defaultDetailedCriteria, backend} = shared;

export const getCriteriaValue = (value) => {
  if (Object.getOwnPropertyDescriptor(value, 'criteriaValue')) {
    return value?.criteriaValue;
  } else if (Object.getOwnPropertyDescriptor(value, 'value')) {
    return value?.value;
  }
  return value?.items?.filter((nestedCriteriaItem) => nestedCriteriaItem?.isSelected);
};

export const getMultipleCriteria = (state) =>
  Object.keys(backend).map((criteriaKey) => ({
    criteriaKey: state[criteriaKey]?.backendMappingKey,
    criteriaValue: getCriteriaValue(state[criteriaKey]),
    operator: state[criteriaKey]?.operator,
    type: state[criteriaKey]?.type,
    isSelected: state[criteriaKey]?.value,
    dependant: state[criteriaKey]?.dependant,
    criteriaSharedName: criteriaKey,
  }));
export const getAllDependantItemsData = (state, multipleCriteria) => {
  const allDependantItemsData = {};

  if (!state || !multipleCriteria?.length) {
    return allDependantItemsData;
  }

  const dependantItems = multipleCriteria.filter(
    (criteria) => criteria.dependant && criteria.dependant.length,
  );
  if (!dependantItems?.length) {
    return allDependantItemsData;
  }

  dependantItems.forEach((dependantItem) => {
    const getSelectedItem = state[dependantItem.criteriaSharedName]?.items?.filter(
      (item) => item.isSelected,
    );
    if (getSelectedItem?.length) {
      allDependantItemsData[dependantItem?.dependant[0]] = {
        value: getSelectedItem[0].key,
      };
    }
  });
  return allDependantItemsData;
};

export const getDetailedCriteria = (criteria, allDependantItemsData) => {
  const CRITERIA_TYPE = {
    DETAILED: 'detailed',
    LIST: 'list',
    RANGE: 'range',
  };
  const detailedCriteria = [...defaultDetailedCriteria];
  const rangeCriteria = [];

  if (!criteria?.length) {
    return {
      detailedCriteria,
      rangeCriteria,
    };
  }
  criteria.forEach((criteriaItem) => {
    const isCriteriaValueString = criteriaItem?.criteriaValue?.constructor === String;
    if (
      criteriaItem?.criteriaValue?.length > 0 ||
      isCriteriaValueString ||
      criteriaItem?.isSelected
    ) {
      if (criteriaItem?.type === CRITERIA_TYPE.DETAILED) {
        if (criteriaItem?.criteriaKey.trim() !== '') {
          detailedCriteria.push({
            criteriaKey: criteriaItem?.criteriaKey,
            criteriaValue: isCriteriaValueString
              ? criteriaItem?.criteriaValue
              : criteriaItem?.criteriaValue
                  .map((criteriaItemElement) => criteriaItemElement?.key)
                  .join(':'),
            operator: criteriaItem?.operator,
          });
        }
      } else if (criteriaItem?.type === CRITERIA_TYPE.LIST) {
        if (criteriaItem?.isSelected) {
          detailedCriteria.push({
            criteriaKey: criteriaItem?.criteriaKey,
            criteriaValue: criteriaItem?.criteriaValue,
            operator: criteriaItem?.operator,
          });
        }
      } else if (criteriaItem?.type === CRITERIA_TYPE.RANGE) {
        rangeCriteria.push({
          criteriaKey: allDependantItemsData[criteriaItem?.criteriaSharedName]
            ? allDependantItemsData[criteriaItem?.criteriaSharedName]?.value
            : criteriaItem?.criteriaKey,
          criteriaValues: [
            {
              ...(Object.getOwnPropertyDescriptor(criteriaItem?.criteriaValue[0]?.range, 'min') && {
                minOperator: 'ge',
                minCriteriaLimit: criteriaItem?.criteriaValue[0]?.range?.min,
              }),
              ...(Object.getOwnPropertyDescriptor(criteriaItem?.criteriaValue[0]?.range, 'max') && {
                maxOperator: 'le',
                maxCriteriaLimit: criteriaItem?.criteriaValue[0]?.range?.max,
              }),
            },
          ],
        });
      }
    }
  });
  return {
    detailedCriteria,
    rangeCriteria,
  };
};
