$(document).ready(function () {

    // $('#btn').click(function () {
    //     $('#none').fadeToggle(1000);
    // });

    // $('#btn').click(function()
    // {
    // $('#none').fadeTo(1000,0.5);
    // }
    // );
//Fade Methods
//fadeOut : fades out completely an existing element
//fadeIn  : displays the faded out  element
//fadeToggle : toggles between fadeIn and fadeOut
//fadeTo  : can fade to a certain opacity 

//they also return call back function as a parameter apart from transition time in milli seconds

// Slide Methods
//slideUp slideDown slideToggle slides elements up down and toggles them when toggle is triggered
// $("#none").slideToggle(1000,function(){console.log("Done");}); //arguments taken delay and callback

// Animate Methods
$('#btn').click(
    function(){
        $('#none').animate(
        {
            opacity:0.5,
            height:"100px",
            width:"200px",
        }
        ,12000);
    }
);
$("#btn2").click(function(){
    $('#none').stop();  // stops any animation currently applied on css
})

});