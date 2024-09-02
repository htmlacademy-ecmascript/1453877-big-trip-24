import FiltersListView from '../view/filters-list-view.js';
import SortsListView from '../view/sorts-list-view.js';
import TripEventView from '../view/trip-event-view.js';
import EditTripEventFormView from '../view/edit-trip-event-form-view.js';
import CreateTripEventFormView from '../view/create-trip-event-form-view.js';
import { render, RenderPosition } from '../render.js';

export default class BigTripPresenter {
  constructor({
    bigTripControlsFilters,
    bigTripEvents,
  }) {

    this.bigTripControlsFilters = bigTripControlsFilters;
    this.bigTripEvents = bigTripEvents;
  }

  init() {
    this.bigTripEventsList = document.createElement('ul');
    this.bigTripEventsList.classList.add('trip-events__list');
    this.bigTripEvents.appendChild(this.bigTripEventsList);
    render(new FiltersListView(), this.bigTripControlsFilters, RenderPosition.BEFOREEND);
    render(new SortsListView(), this.bigTripEventsList, RenderPosition.BEFOREBEGIN);
    render(new CreateTripEventFormView(), this.bigTripEventsList, RenderPosition.BEFOREBEGIN);
    render(new EditTripEventFormView(), this.bigTripEventsList, RenderPosition.BEFOREBEGIN);
    for (let currentEvent = 0; currentEvent < 3; currentEvent++) {
      render(new TripEventView(), this.bigTripEventsList, RenderPosition.AFTERBEGIN);
    }
  }
}
