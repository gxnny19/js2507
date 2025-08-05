// 상수에 기본함수를 정의한다.
const hi = function () {
    return "안녕"
}
console.log(hi)
console.log(typeof hi)

// 매개변수가 1개인 함수
let hi9 = function (user) {
    return `${user} 안녕9` 
}
console.log(hi9)
console.log(typeof hi9)

// 상수에 기본함수를 정의한다.
const hi8 = function (a, b) {
    return a + b;
}
console.log(hi8)
console.log(typeof hi8)

// ---------------------------------------

// case1 상수에 에로우 함수를 정의한다.
const hi2 = () => { return "안녕2" }
console.log(hi2)
console.log(typeof hi2)

// case2 상수에 에로우 함수를 정의한다.
const hi3 = () => { return "안녕3" }
console.log(hi3)
console.log(typeof hi3)

// case3 상수에 에로우 함수를 정의한다.
const hi4 = user => {`${user}님 안녕하세요.` }
console.log(hi4)
console.log(typeof hi4)

// ---------------------------------------

myFuntion = (a, b) => a + b
let result = myFuntion(4, 5)
console.log(`결과는 ${result}`)