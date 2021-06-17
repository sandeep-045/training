function validateform()
{
    let x=document.forms['myform']['name'].value;
    console.log(x);
    if (x.length>7)
        document.getElementById("ps").innerHTML="large text"
    else
        document.getElementById("ps").innerHTML="small text"

}