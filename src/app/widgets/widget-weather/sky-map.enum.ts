export const SkyMapData = {
  storm: 'Шторм',

  cloud0: 'Соняшно',
  cloud1: 'Хмарно',
  cloud2: 'Сильна хмарність',
  cloud3: 'Сильна хмарність',
  cloud4: 'Сильна хмарність',
  cloud5: 'Сильна хмарність',

  osad0: 'Без опадів',
  osad1: 'Опади',
  osad2: 'Опади',
  osad3: 'Опади',
  osad4: 'Опади',
  osad5: 'Опади',

  rain1: 'Не великий дощ',
  rain2: 'Дощ',
  rain3: 'Дощ',
  rain4: 'Сильний дощ',
  rain5: 'Сильний дощ',

  snow1: 'Невеликий сніг',
  snow2: 'Невеликий сніг',
  snow3: 'Сніг',
  snow4: 'Сніг',
  snow5: 'Сильний сніг',
};

export const SkyMap = (value) => {
  const sky = value.split('-');
  let res = '';
  console.log(sky);
  sky.forEach(el => {
    res += (SkyMapData[el] ? SkyMapData[el] : '') + '. ';
  });
  return res;
};
