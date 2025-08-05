// 정의 addNumber(변수, 변수)
function addNumber(num1, num2){
    let sum = num1 + num2;
    return sum;
}
// 구현
// addNumber(값, 값)
// result : 함수에서 return된 값을 받는다. 
let result = addNumber(2, 3);
let result2 = addNumber(3, 4);
let result3 = addNumber(7, 8);
let result4 = addNumber(10, 20);

// 출력
console.log(`두 수를 더한 값: ${result}`);
console.log(`두 수를 더한 값: ${result2}`);
console.log(`두 수를 더한 값: ${result3}`);
console.log(`두 수를 더한 값: ${result4}`);
