var d = document

let myName1 = ["*", "*", "*", "고객님"]
let hi = ["안녕하십니까"]

// 1. concat : "***고객님 안녕하십니까"
let result1 = myName1.concat(hi)
d.writeln(`concat: ${result1}<br><br>`)

// 2.join : "*_*_*_고객님 안녕하십니까"
let result2 = result1.join("_")
d.writeln(`join: ${result2}<br><br>`)

// 3.push : "*_*_*_고객님 안녕하십니까!"
let result3 = result1.push("!")
d.writeln(`push: ${result1} <br><br>`)

// 4. unshift : "수원역지점*_*_*_고객님 안녕하십니까!"
let result4 = result1.unshift("수원역지점")
d.writeln(`unshift: ${result1}<br><br>`)

// 5. pop : "수원역지점 *_*_*_고객님 안녕하십니까"
let result5 = result1.pop()
d.writeln(`pop: ${result1}<br><br>`)

// 6. shift : "*_*_*_고객님 안녕하십니까"
let result6 = result1.shift()
d.writeln(`shift: ${result1}<br><br>`)

// 7. splice : "*_*_*_고객님 오늘도 좋은하루 안녕하십니까"
let result7 = result1.splice(4, 0, "오늘도 좋은하루")
d.writeln(`splice: ${result1}<br><br>`)

// 8. slice : "*_*_*_"
let result8 = result1.slice(0, 3)
d.writeln(`slice: ${result8}<br><br>`)
