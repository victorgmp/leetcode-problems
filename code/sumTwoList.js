const l1 = [5, 6, 3];
const l2 = [2, 5, 7];

const sumTwoList = (l1, l2) => {
  let carry = 0;
  let total = [];

  for (let i = l1.length - 1; i >= 0; i--) {
    const sum = (l1[i] + l2[i]);

    if (sum >= 10) {
      total[i] = carry
        ? carry + (sum % 10)
        : sum % 10;
      
      carry = Math.floor(sum / 10);
    } else {
      total[i] = carry
        ? carry + (l1[i] + l2[i])
        : l1[i] + l2[i];
      
      carry = 0;
    }
  }
  return total;
};

 console.log(sumTwoList(l1, l2));
