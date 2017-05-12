//sleep sort

var arr = [23,34,5,2,4,3,2] 
var newarr = [];

// arr.forEach((num,i)=>{
//     return new Promise((resolve, reject) => {
//         setTimeout(function(){
//         newarr.push(num);
//         resolve();
//         },num) 
//     });
// }).then(function(){
//     console.log(newarr);
// })

arr.forEach((num,i)=>{
    setTimeout(function(){
        newarr.push(num);
        console.log(arr.length)
        // if(i==arr.length){
        //     console.log(newarr)
        // }
    },num)
})


// function sort(arr){
//     return new Promise((resolve,reject)=>{
//         arr.forEach(num=>{
//             setTimeout(function(){
//                 newarr.push(num);
//                 resolve();
//             },num)
//         })
//     })
// }
// sort(arr).then(function(){
//     console.log(newarr)
// }).then(function(){
//     console.log(newarr)