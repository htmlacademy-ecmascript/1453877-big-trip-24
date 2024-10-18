import { createElement } from '../render.js';
import { capitalizeFirstLetter, getElementById, humanizeDateForPointFormInput, returnTypeOffers } from '../utils.js';
import { PointTypes } from '../const.js';

const DEFAULT_POINT = {
  'id': '',
  'base_price': '',
  'date_from': '',
  'date_to': '',
  'destination': '',
  'isFavourite': '',
  'offers': '',
  'type': 'flight'
};

const createPointFormHeaderEventTypesItemTemplate = (pointType, point) =>
  `<div class="event__type-item">
    <input id="event-type-${pointType}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${pointType}" ${point.type === pointType ? 'checked' : ''}>
    <label class="event__type-label  event__type-label--${pointType}" for="event-type-${pointType}-1">${capitalizeFirstLetter(pointType)}</label>
  </div>`;

const createPointFormHeaderEventTypesBlockTemplate = (pointTypes, point) =>
  `<div class="event__type-list">
    <fieldset class="event__type-group">
      <legend class="visually-hidden">Event type</legend>
      ${pointTypes.map((pointType) => createPointFormHeaderEventTypesItemTemplate(pointType, point)).join('')}
    </fieldset>
  </div>`;

const createPointFormHeaderDestinationsItemTemplate = (destinationItemName) =>
  `<option value="${destinationItemName}"></option>`;

const createPointFormHeaderDestinationsBlockTemplate = (point, destinationsList) =>
  `<div class="event__field-group  event__field-group--destination">
    <label class="event__label  event__type-output" for="event-destination-1">
      ${point.type}
    </label>
    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${point.id ? getElementById(point.destination, destinationsList).name : ''}" list="destination-list-1">
    <datalist id="destination-list-1">
      ${destinationsList.map((destinationItem) => createPointFormHeaderDestinationsItemTemplate(destinationItem.name)).join('')}
    </datalist>
  </div>`;

const createPointFormHeaderAddPointControlsTemplate = () =>
  `<button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
  <button class="event__reset-btn" type="reset">Cancel</button>`;

const createPointFormHeaderEditPointControlsTemplate = () =>
  `<button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
  <button class="event__reset-btn" type="reset">Delete</button>
  <button class="event__rollup-btn" type="button">
    <span class="visually-hidden">Open event</span>
  </button>`;

const createPointFormHeaderPointControls = (point) => point.id ? createPointFormHeaderEditPointControlsTemplate() : createPointFormHeaderAddPointControlsTemplate();

const createPointFormHeaderTemplate = (pointTypes, point, destinationsList) =>
  `<header class="event__header">
    <div class="event__type-wrapper">
      <label class="event__type  event__type-btn" for="event-type-toggle-1">
        <span class="visually-hidden">Choose event type</span>
        <img class="event__type-icon" width="17" height="17" src="img/icons/${point.type}.png" alt="Event type icon">
      </label>
      <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
      ${createPointFormHeaderEventTypesBlockTemplate(pointTypes, point)}
    </div>
    ${createPointFormHeaderDestinationsBlockTemplate(point, destinationsList)}

    <div class="event__field-group  event__field-group--time">
      <label class="visually-hidden" for="event-start-time-1">From</label>
      <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${point.id ? humanizeDateForPointFormInput(point.date_from) : ''}">
      —
      <label class="visually-hidden" for="event-end-time-1">To</label>
      <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${point.id ? humanizeDateForPointFormInput(point.date_to) : ''}">
    </div>

    <div class="event__field-group  event__field-group--price">
      <label class="event__label" for="event-price-1">
        <span class="visually-hidden">Price</span>
        €
      </label>
      <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${point.id ? point.base_price : ''}">
    </div>

    ${createPointFormHeaderPointControls(point)}
  </header>`;

const createPointFormAvailableOffersItemTemplate = (typeOffer, point) =>
  `<div class="event__offer-selector">
    <input class="event__offer-checkbox  visually-hidden" id="${typeOffer.id}" type="checkbox" name="${typeOffer.id}" ${point.offers.includes(typeOffer.id) ? 'checked' : ''}>
    <label class="event__offer-label" for="${typeOffer.id}">
      <span class="event__offer-title">${typeOffer.title}</span>
      +€&nbsp;
      <span class="event__offer-price">${typeOffer.price}</span>
    </label>
  </div>`;

const createPointFormOffersTemplate = (point, offersList) => {
  const typeOffers = returnTypeOffers(point, offersList);
  if (typeOffers.length) {
    return (`<section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>
      <div class="event__available-offers">
        ${typeOffers.map((typeOffer) => createPointFormAvailableOffersItemTemplate(typeOffer, point)).join('')}
      </div>
    </section>`);
  }
  return '';
};

const createPointFormDestinationPhotoTemplate = (pointDestinationPhotoSrc) =>
  `<img class="event__photo" src="${pointDestinationPhotoSrc}" alt="Event photo">`;

const createPointFormDestinationTemplate = (point, destinationsList) => {
  const pointDestination = getElementById(point.destination, destinationsList);
  return (
    `<section class="event__section  event__section--destination">
      <h3 class="event__section-title  event__section-title--destination">Destination</h3>
      <p class="event__destination-description">${pointDestination.description}</p>
      <div class="event__photos-container">
        <div class="event__photos-tape">
          ${pointDestination.pictures.map((pointDestinationPicture) => createPointFormDestinationPhotoTemplate(pointDestinationPicture.src)).join('')}
        </div>
      </div>
    </section>`
  );
};

const createPointFormTemplate = (pointTypes, point, destinationsList, offersList) =>
  `<li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
      ${createPointFormHeaderTemplate(pointTypes, point, destinationsList)}
      <section class="event__details">
        ${createPointFormOffersTemplate(point, offersList)}
        ${createPointFormDestinationTemplate(point, destinationsList)}
      </section>
    </form>
  </li>`;

export default class PointFormView {
  constructor({
    point = DEFAULT_POINT,
    destinationsList,
    offersList,
  }) {
    this.point = point;
    this.destinationsList = destinationsList;
    this.offersList = offersList;
  }

  getTemplate() {
    return createPointFormTemplate(PointTypes, this.point, this.destinationsList, this.offersList);
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
