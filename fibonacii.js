//fibonacii numbers are series of sum of number and previous number ie : 0,1,1,2,3,5,8,13,21,34,55,89

//lets fo this using goood old for loop
function forFibonacii(n){
    let fibonacii=[0,1]
    for(i=0;i<n-2;i++){
        fibonacii.push(fibonacii[i]+fibonacii[i+1])
    }
    return fibonacii

}
let fibonacii=[0,1,2]

function recursiveFibo(n){
    if (n<2) {
        return n
    }
    let newfib=recursiveFibo(n-1)
    let oldfib=recursiveFibo(n-2)
    if(newfib>fibonacii[fibonacii.length-2]){
        fibonacii.push(newfib+oldfib)
    }
    return oldfib+newfib
}
console.log(recursiveFibo(10))



console.log(fibonacii)