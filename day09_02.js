const para = document.createElement("p");
const node = document.createTextNode("이건 새로운 거예요.");
para.appendChild(node);
const element = document.getElementById("div1");

// case1
// element.appendChild(para);

// case2
const child = document.getElementById("p1");
element.insertBefore(para,child);