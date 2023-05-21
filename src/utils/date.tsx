import {monthList} from '../const';

export const getDate = () => {
  const date = new Date();
  return `${date.getFullYear()}-${
    monthList[date.getMonth()]
  }-${date.getDate()}`;
};

export const getYear = () => {
  const date = new Date();
  return `${date.getFullYear()}`;
};

export const getMonth = () => {
  const date = new Date();
  return `${monthList[date.getMonth()]}`;
};

export const getMonthName = (monthNum: string) => {
  switch (monthNum) {
    case '01':
      return 'Jan';
    case '02':
      return 'Feb';
    case '03':
      return 'Mar';
    case '04':
      return 'Apr';
    case '05':
      return 'May';
    case '06':
      return 'June';
    case '07':
      return 'July';
    case '08':
      return 'Aug';
    case '09':
      return 'Sept';
    case '10':
      return 'Oct';
    case '11':
      return 'Nov';
    case '12':
      return 'Dec';
  }
};
