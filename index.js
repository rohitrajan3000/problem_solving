let arr = [1,4,2,7,9,4,34,6,8,3,8];
let max = arr[0];
for(let i=1;i<arr.length;i++){
    if(arr[i] > max){
        max = arr[i]
    }
}
console.log(max);

let smax = arr[0];
for( j=1;j<arr.length ; j++){
    if(arr[j]>smax && arr[j]<max){
        smax = arr[j]
    }
}
console.log(smax)


function cheaksort(){
    let arr = [1,2,3,4,5,6,7,8,9];

    for(let i=0;i<arr.length-1;i++){
        if(arr[i] < arr[i+1] ){
        
        }else{
           return false
        }
    }
    return true;
} 

console.log(cheaksort())