(()=>{"use strict";const e=["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Cras aliquet varius magna, non porta ligula feugiat eget.","Fusce tristique felis at fermentum pharetra.","Aliquam id orci ut lectus varius viverra.","Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.","Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.","Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.","Sed sed nisi sed augue convallis suscipit in sed felis.","Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.","In rutrum ac purus sit amet tempus."],t={SRC:"https://loremflickr.com/248/152?random=",MIN_AMOUNT:0,MAX_AMOUNT:10},n=0,i=1e4,s=["Moscow","Saint Petersburg","Paris","Berlin","New York","Kiyv","Chicago","London","Sydney"],a=["Upgrade to a business class","Choose the radio station","Choose temperature","Drive quickly, I'm in a hurry","Drive slowly","Infotainment system","Order meal","Choose seats","Book a taxi at the arrival point","Order a breakfast","Wake up at a certain time","Choose meal","Choose seats","Upgrade to comfort class","Upgrade to business class","Add luggage","Business lounge","Choose the time of check-in","Choose the time of check-out","Add breakfast","Laundry","Order a meal from the restaurant","Choose meal","Choose seats","Upgrade to comfort class","Upgrade to business class","Add luggage","Business lounge","With automatic transmission","With air conditioning","Choose live music","Choose VIP area"],o=0,l=1e3,r=0,p=10,d=["day","event","time","price","offer"],c=["everything","future","present","past"],u=["taxi","bus","train","ship","drive","flight","check-in","sightseeing","restaurant"],v=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"],_=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,m=e=>e[_(0,e.length-1)],h=(e,t)=>t.find((t=>t.id===e)),f=e=>String(e).length<2?`0${e}`:e,g=e=>{var t;return`${f(e.getDate())}/${f(e.getMonth()+1)}/${t=e.getFullYear(),4===String(t).length?String(t).slice(-2):t} ${f(e.getHours())}:${f(e.getMinutes())}`},b=e=>`${f(e.getHours())}:${f(e.getMinutes())}`,y=(e,t)=>e?String(e).length<2?`0${e}${t}`:`${e}${t}`:`00${t}`,$=(e,t)=>t.find((t=>t.type===e.type)).offers,L=(e,t,n,i)=>Array.from({length:_(t,n)},(()=>((e,t,n)=>({src:`${e}${_(1,t)}`,description:m(n)}))(e,n,i))),T=(e,t,n,i,s)=>Array.from({length:_(e,t)},(()=>((e,t,n)=>({id:crypto.randomUUID(),title:m(e),price:_(t,n)}))(n,i,s))),M=e=>{const t=[];for(let n=0;n<e.length;n++)Math.round(Math.random())||t.push(e[n].id);return t},C=(e,t)=>e.find((e=>e.type===t)),w=(e,t,n,i,s)=>({id:crypto.randomUUID(),base_price:_(i,s),date_from:new Date(_(new Date(2023,5,1).getTime(),new Date(2023,5,2).getTime())),date_to:new Date(_(new Date(2023,5,2).getTime(),new Date(2023,5,3).getTime())),destination:e,isFavourite:!Math.round(Math.random()),offers:t,type:n}),A=_(1,10),D="beforeend";function E(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}function P(e,t,n=D){t.insertAdjacentElement(n,e.getElement())}class S{getTemplate(){return`<form class="trip-filters" action="#" method="get">\n    ${c.map((e=>(e=>`<div class="trip-filters__filter">\n    <input id="filter-${e}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${e}">\n    <label class="trip-filters__filter-label" for="filter-${e}">${e}</label>\n  </div>`)(e))).join("")}\n    <button class="visually-hidden" type="submit">Accept filter</button>\n  </form>`}getElement(){return this.element||(this.element=E(this.getTemplate())),this.element}removeElement(){this.element=null}}class U{getTemplate(){return`<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n    ${d.map((e=>(e=>`<div class="trip-sort__item  trip-sort__item--${e}">\n    <input id="sort-${e}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${e}" disabled="">\n    <label class="trip-sort__btn" for="sort-${e}">${e}</label>\n  </div>`)(e))).join("")}\n  </form>`}getElement(){return this.element||(this.element=E(this.getTemplate())),this.element}removeElement(){this.element=null}}const k={id:"",base_price:"",date_from:"",date_to:"",destination:"",isFavourite:"",offers:"",type:"flight"},O=(e,t,n,i)=>`<li class="trip-events__item">\n    <form class="event event--edit" action="#" method="post">\n      ${((e,t,n)=>`<header class="event__header">\n    <div class="event__type-wrapper">\n      <label class="event__type  event__type-btn" for="event-type-toggle-1">\n        <span class="visually-hidden">Choose event type</span>\n        <img class="event__type-icon" width="17" height="17" src="img/icons/${t.type}.png" alt="Event type icon">\n      </label>\n      <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n      ${((e,t)=>`<div class="event__type-list">\n    <fieldset class="event__type-group">\n      <legend class="visually-hidden">Event type</legend>\n      ${e.map((e=>((e,t)=>{return`<div class="event__type-item">\n    <input id="event-type-${e}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${e}" ${t.type===e?"checked":""}>\n    <label class="event__type-label  event__type-label--${e}" for="event-type-${e}-1">${n=e,n[0].toUpperCase()+n.slice(1)}</label>\n  </div>`;var n})(e,t))).join("")}\n    </fieldset>\n  </div>`)(e,t)}\n    </div>\n    ${((e,t)=>`<div class="event__field-group  event__field-group--destination">\n    <label class="event__label  event__type-output" for="event-destination-1">\n      ${e.type}\n    </label>\n    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${e.id?h(e.destination,t).name:""}" list="destination-list-1">\n    <datalist id="destination-list-1">\n      ${t.map((e=>`<option value="${e.name}"></option>`)).join("")}\n    </datalist>\n  </div>`)(t,n)}\n\n    <div class="event__field-group  event__field-group--time">\n      <label class="visually-hidden" for="event-start-time-1">From</label>\n      <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${t.id?g(t.date_from):""}">\n      —\n      <label class="visually-hidden" for="event-end-time-1">To</label>\n      <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${t.id?g(t.date_to):""}">\n    </div>\n\n    <div class="event__field-group  event__field-group--price">\n      <label class="event__label" for="event-price-1">\n        <span class="visually-hidden">Price</span>\n        €\n      </label>\n      <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${t.id?t.base_price:""}">\n    </div>\n\n    ${(e=>e.id?'<button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n  <button class="event__reset-btn" type="reset">Delete</button>\n  <button class="event__rollup-btn" type="button">\n    <span class="visually-hidden">Open event</span>\n  </button>':'<button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n  <button class="event__reset-btn" type="reset">Cancel</button>')(t)}\n  </header>`)(e,t,n)}\n      <section class="event__details">\n        ${((e,t)=>{const n=$(e,t);return n.length?`<section class="event__section  event__section--offers">\n      <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n      <div class="event__available-offers">\n        ${n.map((t=>((e,t)=>`<div class="event__offer-selector">\n    <input class="event__offer-checkbox  visually-hidden" id="${e.id}" type="checkbox" name="${e.id}" ${t.offers.includes(e.id)?"checked":""}>\n    <label class="event__offer-label" for="${e.id}">\n      <span class="event__offer-title">${e.title}</span>\n      +€&nbsp;\n      <span class="event__offer-price">${e.price}</span>\n    </label>\n  </div>`)(t,e))).join("")}\n      </div>\n    </section>`:""})(t,i)}\n        ${((e,t)=>{const n=h(e.destination,t);return`<section class="event__section  event__section--destination">\n      <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n      <p class="event__destination-description">${n.description}</p>\n      <div class="event__photos-container">\n        <div class="event__photos-tape">\n          ${n.pictures.map((e=>`<img class="event__photo" src="${e.src}" alt="Event photo">`)).join("")}\n        </div>\n      </div>\n    </section>`})(t,n)}\n      </section>\n    </form>\n  </li>`;class x{constructor({point:e=k,destinationsList:t,offersList:n}){this.point=e,this.destinationsList=t,this.offersList=n}getTemplate(){return O(u,this.point,this.destinationsList,this.offersList)}getElement(){return this.element||(this.element=E(this.getTemplate())),this.element}removeElement(){this.element=null}}const j=(e,t,n)=>`<li class="trip-events__item">\n    <div class="event">\n      ${(e=>{return`<time class="event__date" datetime="${e.date_from}">${t=e.date_from,`${v[t.getMonth()]} ${f(t.getDate())}`}</time>`;var t})(e)}\n      ${(e=>`<div class="event__type">\n    <img class="event__type-icon" width="42" height="42" src="img/icons/${e.type}.png" alt="Event type icon">\n  </div>`)(e)}\n      ${((e,t)=>{const n=h(e.destination,t);return`<h3 class="event__title">${e.type} ${n.name}</h3>`})(e,t)}\n      ${(e=>`<div class="event__schedule">\n    <p class="event__time">\n      <time class="event__start-time" datetime="${e.date_from}">${b(e.date_from)}</time>\n    —\n      <time class="event__end-time" datetime="${e.date_to}">${b(e.date_to)}</time>\n    </p>\n    <p class="event__duration">${((e,t)=>{const n=t-e,i=Math.trunc(n/864e5),s=Math.trunc(n%864e5/36e5),a=Math.trunc(n%36e5/6e4);return i?`${y(i,"D")} ${y(s,"H")} ${y(a,"M")}`:s?`${y(s,"H")} ${y(a,"M")}`:a?`${y(a,"M")}`:void 0})(e.date_from,e.date_to)}</p>\n  </div>`)(e)}\n      <p class="event__price">\n        €&nbsp;<span class="event__price-value">${e.base_price}</span>\n      </p>\n      <h4 class="visually-hidden">Offers:</h4>\n      ${((e,t)=>{const n=$(e,t);return`<ul class="event__selected-offers">\n      ${e.offers.map((e=>(e=>`<li class="event__offer">\n    <span class="event__offer-title">${e.title}</span>\n    +€&nbsp;\n    <span class="event__offer-price">${e.price}</span>\n  </li>`)(h(e,n)))).join("")}\n    </ul>`})(e,n)}\n      <button class="event__favorite-btn ${e.isFavourite?"event__favorite-btn--active":""}" type="button">\n        <span class="visually-hidden">Add to favorite</span>\n        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"></path>\n        </svg>\n      </button>\n      <button class="event__rollup-btn" type="button">\n        <span class="visually-hidden">Open event</span>\n      </button>\n    </div>\n  </li>`;class q{constructor({point:e,destinationsList:t,offersList:n}){this.point=e,this.destinationsList=t,this.offersList=n}getTemplate(){return j(this.point,this.destinationsList,this.offersList)}getElement(){return this.element||(this.element=E(this.getTemplate())),this.element}removeElement(){this.element=null}}const F=document.querySelector(".page-header").querySelector(".trip-controls__filters"),I=document.querySelector(".page-main").querySelector(".trip-events"),N=new class{destinations=((e,t,n,i,s,a)=>Array.from(e,(e=>((e,t,n,i,s,a)=>({id:crypto.randomUUID(),description:m(a),name:s,pictures:L(e,t,n,i)}))(t,n,i,s,e,a))))(s,t.SRC,t.MIN_AMOUNT,t.MAX_AMOUNT,e,e);offers=((e,t,n,i,s,a)=>Array.from(e,(e=>((e,t,n,i,s,a)=>({type:e,offers:T(t,n,i,s,a)}))(e,t,n,i,s,a))))(u,r,p,a,o,l);points=((e,t,n,i,s,a)=>{const o=[];for(let l=0;l<e;l++){const e=m(t),r=m(n);o[l]=w(r.id,M(C(i,e).offers),e,s,a)}return o})(A,u,this.destinations,this.offers,n,i);getDestinations=()=>this.destinations;getOffers=()=>this.offers;getPoints=()=>this.points},B=new class{constructor({bigTripControlsFilters:e,bigTripPoints:t,pointsModel:n,pointTypes:i}){this.bigTripControlsFilters=e,this.bigTripPoints=t,this.pointsModel=n,this.pointTypes=i}init(){this.bigTripPointsList=document.createElement("ul"),this.bigTripPointsList.classList.add("trip-events__list"),this.bigTripPoints.appendChild(this.bigTripPointsList),this.destinationsList=this.pointsModel.getDestinations(),this.offersList=this.pointsModel.getOffers(),this.pointsList=this.pointsModel.getPoints(),P(new x({point:this.pointsList[0],destinationsList:this.destinationsList,offersList:this.offersList}),this.bigTripPointsList,"afterbegin"),P(new S,this.bigTripControlsFilters,D),P(new U,this.bigTripPointsList,"beforebegin");for(let e=1;e<this.pointsList.length;e++)P(new q({point:this.pointsList[e],destinationsList:this.destinationsList,offersList:this.offersList}),this.bigTripPointsList,D)}}({bigTripControlsFilters:F,bigTripPoints:I,pointsModel:N});B.init()})();
//# sourceMappingURL=bundle.7c17a08cb0a7cb01d0ac.js.map