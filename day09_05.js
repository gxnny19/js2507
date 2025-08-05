var myAdd = document.getElementById("myBtn");
myAdd.addEventListener("mouseover", myFunction);
myAdd.addEventListener("click", mySecondFunction);
myAdd.addEventListener("mouseout", myThirdFunction);

function myFunction() {
  document.getElementById("result").innerHTML += "마우스를 올렸어요!<br>";
}

function mySecondFunction() {
  document.getElementById("result").innerHTML += "클릭!<br>";
}

function myThirdFunction() {
  document.getElementById("result").innerHTML += "마우스를 내렸어요!<br>";
}