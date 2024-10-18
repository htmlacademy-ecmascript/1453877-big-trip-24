import FiltersListView from '../view/filters-list-view.js';
import SortsListView from '../view/sorts-list-view.js';
import PointFormView from '../view/point-form-view.js';
import { render, RenderPosition } from '../render.js';
import PointView from '../view/point-view.js';

export default class BigTripPresenter {
  constructor({
    bigTripControlsFilters,
    bigTripPoints,
    pointsModel,
    pointTypes
  }) {
    this.bigTripControlsFilters = bigTripControlsFilters;
    this.bigTripPoints = bigTripPoints;
    this.pointsModel = pointsModel;
    this.pointTypes = pointTypes;
  }

  init() {
    this.bigTripPointsList = document.createElement('ul');
    this.bigTripPointsList.classList.add('trip-events__list');
    this.bigTripPoints.appendChild(this.bigTripPointsList);
    this.destinationsList = this.pointsModel.getDestinations();
    this.offersList = this.pointsModel.getOffers();
    this.pointsList = this.pointsModel.getPoints();
    // console.log(this.pointsList);
    // console.log(this.offersList);
    // console.log(this.destinationsList);
    render(new PointFormView({
      point: this.pointsList[0],
      destinationsList: this.destinationsList,
      offersList: this.offersList,
    }), this.bigTripPointsList, RenderPosition.AFTERBEGIN);
    render(new FiltersListView(), this.bigTripControlsFilters, RenderPosition.BEFOREEND);
    render(new SortsListView(), this.bigTripPointsList, RenderPosition.BEFOREBEGIN);
    for (let currentPoint = 1; currentPoint < this.pointsList.length; currentPoint++) {
      render(new PointView({
        point: this.pointsList[currentPoint],
        destinationsList: this.destinationsList,
        offersList: this.offersList
      }), this.bigTripPointsList, RenderPosition.BEFOREEND);
    }
  }
}
