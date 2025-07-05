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
Array.from(lang).forEach((ele) => {
    ele.style.textTransform = "uppercase";
});

const h1Element = document.getElementsByTagName("h1");
console.log(h1Element);
h1Element[1].style.backgroundColor = '#093FB4'

for(const i of h1Element){
    i.style.backgroundColor = "#093FB4"
}*/

//const { Children } = require("react");

// for loop
/*
for(let i = 0; i < populations.length; i++) {
    console.log(populations[3]);
}

for(let i in populations){
    console.log(populations.length-1);
    
}

const populations = [100, 1200, 300, 400];

for(let i = 0; i < populations.length; i++) {
  console.log(populations[2]);
}
const indian = [100, 55, 77,88]
for (let i = 0; i < indian.length; i++) {
    console.log(indian[3]);
    
}

// Select all ul and ol elements
const listElements = document.querySelectorAll("ul, ol");

listElements.forEach(list => {
  list.style.listStyle = "none";  
  console.log(list);
});
const olElements = document.querySelectorAll("ol");

olElements.forEach(olElement => {
    olElement.style.listStyle = "none";
    console.log(olElement);
});

const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElement => {
      ulElement.style.listStyle = "none";
      console.log(ulElements);
    

});

const fe = document.getElementById("fe");
console.log(fe);
fe.firstElementChild.style.background = "blue";

const be = document.getElementById("be");
console.log(be);
be.lastElementChild.style.backgroundColor ="green";
be.firstElementChild.style.textAlign = "center";
const html = document.querySelector(".h")
html.nextElementSibling.style.backgroundColor = "red";
const css = document.querySelector(".c")
css.nextElementSibling.style.backgroundColor = "violet";
const go = document.querySelector(".g");
go.previousElementSibling.style.backgroundColor = "red";
const python = document.querySelector(".py");
//python.previousElementSibling.style.backgroundColor = "cyan"
python.parentElement.style.backgroundColor = "lightgreen"
const Children =  be.children;
for(const ele of Children){
    ele.style.fontSize = "150px";
}

const parentElement = document.getElementById('fe');
    const Children1 = Array.from(parentElement.children);


        for (const ele of Children1) {
            ele.style.fontSize = "150px";
        }

const h1 = document.getElementById("main");
console.log(h1);
h1.textContent = "this js";


const p = document.querySelector("p");
p.textContent = "THIS WEBSITES IS JS CORESES"

const h2 = document.querySelector("h2");
h2.innerHTML ="<i>this is h2 tags</i>";

//read the content
console.log(h1.textContent);
console.log(p.textContent);
//create elements
const h1 = document.createElement("h1");
console.log(h1);
//set attribute
h1.setAttribute("class","main");
console.log(h1);
h1.style.fontSize ="100px"
h1.textContent = "welcome to js";
document.body.append(h1);
//adding image
const img = document.createElement("img");
img.setAttribute("src","download.jpg");
img.setAttribute("alt","pokmen series")
console.log(img);
const container =  document.querySelector(".container");
container.appendChild(img)

//events 
const btn = document.getElementById("btn");
console.log(btn);
function btnEvent (){
    document.body.style.backgroundColor ="blue";
    btn.textContent = "👨‍🦲"
}
btn.addEventListener("click",btnEvent);
btn.addEventListener("dbclick",() => {
    btn.textContent = "double click";
})

//mouseevents
const span  = document.querySelector("span");
console.log(span);
span.addEventListener("mouseover", (event) =>{
    event.target.style.backgroundColor ="green";
    span.style.fontSize ="100px";
    span.textContent = "react";

});

span.addEventListener("mouseout", (event) =>{
    event.target.textContent = "REACT CONCEPT"
});
//key events

const key = document.querySelector("#key");

key.addEventListener("keyup", (event) => {
    event.target.style.backgroundColor = "gr";
    event.target.textContent = `The key you entered is "${event.key}"`;
    console.log(event.key);
});
const value = document.querySelector(".value");
const increment = document.querySelector(".in");   // assuming button has class="in"
const reset = document.querySelector(".re");       // assuming button has class="re"
const decrement = document.querySelector(".de");   // assuming button has class="de"

let count = 0;

function updateValue() {
  value.textContent = count;
}

increment.addEventListener("click", () => {
  count++;
  updateValue();
});

decrement.addEventListener("click", () => {
  count--;
  updateValue();
});

reset.addEventListener("click", () => {
  count = 0;
  updateValue();
});

// Initialize display
updateValue();*/

