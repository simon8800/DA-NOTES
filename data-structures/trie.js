let Node = function() {
  this.keys = new Map();
  this.end = false;
  this.setEnd = function() {
    this.end = true;
  };
  this.isEnd = function() {
    return this.end;
  }
}

// let Trie = function() {

//   this.root = new Node();

//   this.add = function(input, node = this.root) {
//     if (input.length == 0) {
//       node.setEnd();
//       return;
//     } else if (!node.keys.has(input[0])) {
//       node.keys.set(input[0], new Node());
//     }
//   }
// }