$(document).ready(function(){
$.get('https://code.jquery.com/jquery-3.6.0.js',function(data,status){
    alert(status);});
$.post('https://code.jquery.com/jquery-3.6.0.js',{name:"sandeep",age:"21"},function(data,status){
    alert(status);});
});