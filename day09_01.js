let myBtn = document.getElementById("myBtn")
let myBtn2 = document.getElementById("myBtn2")
let result = document.getElementById("result")
let result2 = document.getElementById("result2")

// function displayDate() {
//     result.innerHTML = Date();
// }
// case1 이벤트 리스너가 클릭이벤트를 듣고 있다가,
// 이벤트가 발생하면 displayDate 함수를 실행한다.
// myBtn.addEventListener("click", displayDate)

// case2 이벤트 리스너가 클릭이벤트를 듣고 있다가,
// 이벤트가 발생하면 익명함수를 즉각 실행한다.
// myBtn.addEventListener("click", function () {
// alert("Hello World!");
// })

// case3 이벤트 리스너가 클릭이벤트를 듣고 있다가,
// 이벤트가 발생하면 흐름의 순서대로 함수를 실행한다.
function myFunction() {
  alert ("안녕하세요!");
}

function someOtherFunction() {
  alert ("반가워요!");
}
myBtn.addEventListener("click", myFunction);
myBtn.addEventListener("click", someOtherFunction);

// case4 오버, 아웃, 클릭이벤트를 리스너에 등록
// function myMOver() {
//     result2.innerHTML = "마우스 오버"
// }

// function myMClick() {
//     result2.innerHTML = "마우스 클릭"
// }
// function myMOut() {
//     result2.innerHTML = "마우스 아웃"
// }
// myBtn2.addEventListener("mouseover", myMOver)
// myBtn2.addEventListener("click", myMClick)
// myBtn2.addEventListener("mouseout", myMOut)