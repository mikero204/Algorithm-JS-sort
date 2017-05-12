var arr = [2,1,333,11,1,2]

//小排到大
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

//大排到小
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

//執行
arr.sortMin();
arr.sortMax();

function Select(arr){
    for(var i = 0;i<arr.length -1 ;i++){
        var min = i
        for(var j = i + 1 ; j<arr.length; j++){
            if(arr[j]<arr[min]){
                min = j
            }
        }
        if(min != i ){
            var temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
    }
    return arr;
}
var data = Select(arr)
console.log(data);