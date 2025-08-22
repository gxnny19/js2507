let r3 = document.querySelector("#result3")
let r3_2 = document.querySelector("#result3_2")
// var walkAmount = prompt("당신의 하루 걷는 양은 몇 보인가요?", "0")
let walkAmount = 800
if(walkAmount >= 10000){
    r3.innerHTML = "매우 좋은 습관이네요! <hr>"
} else {
    r3.innerHTML = "걷는 습관은 건강에 좋아요. <hr>"
}

// ----------------------------------------------------------------

let walkAmount2 = 800

if (walkAmount2 >= 10000) {
    r3_2.innerHTML = "하루에 만보이상 걸으시는군요. 훌륭합니다!"

} else if (walkAmount2 >= 8000 && walkAmount2 < 10000) {
    r3_2.innerHTML = " 8000이상인 당신, 하루 만보 걷기 습관을 추천~!"

} else if (walkAmount2 >= 3000 && walkAmount2 < 8000) {
    r3_2.innerHTML = " 3000이상인 당신, 하루 만보 걷기 습관을 추천~!"

} else if (walkAmount2 >= 1000 && walkAmount2 < 3000) {
    r3_2.innerHTML = " 1000이상인 당신, 하루 만보 걷기 습관을 추천~!"

} else {
    r3_2.innerHTML = "건강이 걱정됩니다 ㅜ.ㅜ 산책 추천~!"
}
r3_2.innerHTML += `<hr>`
// ------------------------------------------------------------
// switch 문은 조건에 맞는 case로 바로 분기한다.

let r3_3 = document.querySelector("#result3_3")
r3_3.innerHTML = "test <hr>"
// let site = "."

// switch (site) {
//     case "구글":
//         url = "www.google.com"
//         break;
//          case "다음":
//         url = "www.daum.net"
//         break;
//          case "네이버":
//         url = "www.naver.com"
//         break;
//          case "네이트":
//         url = "www.nate.com"
//         break;
//     default:
//         alert("보기 중에 없는 사이트입니다.")
//         break;
// }
// if (url) location.href = "http://" + url;

//---------------------------------
let r3_4 = document.querySelector("#result3_4")
r3_4.innerHTML = "test"

let i = 1
let sum = 0
while (i <= 10) {
    i++
    console.log(i)

    sum += i
    console.log(sum)
}
r3_4.innerHTML = `i변수 값은${i} <br>`
r3_4.innerHTML += `sum합계 값은 ${sum}`