/**
 * Напишите функцию mergeNumbers(number), складывающую
 * все цифры числа number до тех пор, пока не получится
 * однозначный результат.
 *
 * Пример:
 * mergeNumbers(1) === 1
 * mergeNumbers(10001) === 2
 * mergeNumbers(15334232) === 5
 * mergeNumbers(50349814743854) === 2
 * @param number
 */
const mergeNumbers = (number) => {
  const str = number.toString().split("").map(Number);
  const summ = str.reduce((acc, numm) => {
    return acc + numm;
  }, 0);
  if (summ.toString().length > 1) {
    return mergeNumbers(summ);
  }
  return summ;
};
