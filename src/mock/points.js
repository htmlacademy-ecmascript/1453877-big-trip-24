import { getRandomInteger, getRandomArrayElement } from '../utils.js';

const getRandomPointOffersIdList = (offersPerPointType) => {
  const randomOffersIdList = [];
  for (let currentOffer = 0; currentOffer < offersPerPointType.length; currentOffer++) {
    if (!Math.round(Math.random())) {
      randomOffersIdList.push(offersPerPointType[currentOffer].id);
    }
  }
  return randomOffersIdList;
};

const getOffersByPointType = (offers, pointType) => offers.find((offer) => offer.type === pointType);

const getRandomPoint = (pointDestinationId, pointOffersIds, pointType, mockMinPrice, mockMaxPrice) => ({
  'id': crypto.randomUUID(),
  'base_price': getRandomInteger(mockMinPrice, mockMaxPrice),
  'date_from': new Date(getRandomInteger(new Date(2023, 5, 1).getTime(), new Date(2023, 5, 2).getTime())),
  'date_to': new Date(getRandomInteger(new Date(2023, 5, 2).getTime(), new Date(2023, 5, 3).getTime())),
  'destination': pointDestinationId,
  'isFavourite': !Math.round(Math.random()),
  'offers': pointOffersIds,
  'type': pointType,
});

export const getRandomPoints = (pointsAmount, pointTypes, destinations, offers, mockMinPrice, mockMaxPrice) => {
  const randomPoints = [];
  for (let currentPoint = 0; currentPoint < pointsAmount; currentPoint++) {
    const pointType = getRandomArrayElement(pointTypes);
    const pointDestination = getRandomArrayElement(destinations);
    randomPoints[currentPoint] = getRandomPoint(
      pointDestination.id,
      getRandomPointOffersIdList(getOffersByPointType(offers, pointType).offers),
      pointType,
      mockMinPrice,
      mockMaxPrice
    );
  }
  return randomPoints;
};
