const Queue = function() {
  let back = 0;
  let front = 0;


  // Use an object with numeric keys to store values
  let storage = {};

  // Implement the methods below

  const enqueue = function(value) {
    storage[back] = value;
    back++;
  };

  const dequeue = function() {
    let result = storage[front];
    delete storage[front];
    front++;
    return result;
  };

  const size = function() {
    if (front <= back) {
      return back - front;
    } else {
      return 0;
    }
  };

  return {
    enqueue,
    dequeue,
    size
  }
};

let queue = Queue();

console.log(queue.size());

// back = 3       front = 1
// queue =     21     