import { createElement } from '../render.js';
import { SortTypes } from '../const.js';

const createSortItemTemplate = (sortType) =>
  `<div class="trip-sort__item  trip-sort__item--${sortType}">
    <input id="sort-${sortType}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${sortType}" disabled="">
    <label class="trip-sort__btn" for="sort-${sortType}">${sortType}</label>
  </div>`;

const createSortsListTemplate = () =>
  `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
    ${SortTypes.map((sortType) => createSortItemTemplate(sortType)).join('')}
  </form>`;

export default class SortsListView {
  getTemplate() {
    return createSortsListTemplate();
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
