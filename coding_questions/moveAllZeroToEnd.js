const arr = [0, 1, 0, 2, 0, 3, 4, 0, 10]
let count = 0

for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
        arr[count] = arr[i]
        count++
    }
}

while (count < arr.length) {
    arr[count] = 0
    count++
}
console.log(arr)


// using extra space
const arr = [0,1,0,2,0,3,4,0,10]
const arr1 = []

for(let x of arr){
if(x !== 0){
arr1.push(x)
}
}
let n = arr.length - arr1.length

for(let i = 0; i < n; i++){
arr1.push(0)
}
console.log(arr1)