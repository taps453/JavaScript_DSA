const arr = [1,2,3,5,6]

let n = arr.length + 1;
const sum = n * (n + 1)  / 2

const arr_sum = arr.reduce((val, total) => {
    return val + total
})

console.log("Missing Number : " , sum - arr_sum)