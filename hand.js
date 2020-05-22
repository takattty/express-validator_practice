const array = [
  { date: 'may', who: 'taka' },
  { date: 'april', who: 'tata' }
];
//console.log(array);//=>[ { date: 'may', who: 'taka' } ]

// array.forEach(value => {//これはちゃんと値の上書きがされる
//   value.date = 'march';
//   value.who = 'kaka';
// });

const newArray = array.map(value => {//map使った方が新しい配列作りやすいから楽かもね。
  const rb = {};
  const date = value.date;
  const _date = date.toUpperCase();
  rb.date = _date;
  return rb;
});

// for (const value of array) {//これだと今までの値に加えた処理を行う。つまり変更自体はしていない。
//   console.log(value);
//   value.date = 'march';
//   value.who = 'kaka';
//   console.log(value);
// }

console.log(newArray);
//console.log(array);