(()=>{"use strict";const e="afterbegin",t="beforeend";function n(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}function s(e,n,s=t){n.insertAdjacentElement(s,e.getElement())}const i=["everything","future","present","past"];class l{getTemplate(){return`<form class="trip-filters" action="#" method="get">\n    ${i.map((e=>(e=>`<div class="trip-filters__filter">\n    <input id="filter-${e}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${e}">\n    <label class="trip-filters__filter-label" for="filter-${e}">${e}</label>\n  </div>`)(e))).join("")}\n    <button class="visually-hidden" type="submit">Accept filter</button>\n  </form>`}getElement(){return this.element||(this.element=n(this.getTemplate())),this.element}removeElement(){this.element=null}}const a=["day","event","time","price","offers"];class o{getTemplate(){return`<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n    ${a.map((e=>(e=>`<div class="trip-sort__item  trip-sort__item--${e}">\n      <input id="sort-${e}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${e}">\n      <label class="trip-sort__btn" for="sort-${e}">${e}</label>\n    </div>`)(e))).join("")}\n  </form>`}getElement(){return this.element||(this.element=n(this.getTemplate())),this.element}removeElement(){this.element=null}}class v{getTemplate(){return'<li class="trip-events__item">\n    <div class="event">\n      <time class="event__date" datetime="2019-03-18">MAR 18</time>\n      <div class="event__type">\n        <img class="event__type-icon" width="42" height="42" src="img/icons/flight.png" alt="Event type icon">\n      </div>\n      <h3 class="event__title">Flight Chamonix</h3>\n      <div class="event__schedule">\n        <p class="event__time">\n          <time class="event__start-time" datetime="2019-03-18T12:25">12:25</time>\n          —\n          <time class="event__end-time" datetime="2019-03-18T13:35">13:35</time>\n        </p>\n        <p class="event__duration">01H 10M</p>\n      </div>\n      <p class="event__price">\n        €&nbsp;<span class="event__price-value">160</span>\n      </p>\n      <h4 class="visually-hidden">Offers:</h4>\n      <ul class="event__selected-offers">\n        <li class="event__offer">\n          <span class="event__offer-title">Add luggage</span>\n          +€&nbsp;\n          <span class="event__offer-price">50</span>\n        </li>\n        <li class="event__offer">\n          <span class="event__offer-title">Switch to comfort</span>\n          +€&nbsp;\n          <span class="event__offer-price">80</span>\n        </li>\n      </ul>\n      <button class="event__favorite-btn" type="button">\n        <span class="visually-hidden">Add to favorite</span>\n        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"></path>\n        </svg>\n      </button>\n      <button class="event__rollup-btn" type="button">\n        <span class="visually-hidden">Open event</span>\n      </button>\n    </div>\n  </li>'}getElement(){return this.element||(this.element=n(this.getTemplate())),this.element}removeElement(){this.element=null}}const r=["taxi","bus","train","ship","drive","flight","check-in","sightseeing","restaurant"];class c{getTemplate(){return`<li class="trip-events__item">\n    <form class="event event--edit" action="#" method="post">\n      <header class="event__header">\n        <div class="event__type-wrapper">\n    <label class="event__type  event__type-btn" for="event-type-toggle-1">\n      <span class="visually-hidden">Choose event type</span>\n      <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">\n    </label>\n    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n    <div class="event__type-list">\n      <fieldset class="event__type-group">\n        <legend class="visually-hidden">Event type</legend>\n        ${r.map((e=>(e=>`<div class="event__type-item">\n    <input id="event-type-${e}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${e}">\n    <label class="event__type-label  event__type-label--${e}" for="event-type-taxi-1">${e}</label>\n  </div>`)(e))).join("")}\n      </fieldset>\n    </div>\n  </div>\n        <div class="event__field-group  event__field-group--destination">\n          <label class="event__label  event__type-output" for="event-destination-1">\n            Flight\n          </label>\n          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Geneva" list="destination-list-1">\n          <datalist id="destination-list-1">\n            <option value="Amsterdam"></option>\n            <option value="Geneva"></option>\n            <option value="Chamonix"></option>\n          </datalist>\n        </div>\n        <div class="event__field-group  event__field-group--time">\n          <label class="visually-hidden" for="event-start-time-1">From</label>\n          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="19/03/19 00:00">\n          —\n          <label class="visually-hidden" for="event-end-time-1">To</label>\n          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="19/03/19 00:00">\n        </div>\n        <div class="event__field-group  event__field-group--price">\n          <label class="event__label" for="event-price-1">\n            <span class="visually-hidden">Price</span>\n            €\n          </label>\n          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="">\n        </div>\n        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n        <button class="event__reset-btn" type="reset">Cancel</button>\n      </header>\n      <section class="event__details">\n        <section class="event__section  event__section--offers">\n          <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n          <div class="event__available-offers">\n            <div class="event__offer-selector">\n              <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked="">\n              <label class="event__offer-label" for="event-offer-luggage-1">\n                <span class="event__offer-title">Add luggage</span>\n                +€&nbsp;\n                <span class="event__offer-price">30</span>\n              </label>\n            </div>\n\n            <div class="event__offer-selector">\n              <input class="event__offer-checkbox  visually-hidden" id="event-offer-comfort-1" type="checkbox" name="event-offer-comfort" checked="">\n              <label class="event__offer-label" for="event-offer-comfort-1">\n                <span class="event__offer-title">Switch to comfort class</span>\n                +€&nbsp;\n                <span class="event__offer-price">100</span>\n              </label>\n            </div>\n\n            <div class="event__offer-selector">\n              <input class="event__offer-checkbox  visually-hidden" id="event-offer-meal-1" type="checkbox" name="event-offer-meal">\n              <label class="event__offer-label" for="event-offer-meal-1">\n                <span class="event__offer-title">Add meal</span>\n                +€&nbsp;\n                <span class="event__offer-price">15</span>\n              </label>\n            </div>\n\n            <div class="event__offer-selector">\n              <input class="event__offer-checkbox  visually-hidden" id="event-offer-seats-1" type="checkbox" name="event-offer-seats">\n              <label class="event__offer-label" for="event-offer-seats-1">\n                <span class="event__offer-title">Choose seats</span>\n                +€&nbsp;\n                <span class="event__offer-price">5</span>\n              </label>\n            </div>\n\n            <div class="event__offer-selector">\n              <input class="event__offer-checkbox  visually-hidden" id="event-offer-train-1" type="checkbox" name="event-offer-train">\n              <label class="event__offer-label" for="event-offer-train-1">\n                <span class="event__offer-title">Travel by train</span>\n                +€&nbsp;\n                <span class="event__offer-price">40</span>\n              </label>\n            </div>\n          </div>\n        </section>\n\n        <section class="event__section  event__section--destination">\n          <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n          <p class="event__destination-description">Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc.</p>\n\n          <div class="event__photos-container">\n            <div class="event__photos-tape">\n              <img class="event__photo" src="img/photos/1.jpg" alt="Event photo">\n              <img class="event__photo" src="img/photos/2.jpg" alt="Event photo">\n              <img class="event__photo" src="img/photos/3.jpg" alt="Event photo">\n              <img class="event__photo" src="img/photos/4.jpg" alt="Event photo">\n              <img class="event__photo" src="img/photos/5.jpg" alt="Event photo">\n            </div>\n          </div>\n        </section>\n      </section>\n    </form>\n  </li>`}getElement(){return this.element||(this.element=n(this.getTemplate())),this.element}removeElement(){this.element=null}}const p=["taxi","bus","train","ship","drive","flight","check-in","sightseeing","restaurant"];class _{getTemplate(){return`<li class="trip-events__item">\n      <form class="event event--edit" action="#" method="post">\n      <header class="event__header">\n        <div class="event__type-wrapper">\n    <label class="event__type  event__type-btn" for="event-type-toggle-1">\n      <span class="visually-hidden">Choose event type</span>\n      <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">\n    </label>\n    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n    <div class="event__type-list">\n      <fieldset class="event__type-group">\n        <legend class="visually-hidden">Event type</legend>\n        ${p.map((e=>(e=>`<div class="event__type-item">\n    <input id="event-type-${e}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${e}">\n    <label class="event__type-label  event__type-label--${e}" for="event-type-taxi-1">${e}</label>\n  </div>`)(e))).join("")}\n      </fieldset>\n    </div>\n  </div>\n\n      <div class="event__field-group  event__field-group--destination">\n        <label class="event__label  event__type-output" for="event-destination-1">\n          Flight\n        </label>\n        <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Chamonix" list="destination-list-1">\n        <datalist id="destination-list-1">\n          <option value="Amsterdam"></option>\n          <option value="Geneva"></option>\n          <option value="Chamonix"></option>\n        </datalist>\n      </div>\n\n      <div class="event__field-group  event__field-group--time">\n        <label class="visually-hidden" for="event-start-time-1">From</label>\n        <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="18/03/19 12:25">\n        —\n        <label class="visually-hidden" for="event-end-time-1">To</label>\n        <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="18/03/19 13:35">\n      </div>\n\n      <div class="event__field-group  event__field-group--price">\n        <label class="event__label" for="event-price-1">\n          <span class="visually-hidden">Price</span>\n          €\n        </label>\n        <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="160">\n      </div>\n\n      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n      <button class="event__reset-btn" type="reset">Delete</button>\n      <button class="event__rollup-btn" type="button">\n        <span class="visually-hidden">Open event</span>\n      </button>\n    </header>\n    <section class="event__details">\n      <section class="event__section  event__section--offers">\n        <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n        <div class="event__available-offers">\n          <div class="event__offer-selector">\n            <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked="">\n            <label class="event__offer-label" for="event-offer-luggage-1">\n              <span class="event__offer-title">Add luggage</span>\n              +€&nbsp;\n              <span class="event__offer-price">50</span>\n            </label>\n          </div>\n\n          <div class="event__offer-selector">\n            <input class="event__offer-checkbox  visually-hidden" id="event-offer-comfort-1" type="checkbox" name="event-offer-comfort" checked="">\n            <label class="event__offer-label" for="event-offer-comfort-1">\n              <span class="event__offer-title">Switch to comfort</span>\n              +€&nbsp;\n              <span class="event__offer-price">80</span>\n            </label>\n          </div>\n\n          <div class="event__offer-selector">\n            <input class="event__offer-checkbox  visually-hidden" id="event-offer-meal-1" type="checkbox" name="event-offer-meal">\n            <label class="event__offer-label" for="event-offer-meal-1">\n              <span class="event__offer-title">Add meal</span>\n              +€&nbsp;\n              <span class="event__offer-price">15</span>\n            </label>\n          </div>\n\n          <div class="event__offer-selector">\n            <input class="event__offer-checkbox  visually-hidden" id="event-offer-seats-1" type="checkbox" name="event-offer-seats">\n            <label class="event__offer-label" for="event-offer-seats-1">\n              <span class="event__offer-title">Choose seats</span>\n              +€&nbsp;\n              <span class="event__offer-price">5</span>\n            </label>\n          </div>\n\n          <div class="event__offer-selector">\n            <input class="event__offer-checkbox  visually-hidden" id="event-offer-train-1" type="checkbox" name="event-offer-train">\n            <label class="event__offer-label" for="event-offer-train-1">\n              <span class="event__offer-title">Travel by train</span>\n              +€&nbsp;\n              <span class="event__offer-price">40</span>\n            </label>\n          </div>\n        </div>\n      </section>\n\n      <section class="event__section  event__section--destination">\n        <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n        <p class="event__destination-description">Chamonix-Mont-Blanc (usually shortened to Chamonix) is a resort area near the junction of France, Switzerland and Italy. At the base of Mont Blanc, the highest summit in the Alps, it's renowned for its skiing.</p>\n      </section>\n    </section>\n  </form>\n</li>`}getElement(){return this.element||(this.element=n(this.getTemplate())),this.element}removeElement(){this.element=null}}(new class{constructor(){this.pageHeader=document.querySelector(".page-header"),this.tripMain=this.pageHeader.querySelector(".trip-main"),this.tripControlsFilters=this.pageHeader.querySelector(".trip-controls__filters"),this.pageMain=document.querySelector(".page-main"),this.tripEvents=this.pageMain.querySelector(".trip-events"),this.routePoints=document.createElement("ul"),this.routePoints.classList.add("trip-events__list"),this.tripEvents.appendChild(this.routePoints)}init(){s(new l,this.tripControlsFilters,t),s(new o,this.routePoints,"beforebegin");for(let t=0;t<3;t++)s(new v,this.routePoints,e);s(new c,this.routePoints,e),s(new _,this.routePoints,e)}}).init()})();
//# sourceMappingURL=bundle.4f5b5d582200115b2418.js.map