let n = 5

// for(let i = 0; i < n; i++){
//     console.log("* ".repeat(i+1))
// }

// or

for(let i = 1; i <= n; i++){
    let text = ""
    for(let j = 1; j <= i; j++ ){
        text += "* "
    }
    console.log(text)
}