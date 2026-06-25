const str = "aabbbcc"
const dict = {}

for(let x of str){
    if(dict[x]){
        dict[x]++
    }else {
        dict[x] = 1
    }
}
// console.log(dict)

let text = ""
for(let key in dict){
    text = text + key + dict[key]
}
console.log(text)