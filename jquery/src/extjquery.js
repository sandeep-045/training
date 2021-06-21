
$(document).ready(function () {                         //shorthand syntax is $(function(){})
    //code is executed after the complete dom is executed 

    console.log("Welcome to Jquery");

    // $('selector').action() selector acts as a query selector

    //executes the function when a p element is clicked
    // $('p').click(function () {
    //     console.log(this.innerHTML);
    //     $(this).hide();     //hides the paragraph i.e. sets display to none 
    //     // if p is used instead of this it hides all the elements
    //     // (this) refers to html element there by hiding the particular element that is clicked
    // });
    // $('#second').mouseover(function ()      //class selector
    // {
    //     console.log('Mouse over the second paragraph of id 2');
    // });

    $('.third').click(function ()          //id selector
    {
        console.log('Double clicked paragraph of class third ' + this.innerHTML);
    });

    // $('p').click(); //clicks on all the paragraph elements

    // $('p:first').click() //clicks on the first paragraph element
    

    console.log("I am in a external file");

    //Events
    //mouse events: click,dblclick,mouseover,mouseenter,mouseleave,mousedown,mouse up

    //keyBoard events: keyUp,keyDown,keyPress

    //form events: submit change focus blur

    //window events: load resize unload scroll

    // $('p').mouseenter(function()
    // {
    //     console.log("You entered");
    // })

    // $('p').hover(function()
    // {
    //     console.log("You hovered"); 
    // });

    //Hover function takes two parameters enter and leave which allows us to execute two functions let us take an example

    // $('p').hover(function()
    // {
    //     console.log("Hover Entered");
    // },
    // function()
    // {
    //     console.log("Hover Left");
    // }
    // );

    // on can be used to add multiple events to the doc

    $('p').on(
        {
            'click':function(){
                console.log("clicked");
            },
            'mouseover':function(){
                console.log("mouse over");
            }
        }
    ); // can be added any number of events but colon should be used
    
    // $('div').hide(1000,function(){
    //     console.log("Succesfully hidden");
    // }
    // ); //takes 1000 ms to hide

    // $('div').show(1000,function(){
    //     console.log("Succesfully shown");
    // }
    // );

    $('#btn').click(function(){
        console.log('clicked');
        $('#none').fadeToggle(1000);
    }); 
    
});