$(document).ready(function(){

    $('#div1').slideUp(1000).slideDown(1000);

    document.getElementById('div2').style.backgroundColor = "green";

    $("#div5").click(function test(){
        func2();
    });

    function func2(){
        $("#div5").slideUp(1000);
        $("#div45").slideDown(1000);
    }


});

function func4(){
    console.log('gooooooood');
}