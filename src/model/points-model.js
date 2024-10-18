import { MockConstants } from '../mock/const.js';
import { PointTypes } from '../const.js';
import { getRandomDestinations } from '../mock/destinations.js';
import { getRandomOffers } from '../mock/offers.js';
import { getRandomPoints } from '../mock/points.js';
import { getRandomInteger } from '../utils.js';

const POINTS_AMOUNT = getRandomInteger(MockConstants.Points.MIN_AMOUNT, MockConstants.Points.MAX_AMOUNT);

export default class PointsModel {
  destinations = getRandomDestinations(
    MockConstants.Cities,
    MockConstants.Destinations.Pictures.SRC,
    MockConstants.Destinations.Pictures.MIN_AMOUNT,
    MockConstants.Destinations.Pictures.MAX_AMOUNT,
    MockConstants.Destinations.Descriptions,
    MockConstants.Destinations.Descriptions
  );

  offers = getRandomOffers(
    PointTypes,
    MockConstants.Offers.MIN_AMOUNT,
    MockConstants.Offers.MAX_AMOUNT,
    MockConstants.Offers.Titles,
    MockConstants.Offers.MIN_PRICE,
    MockConstants.Offers.MAX_PRICE
  );

  points = getRandomPoints(
    POINTS_AMOUNT,
    PointTypes,
    this.destinations,
    this.offers,
    MockConstants.Price.MIN_AMOUNT,
    MockConstants.Price.MAX_AMOUNT,
  );

  getDestinations = () => this.destinations;
  getOffers = () => this.offers;
  getPoints = () => this.points;
}
