export const getMappedTestResponse = (response) => {
  if (!response?.payload?.args) {
    return null;
  }
  const {
    payload: {args},
  } = response;

  return {args};
};
