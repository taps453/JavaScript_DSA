const str1 = "Listen"
const str2 = "Silent"

const new_str1 = str1.toLowerCase().split("").sort().join("")
const new_str2 = str2.toLowerCase().split("").sort().join("")

console.log(new_str1 === new_str2 ? "anagram": "not anagram")