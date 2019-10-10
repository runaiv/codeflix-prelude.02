//const first = require("./ex01")
//const initial = require("./ex02")
//const last = require("./ex03")
//const rest = require("./ex04")
//const flatten = require("./ex05")
//const without = require("./ex06")
//const union = require("./ex07")
//const intersection = require("./ex08")
//const keys = require("./ex12")
//const values = require("./ex13")
//const invert = require("./ex15")
//const pick = require("./ex16")
const map = require("./ex21")






//console.log(first([5, 4, 3, 2, 1], 3))
//console.log(initial([5, 4, 3, 2, 1], 1))
//console.log(last([5, 4, 3, 2, 1], 4))
//console.log(rest([5, 4, 3, 2, 1], 2))
//console.log(flatten([1, [2], [3, [[4]]]], 4))
//console.log(without([1, 2, 1, 0, 3, 1, 4], 0, 1))
//console.log(union([1, 2, 3], [101, 2, 10], [2, 1]))
//console.log(intersection([1, 2, 3], [101, 2, 10], [2, 1]))
//console.log(keys({one : 1, two :  2, three : 3}))
//console.log(values({one : 1, two :  2, three : 3}))
//console.log(invert({Moe : "Mosses", Larry : "Louis", Curly : "Jeerome"}))
//console.log(pick({name : "Mosses", age : 50, userid : "moel"}, 'name', 'age'))
console.log(map({one : 1, two : 2, three : 3}, function(num, key){ return num * 3}))
