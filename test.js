
var arr = [2,1,333,11,1,2]

Array.prototype.sortMin = function(){
  for(var i = 0 ; i<this.length;i++){
     var min = i 
        for(var j = i+1 ; j < this.length ; j++){
            if(this[j]<this[min]){
                min = j
            }
        }
      if(min != i ){
      var temp = this[i]
      this[i] = this[min]
      this[min] = temp; 
      }    
  }
  console.log(this);
}

Array.prototype.sortMax = function(){
  for(var i = 0 ; i<this.length;i++){
     var min = i 
        for(var j = i+1 ; j < this.length ; j++){
            if(this[j]>this[min]){
                min = j
            }
        }
      if(min != i ){
      var temp = this[i]
      this[i] = this[min]
      this[min] = temp; 
      }    

  }
  console.log(this);
}




arr.sortMin();
arr.sortMax();
