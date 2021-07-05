const strArr = ['X:-1', 'Y:1', 'X:-4', 'B:3', 'X:5'];

const fn1 = (ele) => {
  const object = {};
  const [key, value] = ele.split(':');
  object[key] = Number(value);
  return object;
};

// const fn2 = (base, ele) => {
//   const [key] = Object.keys(ele);
//   const value = ele[key];

//   let total = base.find((t) => t[key] !== undefined);

//   if (!total) {
//     total = {};
//     total[key] = value;

//     return [...base, total];
//   }

//   total[key] += value;
//   return base;
// };
const fn2 = (base, ele) => {
  const [key] = Object.keys(ele);
  const value = ele[key];

  if (!base[key]) {
    base[key] = 0;
  }

  base[key] += value;

  return { ...base };
};

// const fn3 = (ele) => Object.values(ele)[0] > 0;

const fn3 = (ele) => {
  let result = '';
  // for (const key in ele) {
  //   if (ele[key] !== 0) {
  //     const label = key;
  //     const value = ele[key];

  //     if (result === '') {
  //       result = `${label}:${value}`;
  //     } else {
  //       result = `${result},${label}:${value}`;
  //     }
  //   }
  // }

  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of Object.entries(ele)) {
    if (value !== 0) {
      if (result === '') {
        result = `${key}:${value}`;
      } else {
        result = `${result},${key}:${value}`;
      }
    }
  }

  return result;
};

// const fn4 = (base, ele) => {
//   const [key] = Object.keys(ele);
//   const value = ele[key];

//   if (base === '') {
//     return `${key}:${value}`;
//   }

//   return `${base},${key}:${value}`;
// };

const tr1 = strArr.map(fn1);
const tr2 = tr1.reduce(fn2, []);
// const tr3 = tr2.filter(fn3);
const tr3 = fn3(tr2);
// const tr4 = tr3.reduce(fn4, '');

console.log('TR1', tr1);
console.log('TR2', tr2);
console.log('TR3', tr3);
// console.log('TR4', tr4);
