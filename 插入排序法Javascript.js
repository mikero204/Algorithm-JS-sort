//Insertion Sort
var arr = [8,7,4,5,6]
           
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
