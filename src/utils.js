import { Months, DatePostfixes } from './const.js';

export const capitalizeFirstLetter = (value) => value[0].toUpperCase() + value.slice(1);
export const getRandomInteger = (rangeStart, rangeEnd) => Math.floor(Math.random() * (rangeEnd - rangeStart + 1)) + rangeStart;
export const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];
export const getRandomDate = (start, end) => start.getTime() + Math.random() * (end.getTime() - start.getTime());
export const getElementById = (id, values) => values.find((value) => value.id === id);

const transformToTwoDigits = (value) => {
  if (String(value).length < 2) {
    return `0${value}`;
  }
  return value;
};

const truncateYearToTwoDigits = (value) => {
  if (String(value).length === 4) {
    return String(value).slice(-2);
  }
  return value;
};

export const humanizeDateForPointFormInput = (date) => {
  const day = transformToTwoDigits(date.getDate());
  const month = transformToTwoDigits(date.getMonth() + 1);
  const year = truncateYearToTwoDigits(date.getFullYear());
  const hours = transformToTwoDigits(date.getHours());
  const minutes = transformToTwoDigits(date.getMinutes());
  return `${day}/${month}/${year} ${hours}:${minutes}`;
};

export const humanizeDateForPointDate = (date) => {
  const month = Months[date.getMonth()];
  const day = transformToTwoDigits(date.getDate());
  return `${month} ${day}`;
};

export const humanizeDateForPointTime = (date) => {
  const hours = transformToTwoDigits(date.getHours());
  const minutes = transformToTwoDigits(date.getMinutes());
  return `${hours}:${minutes}`;
};

const humanizeDateDifferenceComponents = (dateComponent, postfix) => {
  if (dateComponent) {
    return String(dateComponent).length < 2 ? `0${dateComponent}${postfix}` : `${dateComponent}${postfix}`;
  }
  return `00${postfix}`;
};

export const humanizeDateForTimeDifference = (dateFrom, dateTo) => {
  const timeDifferenceMs = dateTo - dateFrom;
  const timeDifferenceDays = Math.trunc(timeDifferenceMs / (1000 * 60 * 60 * 24));
  const timeDifferenceHours = Math.trunc((timeDifferenceMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const timeDifferenceMinutes = Math.trunc((timeDifferenceMs % (1000 * 60 * 60)) / (1000 * 60));
  if (timeDifferenceDays) {
    return `${humanizeDateDifferenceComponents(timeDifferenceDays, DatePostfixes.DAYS)} ${humanizeDateDifferenceComponents(timeDifferenceHours, DatePostfixes.HOURS)} ${humanizeDateDifferenceComponents(timeDifferenceMinutes, DatePostfixes.MINUTES)}`;
  } else if (timeDifferenceHours) {
    return `${humanizeDateDifferenceComponents(timeDifferenceHours, DatePostfixes.HOURS)} ${humanizeDateDifferenceComponents(timeDifferenceMinutes, DatePostfixes.MINUTES)}`;
  } else if (timeDifferenceMinutes) {
    return `${humanizeDateDifferenceComponents(timeDifferenceMinutes, DatePostfixes.MINUTES)}`;
  }
};

export const returnTypeOffers = (point, offersList) => offersList.find((offersItem) => offersItem.type === point.type).offers;
