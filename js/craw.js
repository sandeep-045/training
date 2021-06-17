x=document.links
Array.from(x).forEach(function (element) {
    if (element.href.indexOf("codewithharry.com")!=-1)
    console.log(element.href);

    });
    