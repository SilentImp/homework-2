const task = require('../task-1.js');
const inputList = [
  ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"],
  ["Чупакабра"],
  ["Сальвадор Феліп Жасінт Далі і Доме́нек"],
  ["1 Батько", "2 Батько", "10 Батько"],
];
const outputList = [
  ["Г.П.А.", "П.О.І.", "Р.А.О."],
  ["Ч."],
  ["С.Ф.Ж.Д.і.Д."],
  ["1.Б.", "1.Б.", "2.Б."],
];

inputList.map((input, index) => {
  test(`${input} має перетворитися на ${outputList[index]}`, () => {
    expect(task(input)).toEqual(outputList[index]);
  });
});