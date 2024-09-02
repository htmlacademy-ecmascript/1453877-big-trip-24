import { createElement } from '../render.js';
import { SORTS } from '../const.js';

const createSortItemTemplate = (sort) =>
  `<div class="trip-sort__item  trip-sort__item--${sort}">
      <input id="sort-${sort}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${sort}">
      <label class="trip-sort__btn" for="sort-${sort}">${sort}</label>
    </div>`;

const createSortsListTemplate = () =>
  `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
    ${SORTS.map((sort) => createSortItemTemplate(sort)).join('')}
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
