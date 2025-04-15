type Custom = {
  size: 'small' | 'normal' | 'large',
  sauce: 'tomato' | 'teriyaki',
  ingredients?: 'chicken' | 'shrimp',
  topping?: 'basil' | 'salami' | 'corn'
};

const pizza1: Custom = {
  size: 'normal',
  sauce: 'teriyaki',
  ingredients: 'chicken',
}
const pizza2: Custom = {
  size: 'large',
  sauce: 'tomato',
  topping: 'salami'
}

// type Custom = {
//   size: 'small' | 'normal' | 'large',
//   sauce: 'tomato' | 'teriyaki',
//   ingredients: 'chicken' | 'shrimp',
//   topping: 'basil' | 'salami' | 'corn'
// };

// const pizza1: Custom = {
//   size: 'normal',
//   sauce: 'teriyaki',
//   ingredients: 'chicken',
// }
// const pizza2: Custom = {
//   size: 'large',
//   sauce: 'tomato',
//   topping: 'salami'
// }