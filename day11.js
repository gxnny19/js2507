const person1 = {
    myName : "경건이",
    age : 21,
    eyeColor : "black"
}

// const person2 = new Object()
const person2 = new Object({
    myName2: "경건이2",
    age2: 20,
    eyeColor2: "blue"
})


// 기존Obj
const person3 = {
    myName2: "경건이3",
    age2: 25,
    eyeColor2: "red"
}

// 새로운 Obj
const man = Object.create(person3);
// man.myName
man.myName = "경건"
man.etc = "etc"

// ------------------------
const fruits = [
    ["apples", 300],
    ["pears", 900],
    ["bananas", 500]
]
const myObj = Object.fromEntries(fruits);
myObj.etc = "etc"

// assign ----------------------
const person5 = {
    myName : "경건이",
    age : 19,
    eyeColor : "black"
}
const person6 = {
    myName : "Gxnny",
    age : 15
}
// assign(){행위를 정의해준다} 매소드
Object.assign(person5, person6)
// person5의 값이 변경됨을 확인하자

// ---------------------------------
function Person9(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
const woman1 = new Person9("민지", "김", 20, "yellow")