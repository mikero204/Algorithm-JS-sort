//Bubble Sort


var arr = [5,6,3,2,1]
function BubbleSort(arr){
    for(var i = 0 ; i<arr.length;i++ ){
        for(var j = 0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    console.log(arr);
}

BubbleSort(arr);
