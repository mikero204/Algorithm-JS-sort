//Bubble Sort
var swap = function(data, i, j){ 
    var tmp = data[i];
    data[i] = data[j];
    data[j] = tmp;
};

var arr  = [2,3,66,7,5,3]



var bubbleSort = function(data){
    var flag = true;
    for(var i = 0; i < data.length - 1 && flag; i++){
        flag = false;
        for(var j = 0; j < data.length - i - 1; j++){
            if(data[j+1] < data[j]){
                var tmp = data[j+1]
                data[j+1] = data[j]
                data[j] = tmp
                flag = true;
            }
        }
    }
    console.error(data);
};  

bubbleSort(arr)