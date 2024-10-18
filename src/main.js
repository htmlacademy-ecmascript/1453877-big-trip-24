import PointsModel from './model/points-model.js';
import BigTripPresenter from './presenter/big-trip-presenter.js';

const bigTripSiteHeader = document.querySelector('.page-header');
const bigTripControlsFilters = bigTripSiteHeader.querySelector('.trip-controls__filters');
const bigTripSiteMain = document.querySelector('.page-main');
const bigTripPoints = bigTripSiteMain.querySelector('.trip-events');

const pointsModel = new PointsModel();

const bigTripPresenter = new BigTripPresenter({
  bigTripControlsFilters,
  bigTripPoints,
  pointsModel,
});

bigTripPresenter.init();
