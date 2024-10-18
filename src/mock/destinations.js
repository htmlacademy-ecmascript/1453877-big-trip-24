import { getRandomInteger, getRandomArrayElement } from '../utils.js';

const getRandomDestinationPicture = (
  src,
  mockPicturesMaxAmount,
  mockPicturesDescriptions
) => ({
  'src': `${src}${getRandomInteger(1, mockPicturesMaxAmount)}`,
  'description': getRandomArrayElement(mockPicturesDescriptions),
});

const getRandomDestinationPictures = (
  src,
  mockPicturesMinAmount,
  mockPicturesMaxAmount,
  mockPicturesDescriptions
) => Array.from(
  {length: getRandomInteger(
    mockPicturesMinAmount,
    mockPicturesMaxAmount
  )},
  () => getRandomDestinationPicture(
    src,
    mockPicturesMaxAmount,
    mockPicturesDescriptions
  )
);

const getRandomDestination = (
  src,
  mockPicturesMinAmount,
  mockPicturesMaxAmount,
  mockPicturesDescriptions,
  mockCity,
  mockCitiesDescriptions
) => ({
  'id': crypto.randomUUID(),
  'description': getRandomArrayElement(mockCitiesDescriptions),
  'name': mockCity,
  'pictures': getRandomDestinationPictures(
    src,
    mockPicturesMinAmount,
    mockPicturesMaxAmount,
    mockPicturesDescriptions
  ),
});

export const getRandomDestinations = (
  mockCities,
  src,
  mockPicturesMinAmount,
  mockPicturesMaxAmount,
  mockPicturesDescriptions,
  mockCitiesDescriptions
) => Array.from(
  mockCities,
  (mockCity) => getRandomDestination(
    src,
    mockPicturesMinAmount,
    mockPicturesMaxAmount,
    mockPicturesDescriptions,
    mockCity,
    mockCitiesDescriptions
  )
);
