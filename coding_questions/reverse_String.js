const str = "Hello World"

// output = dlroW olleH
let text = ""
for(let i = str.length - 1; i >= 0; i--){
    text = text + str[i]
}
console.log(text)



// output = olleHdlroW
const new_str = str.split(" ")
let text = ""
for(let x of new_str){
    for(let i = x.length - 1; i >= 0; i--){
        text = text + x[i]
    }
}
console.log(text)


// using split and reverse
console.log(str.split("").reverse().join(""))