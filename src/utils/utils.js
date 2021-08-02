// only works for Array
export const isEmptyArray = (arr) => !arr?.length;

//only works with object
export const isEmptyObject = (obj) => {
  if (obj) {
    return !Object.keys(obj)?.length;
  }
  return true;
};
