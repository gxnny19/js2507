// Bool 타입 사용
let a = true;
let b = false;
let c = 10 > 5
let d = Boolean(null)

// document.getElementById("result1").innerHTML = `--${a}--`
// document.querySelector("#result1").innerHTML = `==${b}==`
// document.querySelector("#result1").innerHTML = document.querySelector("#result1").innerHTML + `**${a}**`
// document.querySelector("#result1").innerHTML += `%%${a}%%`

let r1 = document.querySelector("#result1")
// 경우1
r1.innerHTML += `a값 + b값 + c값 + d값 = ${a} + ${b} + ${c} + ${d}`
// 경우2
r1.innerHTML = `a값 : ${a} <br>`
r1.innerHTML += `b값 : ${b} <br>`
r1.innerHTML += `c값 : ${c} <br>`
r1.innerHTML += `d값 : ${d} <br>`


// 사칙연산
let num1 = 10
let num2 = 3
let r2 = document.querySelector("#result2")
r2.innerHTML = `덧셈: num1: ${num1} + num2: ${num2} = ${num1 + num2}<br>`
r2.innerHTML += `뺄셈: num1: ${num1} - num2: ${num2} = ${num1 - num2}<br>`
r2.innerHTML += `곱셈: num1: ${num1} * num2: ${num2} = ${num1 * num2}<br>`
r2.innerHTML += `나눗셈: num1: ${num1} / num2: ${num2} = ${num1 / num2}<br>`