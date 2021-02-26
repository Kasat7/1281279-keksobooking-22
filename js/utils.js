// Результат: целое число из диапазона "от...до"
const getRandomNumber = (min, max) => {
  min = Math.ceil(min); // вычисляет и возвращает наименьшее целое число, которое больше или равно переданному числу (округляет число вверх)
  max = Math.floor(max); // вычисляет и возвращает наибольшее целое число, которое меньше или равно переданному числу (округляет число вниз)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Результат: число с плавающей точкой из диапазона "от...до" с указанным "количеством знаков после запятой"
const getFractionNumber = (min, max, dotNumber) => {
    return (Math.random() * (max - min) + min).toFixed(dotNumber);
}

// Случайный элемент массива
const getRandomElementFromArray = (elements) => {
  return elements[getRandomNumber(0, elements.length - 1)];
}

// Массив с случайными значениями
const randomCutArr = (arr) => {
  const copyArr = arr.slice(getRandomNumber(1, arr.length - 1));
  const length = getRandomNumber(0, copyArr.length);
  copyArr.slice(0, length);
  return copyArr;
};

export {
  getRandomNumber,
  getFractionNumber,
  getRandomElementFromArray,
  randomCutArr
};
