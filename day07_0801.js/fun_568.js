// 호이스팅이 없는 let변수
let x = 10;

function display() {
    console.log(x)
    console.log(y)
    let y = 20;
}

display();