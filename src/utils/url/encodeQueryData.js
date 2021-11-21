export const encodeQueryData = (paramsObject) => {
  if (!paramsObject) {
    return '';
  }
  const ret = [];
  for (const param in paramsObject) {
    ret.push(encodeURIComponent(param) + '=' + encodeURIComponent(paramsObject[param]));
  }
  return ret.join('&');
};
