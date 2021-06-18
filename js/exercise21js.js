const div=document.getElementById("edit");
console.log(div);

div.addEventListener("dblclick",function()
{
const input=document.createElement("input");
input.type="text";
input.id="op";
div.appendChild(input);

});
const btn =document.createElement("input");
btn.type="button";
btn.value="Click once done";
btn.style.height="20px";
document.body.appendChild(btn)
