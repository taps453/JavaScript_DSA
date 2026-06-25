const arr = [1,2,3,4]
const arr1 = [5,6,7,8,9]

// using while loop
let left = 0, right = arr.length - 1
while(left < right){
    let temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp

    left++
    right--
}
console.log(arr)


// using reverse Keyword
console.log(arr1.reverse())

