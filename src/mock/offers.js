import { getRandomInteger, getRandomArrayElement } from '../utils.js';

const getRandomOfferForPointType = (
  mockOfferTitles,
  mockOfferMinPrice,
  mockOfferMaxPrice
) => ({
  'id': crypto.randomUUID(),
  'title': getRandomArrayElement(mockOfferTitles),
  'price': getRandomInteger(
    mockOfferMinPrice,
    mockOfferMaxPrice
  ),
});

const getRandomOffersForPointType = (
  mockOffersMinAmount,
  mockOffersMaxAmount,
  mockOffersTitles,
  mockOfferMinPrice,
  mockOfferMaxPrice
) => Array.from(
  {length: getRandomInteger(
    mockOffersMinAmount,
    mockOffersMaxAmount
  )},
  () => getRandomOfferForPointType(
    mockOffersTitles,
    mockOfferMinPrice,
    mockOfferMaxPrice
  )
);

const getRandomOffersPerPointType = (
  pointType,
  mockOffersMinAmount,
  mockOffersMaxAmount,
  mockOffersTitles,
  mockOfferMinPrice,
  mockOfferMaxPrice
) => ({
  'type': pointType,
  'offers': getRandomOffersForPointType(
    mockOffersMinAmount,
    mockOffersMaxAmount,
    mockOffersTitles,
    mockOfferMinPrice,
    mockOfferMaxPrice)
});

export const getRandomOffers = (
  pointTypes,
  mockOffersMinAmount,
  mockOffersMaxAmount,
  mockOffersTitles,
  mockOfferMinPrice,
  mockOfferMaxPrice
) => Array.from(
  pointTypes,
  (pointType) => getRandomOffersPerPointType(
    pointType,
    mockOffersMinAmount,
    mockOffersMaxAmount,
    mockOffersTitles,
    mockOfferMinPrice,
    mockOfferMaxPrice
  )
);
