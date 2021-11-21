export const getMappedTestResponse = (response) => {
  if (!response?.payload?.args?.body) {
    return null;
  }
  const {
    payload: {
      args: {body},
    },
  } = response;

  return console.log({body});
};
