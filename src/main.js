import BigTripPresenter from './presenter/big-trip-presenter.js';

const bigTripSiteHeader = document.querySelector('.page-header');
const bigTripControlsFilters = bigTripSiteHeader.querySelector('.trip-controls__filters');
const bigTripSiteMain = document.querySelector('.page-main');
const bigTripEvents = bigTripSiteMain.querySelector('.trip-events');


const bigTripPresenter = new BigTripPresenter({
  bigTripControlsFilters,
  bigTripEvents,
});

bigTripPresenter.init();
