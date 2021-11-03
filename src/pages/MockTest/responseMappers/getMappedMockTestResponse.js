export const getMappedMockTestResponse = (response) => {
  if (!console.log(response?.payload)) {
    return null;
  }
  const {
    payload: {test},
  } = response;

  return test;
};
