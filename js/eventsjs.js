document.getElementById("event-one").addEventListener('click',function(e)
{
document.getElementById("event-one").style.fontSize="40px";
console.log(e.offsetX);
});
document.getElementById("event-one").addEventListener('mouseover',function()
{
document.getElementById("event-one").style.color="red";
});
document.getElementById("event-one").addEventListener('mouseout',function(e)
{
    console.log(e);
    console.log("Event fired");
document.getElementById("event-one").style.color="transparent";
});

document.getElementById("btn").addEventListener('click',function(e)
{
    console.log(e);
    e.preventDefault();
    console.log("button clicked");
});