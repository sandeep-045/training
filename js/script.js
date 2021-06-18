let element=document.createElement('p');
element.id="para";
element.style.color="yellow";
element.style.backgroundColor="red";
element.innerHTML="Hey i am the element added";
let element2=document.createElement('p');
element2.id="para2";
element2.style.backgroundColor="linen";
element2.style.innerText="hey i am the element 2 added";

const square=document.createElement("div");
square.style.backgroundColor="red";
square.style.height="100px"; 
square.style.width="100px";

const child1 = document.getElementById("first");
child1.appendChild(element);    
child1.appendChild(element2);
child1.appendChild(square);

const body=document.body;
const a=document.createElement('a');
a.innerText="redirect";
a.setAttribute('href','https://www.youtube.com');


body.appendChild(a);