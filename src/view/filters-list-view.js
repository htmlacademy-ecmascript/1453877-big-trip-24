import { createElement } from '../render.js';
import { FilterTypes } from '../const.js';

const createFilterItemTemplate = (filterType) =>
  `<div class="trip-filters__filter">
    <input id="filter-${filterType}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filterType}">
    <label class="trip-filters__filter-label" for="filter-${filterType}">${filterType}</label>
  </div>`;

const createFiltersListTemplate = () =>
  `<form class="trip-filters" action="#" method="get">
    ${FilterTypes.map((filterType) => createFilterItemTemplate(filterType)).join('')}
    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>`;

export default class FiltersListView {
  getTemplate() {
    return createFiltersListTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
