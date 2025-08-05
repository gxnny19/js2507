// Define ---------------
// 전역변수 정의
var sum = 0

// 함수 정의
function addNumber(){
    sum = 10 + 20 
    var result = 10 + 20
}

// 구현
// 함수 사용
addNumber()
// 출력
console.log(`전역변수: ${sum}`)
console.log(`지역변수: ${result}`)