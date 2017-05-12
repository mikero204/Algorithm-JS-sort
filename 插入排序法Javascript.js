//Insertion Sort
var arr = [43,6,13,1,80,90]

function insert(arr){
    for(var i = 1 ; i < arr.length ; i++){
        var tmp = arr[i]
        for(var j = i ; j > 0 && tmp < arr[j-1] ; j--){
            arr[j] = arr[j-1]
        }
        arr[j] = tmp 
    }
    console.log(arr)
}

insert(arr)



var insertionSort = function(data){
    var i, j, tmp;
    for(i = 1; i < data.length; i++){
        tmp = data[i];
        for( j=i; j > 0 && tmp < data[j-1]; j-- ){
            data[j] = data[j-1];        
        }
        data[j] = tmp;
    }
    console.log(data)
};
insertionSort(arr);


