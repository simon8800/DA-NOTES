// Given a non-empty array of integers,
// every element appears twice except for one.
// Find that single one.

var singleNumber = function(nums) {
  // this will keep track of duplicates
  let tracker = {};

  for (let i = 0, len = nums.length; i < len; i++) {
    if (tracker[nums[i]]) {
      // if we come across something
      // that exists in obj, delete it
      delete tracker[nums[i]]
    } else {
      // first time encounter it
      // add to tracker
      tracker[nums[i]] = 1;
    }
  }
  // only one key/value pair remains
  return Object.keys(tracker)[0];
}