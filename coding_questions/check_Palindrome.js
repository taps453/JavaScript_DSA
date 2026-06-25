const word = "Madam"

// using While loop
let left = 0
let right = word.length - 1
let flag = true

while(left < right) {
    if(word.toLowerCase()[left] !== word.toLowerCase()[right]){
        console.log("Not Palindrome")
        flag = false
        break
    }
    left++
    right--
}
if(flag){
        console.log("Palindrome")
    }



// using split and reverse
if(word.toLowerCase() === word.toLowerCase().split("").reverse().join("")) {
    console.log("Palindrome")
}else {
    console.log("Not Palindrome")
}


//Or

console.log(word.toLowerCase() === word.toLowerCase().split("").reverse().join("") ? "Palindrome" : "Not Palindrome")