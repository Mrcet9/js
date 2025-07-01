/*
const a ={};
console.log(typeof a);

const element = new Set();
// add elements 
element.add(10);
element.add(20);
element.add(10);
element.add(40);
console.log(element);
//delete elements
element.delete(20);
element.delete(10);
console.log(element);

//to check  if the give element present or not
console.log(element.has(10));
console.log(element.has(20));
//to know how many elements present
console.log(element.size);
//to remove  all the property we have to use
element.clear();
console.log(element);*/
//dom - maniplate
document.title = "naik";
document.body.style.backgroundColor ="#748873";
//document.getElementById("v").innerHTML = "welcome javascript"
const v = document.getElementById("v");
console.log(v);
v.style.backgroundColor ="green";
v.style.textAlign ="center";
//class
const lang = document.getElementsByClassName("lang");
console.log(lang);

//lang[2].style.backgroundColor = "red";
for(const i of lang){
    i.style.backgroundColor = "red";
}




