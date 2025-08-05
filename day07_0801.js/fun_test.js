// (name, age) = 매개변수
function greet(name, age) {
  return "안녕하세요 " + name + "님! 당신은 " + age + "세 입니다.";
}

document.getElementById("demo").innerHTML = greet("홍길동", 21);
// (홍길동, 21) = 인수