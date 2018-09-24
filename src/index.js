class Sorter {
  constructor() {
    myObject = [];
  }

  add(element) {
    myObject.add(element);
  }

  at(index) {
    // your implementation
  }

  get length() {
    // your implementation
  }

  toArray() {
    return myObject.toArray();
  }

  sort(indices) {
    // your implementation
  }

  setComparator(compareFunction) {
    // your implementation
  }
}

module.exports = Sorter;