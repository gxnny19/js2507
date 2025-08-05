// 1부터 n까지 숫자를 더하는 함수
function calcSum(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    document.writeln(`<p style="text-align: center;">1부터 ${n}까지 더하면 ${sum}입니다.</p>`);
}
let userNumber = prompt("1부터 얼마까지 더할까요?");
if (userNumber !== null) {
    calcSum(parseInt(userNumber));
}




