// ! document.getElementById() -> element
const judul = document.getElementById("judul");
judul.innerHTML = "Hallo Farhan";

// ! document.getElementsByTagName() -> HTML COllections
const p = document.getElementsByTagName("p");
p[1].style.backgroundColor = "pink";

// ! document.querySelector() -> element
const li2 = document.querySelector("section#b ul li:nth-child(2) ");
li2.style.backgroundColor = "pink";

// ! document.querySelectorAll() -> Node list