//*es6
//array
/*
let num = [10,20,30,40]
const a = num[0];
const b = num[1];
const c = num[2];
const d = num[num. length-1];
console.log(a);
console.log(b);
console.log(c);
console.log(d);
//destructuring 
const [p,q,r,s]=num;
console.log(p);
console.log(q);
console.log(r);
console.log(s);
//skip value
const [x, ,y,z] = num;
console.log(x);
console.log(y);
console.log(z);
////destructuring array
const array = ["js","java","c"]
console.log(array[1]);
console.log(array);
console.log(array[0]);
console.log(array[2]);
//swap value 
let a1 = 10;
let a2 = 20;
//let temp = a1;
//a1 = a2;
//a2 = temp;
//console.log(a1);
//console.log(a2);
//with destructuring applying array and object
[a1,a2] = [a2 ,a1];
console.log(a2);
console.log(a1);
//nested destructuring
const lang = ["html","css",["js","python"]];
const [ht,cs,[,py]] = lang;
console.log(ht);
console.log(py);
console.log(cs);

const n = ["cse","ece",["mec","it"],"Ai"]
const [cse,,[,it],Ai] = n;
console.log(cse)
console.log(it);
console.log(Ai);
const student = {
    firstName:"narasimha",
    lastName:"naik",
    isMarried:false,
    job:true
 }
 //const {firstName, isMarried}  = student;
 //console.log(firstName);
 //console.log(isMarried);
 const {firstName:surname,lastName:name,isMarried:status} = student;
 console.log(surname,name,status);

const fullName = (student) => {
    console.log(student.firstName + student["lastName"]);
    
 };
fullName(student);

const  namestudent = ({firstName,lastName}) => {
    console.log(firstName + lastName);
    
}
namestudent(student);

const checkStatus = ({ isMarried }) => {
  if (isMarried) {
    console.log("Married");
  } else {
    console.log("Single");
  }
};

*/
const n1 = [10,20];
console.log("n1 elements ",n1);
const n2 = ["naik",true]
console.log("n2 elments",n2);
//copying of array
const newN1 = [...n1];
console.log("copy of n1 array:",newN1);
//combining  multiple  array
const n = [...n1, ...n2, ...n1, ...n2];
console.log(n);
//using spread for arguments
const display =(n,m) => {
  console.log(n,m);
  
}
display(...n);
// Object with properties and method using old syntax
const persons = {
  firstName: "narasi",
  lastName: "naik",
  study: "btech",
  fullName: function() {
    console.log(this.firstName + " " + this.lastName);
  }
};

// Using Object.keys() and Object.values()
console.log(Object.keys(persons));   // ["firstName", "lastName", "study", "fullName"]
console.log(Object.values(persons)); // ["narasi", "naik", "btech", function() {...}]

// Old way of defining methods:
const oldWay = {
  fullName: function() {
    console.log(this.firstName + " " + this.lastName);
  }
};

// New shorthand way for methods (ES6+)
const personsNew = {
  firstName: "narasi",
  lastName: "naik",
  name() {
    console.log(this.firstName + " " + this.lastName);
  }
};

// Calling methods
persons.fullName();  // Output: narasi naik
personsNew.name();   // Output: narasi naik
//copy object
const student = {...persons};
console.log(student);






