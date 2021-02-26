import {
  getRandomNumber,
  getFractionNumber,
  getRandomElementFromArray,
  randomCutArr
} from './utils.js';

const TOTAL_ADS = 10;

const OFFER_TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow'
];

const OFFER_TIME = [
  '12:00',
  '13:00',
  '14:00'
];

const OFFER_FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const OFFER_PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg'
];

const TITLE = [
  'Большая квартира',
  'Маленькая квартира',
  'Огромный дворец',
  'Маленький дворец',
  'Красивый домик',
  'Некрасивый домик',
  'Уютное бунгало',
  'Неуютное бунгало'
];

const DESCRIPTION = [
  'Уютно и по выгодной цене',
  'Дорого, зато красиво',
  'Близко к морю',
  'Без ремонта, но дешево'
]

const generateSimilarAds = () => {
  const LOCATION_X = getFractionNumber(35.65000, 35.70000, 5);

  const LOCATION_Y = getFractionNumber(139.70000, 139.80000, 5);

  const similarAds = {
    author: {
      avatar: `img/avatars/user0${getRandomNumber(1, 8)}.png`,
    },
    location: {
      x: LOCATION_X,
      y: LOCATION_Y,
    },
    offer: {
      title: getRandomElementFromArray(TITLE),
      address: LOCATION_X + ', ' + LOCATION_Y,
      price: getRandomNumber(1000, 20000),
      type: getRandomElementFromArray(OFFER_TYPE),
      rooms: getRandomNumber(1, 7),
      guests: getRandomNumber(2, 10),
      checkin: getRandomElementFromArray(OFFER_TIME),
      checkout: getRandomElementFromArray(OFFER_TIME),
      features: randomCutArr(OFFER_FEATURES),
      description: getRandomElementFromArray(DESCRIPTION),
      photos: getRandomElementFromArray(OFFER_PHOTOS)
    },
  };

  return similarAds;
}

const generateArraySimilarAds = (counter) => {
  return new Array(counter).fill(null).map(() => generateSimilarAds());
}

export {
  generateArraySimilarAds,
  TOTAL_ADS
};
