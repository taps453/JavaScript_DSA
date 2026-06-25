const arr = [1,3,4,5,2,1,2,3]

// Find Duplicate
const find_Duplicate = arr.filter((val, index) => {
    return arr.indexOf(val) !== index
})
console.log(find_Duplicate)


// using frequency
const dict = {}
for(let x of arr) {
    if(dict[x]){
        dict[x]++
    }else {
        dict[x] = 1
    }
}

for(let key in dict){
    if(dict[key] > 1){
        console.log(key)
    }
}
// console.log(dict)




// Remove Duplicate
const removeDuplicate = arr.filter((val, index) => {
    return arr.indexOf(val) === index
})
console.log(removeDuplicate)


// using Set
const new_array = [...new Set(arr)]
console.log(new_array)