/**
 * @param {string} s
 * @return {boolean}
 */

class Stack {
  constructor() {
    this.size = 0;
    this.storage = {};
  }

  push(val) {
    this.storage[this.size] = val;
    this.size += 1;
  }

  getCount() {
    return this.size;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }

    this.size -= 1;
    const result = this.storage[this.size];
    delete this.storage[this.size];
    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    const result = this.storage[this.size - 1];
    return result;
  }

  isEmpty() {
    if (this.size === 0) return true;
    return false;
  }
}

const isValid = (s) => {
  const stack = new Stack();

  // eslint-disable-next-line no-restricted-syntax
  for (const char of s) {
    if (char === '{' || char === '[' || char === '(') {
      stack.push(char);
    } else if (char === '}' || char === ']' || char === ')') {
      const top = stack.peek();
      if (
        (top === '{' && char === '}')
        || (top === '[' && char === ']')
        || (top === '(' && char === ')')
      ) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.isEmpty();
};

// const isValid = (s) => {
//   const stack = new Stack();

//   for (let i = 0; i < s.length; i++) {
//     const char = s[i];
//     if (char === '{' || char === '[' || char === '(') {
//       stack.push(char);
//     } else if (!stack.isEmpty() && char === '}' && stack.peek() === '{') {
//       stack.pop();
//     } else if (!stack.isEmpty() && char === ')' && stack.peek() === '(') {
//       stack.pop();
//     } else if (!stack.isEmpty() && char === ']' && stack.peek() === '[') {
//       stack.pop();
//     } else {
//       return false;
//     }
//   }

//   return stack.isEmpty();
// };

const s = '()[]()[]';
console.log(isValid(s));
