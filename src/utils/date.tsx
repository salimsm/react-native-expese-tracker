import {monthList} from '../const';

export const getDate = () => {
  const date = new Date();
  return `${date.getFullYear()}-${
    monthList[date.getMonth()]
  }-${date.getDate()}`;
};
