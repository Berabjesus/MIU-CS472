String.prototype.filter = function (arr) {
  return this.toString().split(' ').filter(word => arr.indexOf(word) === -1).join(" ");
}

Array.prototype.bubbleSort = function () {
  for(let i = 0; i < this.length; i++){     
    for(let j = 0; j < ( this.length - i -1 ); j++){
      if(this[j] > this[j+1]){         
        let temp = this[j]
        this[j] = this[j + 1]
        this[j+1] = temp
      }
    }
  }
  return this;
}
