// 매개변수가 있는 즉시 실행 함수 만들기

// 익명 함수 __ 이름을 부를 필요가 없다.
(
    function (a, b) {
        sum = a + b;
        let userName = prompt("이름을 입력하세요.");
        document.writeln(
            `<p style="text-align: center; font-size: 24px;">
                안녕하세요? <span class="accent">${userName}</span>님! 반갑습니다!
            </p>`);

        // 100,200 = 마지막에 함수를 실행하기 위한 인수
    }(100, 200)());
document.writeln(`함수 실행 결과 : ${sum}`);