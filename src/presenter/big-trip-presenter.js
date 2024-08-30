import FiltersView from '../view/filters-view.js';
import SortsView from '../view/sorts-view.js';
import RoutePointView from '../view/route-point-view.js';
import CreationFormView from '../view/creation-form-view.js';
import EditFormView from '../view/edit-form-view.js';
import { render, RenderPosition } from '../render.js';

export default class BigTripPresenter {
  constructor() {
    this.pageHeader = document.querySelector('.page-header');
    this.tripMain = this.pageHeader.querySelector('.trip-main');
    this.tripControlsFilters = this.pageHeader.querySelector('.trip-controls__filters');
    this.pageMain = document.querySelector('.page-main');
    this.tripEvents = this.pageMain.querySelector('.trip-events');

    this.routePoints = document.createElement('ul');
    this.routePoints.classList.add('trip-events__list');
    this.tripEvents.appendChild(this.routePoints);
  }

  init() {
    render(new FiltersView(), this.tripControlsFilters, RenderPosition.BEFOREEND);
    render(new SortsView(), this.routePoints, RenderPosition.BEFOREBEGIN);
    for (let currentRoutePoint = 0; currentRoutePoint < 3; currentRoutePoint++) {
      render(new RoutePointView(), this.routePoints, RenderPosition.AFTERBEGIN);
    }
    render(new CreationFormView(), this.routePoints, RenderPosition.AFTERBEGIN);
    render(new EditFormView(), this.routePoints, RenderPosition.AFTERBEGIN);
  }
}
