const hash = (string, max) => {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  return hash % max;
};

const HashTable = function() {
  let storage = [];
  const storageLimit = 4;

  this.print = function() {
    console.log(storage);
  };

  this.add = function addKeyValue(key, value) {
    let index = hash(key, storageLimit);
    console.log(index);
    // creates an index and stores data if there currently isn't any at current index
    if (storage[index] === undefined) {
      storage[index] = [[key, value]];
    
      // otherwise, go through the bucket at that index and check the key of each bucket. if any matches, overwrite it with current data
    } else {
      let inserted = false;
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          storage[index][i][1] = value;
          inserted = true;
        }
      }
      // if inserted is still false, that means none of the keys match and so we add a new key/value pair to that bucket.
      if (inserted === false) {
        storage[index].push([key, value]);
      }
    }
  };

  this.remove = function removeKeyValue(key) {
    let index = hash(key, storageLimit);
    if (storage[index].length === 1 && storage[index][0][0] === key) {
      delete storage[index];
    } else {
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          delete storage[index][i];
        }
      }
    }
  };

  this.lookup = function findKeyValue(key) {
    let index = hash(key, storageLimit);
    if (storage[index] === undefined) {
      return undefined;
    } else {
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          return storage[index][i][1];
        }
      }
    }
  }
};
