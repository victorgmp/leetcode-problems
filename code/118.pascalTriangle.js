/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = (numRows) => {
  const triangle = [];

  if (numRows === 0) return triangle;

  triangle.push([1]);

  for (let i = 1; i < numRows; i++) {
    const prevRow = triangle[i - 1];
    const newRow = [];

    newRow.push(1);

    for (let j = 1; j < prevRow.length; j++) {
      newRow.push(prevRow[j - 1] + prevRow[j]);
    }

    newRow.push(1);
    triangle.push(newRow);
  }

  return triangle;
};

console.log(generate(5));
