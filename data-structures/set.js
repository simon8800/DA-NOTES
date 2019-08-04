// Sets

function mySet() {
  // this will hold the set
  var collection = [];
  
  // this method will return true or false
  this.has = function(element) {
    return (collection.indexOf(element) !== -1);
  }

  // this method will return all the values in the set
  this.values = function() {
    return collection;
  }

  // this method will add an element to the set
  this.add = function(element) {
    if(!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  }

  // this method will remove an element from a set
  this.remove = function(element) {
    if (this.has(element)) {
      index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  }

  // this method will return the size of the collection
  this.size = function() {
    return collection.length;
  }

  // this method will return the union of two sets as a new set
  this.union = function(otherSet) {
    let unionSet = new mySet();
    var firstSet = this.values();
    var secondSet = otherSet.values();
    firstSet.forEach(e => unionSet.add(e));
    secondSet.forEach(e => unionSet.add(e));
    return unionSet;
  }

  // this method will return the intersection of two sets as a new set
  this.intersection = function(otherSet) {
    let intersectionSet = new mySet();
    let firstSet = this.values();
    firstSet.forEach(element => {
      if (otherSet.has(element)) {
        intersectionSet.add(element);
      }
    });
    return intersectionSet;
  }

  // this method will return the difference of two sets as a new set
  this.difference = function(otherSet) {
    let differenceSet = new mySet();
    let firstSet = this.values();
    firstSet.forEach(element => {
      if (!otherSet.has(element)) {
        differenceSet.add(element);
      }
    });
    return differenceSet;
  }

  // this method will test if the set is a subset of a different set
  this.subset = function(otherSet) {
    let firstSet = this.values();
    return firstSet.every(value => otherSet.has(value));
  }
}

var setA = new mySet();
var setB = new mySet();
setA.add("a");
setB.add("a");
setB.add("b");
setB.add("c");
setB.add("d");
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());