let userNumber = parseInt(prompt("숫자를 입력하세요"))

if (userNumber > 0)
    // 삼항연산자
    userNumber % 3 === 0 ? alert("3의 배수") : alert("3의 배수아님")
else
    alert("입력이 취소됐습니다.")