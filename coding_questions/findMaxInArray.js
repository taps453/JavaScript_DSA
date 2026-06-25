const arr = [10,20,40,30,50,15]

// using math.max()
console.log(Math.max(...arr))

// using for loop

let max = arr[0]
for(let i = 1; i < arr.length - 1; i++) {
    if(arr[i] > max){
        max = arr[i]
    }
}
console.log(max)