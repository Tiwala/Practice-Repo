// LET'S GO DIDN'T HAVE TO DO COMPLICATED SHIT
const Stack = function() {
  let currentIndex = -1;

  // Use an object with numeric keys to store values
  let storage = {};

  // Implement the methods below
  const push = (value) => {
    currentIndex++
    storage[currentIndex] = value;
  };

  const pop = () => {
    if (currentIndex >= -1) {
      let result = storage[currentIndex];
      delete storage[currentIndex];
      currentIndex--
      return result;
    }
  };

  const size = () => {
    if (currentIndex >= -1) {
    console.log(currentIndex + 1);
    return currentIndex + 1;
    } else {
      return 0;
    }
  };

  return {
    push,
    pop,
    size
  }
};

let stack = Stack()
stack.push('a')
console.log(stack.storage)
console.log(stack.pop())
stack.size()


// currentIndex = -1
// stack =    