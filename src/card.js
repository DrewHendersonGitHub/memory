export default function Card(previous) {
  this.previous = previous;
}

Card.prototype.compare = function(current) {
  if (this.previous === current) {
    return true;
  }
  return false;
};



// setTimeout(function(){
//   code goes here
//   }, 1000)