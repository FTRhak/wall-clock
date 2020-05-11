export const hoursListNames = [
  'північ',
  'перша',
  'друга',
  'третя',
  'четверта',
  'пята',
  'шоста',
  'сьома',
  'восьма',
  'девсята',
  'десята',
  'одинадцята',
  'дванадцята',
  'тринадцята',
  'чотирнадцята',
  'пятнадцята',
  'шістнадцята',
  'сімнадцята',
  'вісімнадцята',
  'девятрадцята',
  'двадцята',
  'двадцять перша',
  'двадцять друга',
  'двадцять третя'
];
export const minutesListNames = (value: number) => {
  let res = '';
  if (value === 0) {
    res = ' рівно';
  } else if (value >= 10 && value <= 19) {

  } else {
    const t: any = value / 10;
    const p = value % 10;
    if (value >= 20) {
      if (parseInt(t, 10) === 2) {
        res += 'двадцять ';
      } else if (parseInt(t, 10) === 3) {
        res += 'тридцять ';
      } else if (parseInt(t, 10) === 4) {
        res += 'сорок ';
      }
    }
    if (p === 1) {
      res += 'одна хвилина';
    } else if (p === 2) {
      res += 'дві хвилини';
    } else if (p === 3) {
      res += 'три хвилини';
    } else if (p === 4) {
      res += 'чотири хвилини';
    } else if (p === 5) {
      res += 'пять хвилин';
    } else if (p === 6) {
      res += 'шість хвилин';
    } else if (p === 7) {
      res += 'сім хвилин';
    } else if (p === 8) {
      res += 'вісім хвилин';
    } else if (p === 9) {
      res += 'девять хвилин';
    }
  }
  return res;
}