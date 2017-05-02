var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
var arr = [2,1,333,11,1,2]
        // 1,2
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


suite.add('test1',function(){
    insertionSort(arr);
})
.add('test2',function(){
    arr.sort();
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run({ 'async': true });

