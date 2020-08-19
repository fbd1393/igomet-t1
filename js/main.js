$(document).ready(function(){
// variables
const searchIcon = document.getElementById("search-icon");
const SearchBox = document.getElementById("searchbox");
const menuIcon = document.getElementById("menu-icon");
const slideOutMenu = document.getElementById("slideout-menu");
const menuItem = $('.nav-item');
const slideoutSearchIcon = $('#slideout-searchbox');
const slideoutSearchbox = $('#slideout-search-bar');
// // functions
searchIcon.addEventListener('click',function(){

    if(SearchBox.offsetWidth == 0){
        SearchBox.style.width = "400px";
    }else{
        SearchBox.style.width = "0";
    }

});


slideOutMenu.style.top = "-175px";
menuIcon.addEventListener('click',function() {

    if(slideOutMenu.style.top == "-175px"){
        slideOutMenu.style.top = "72px";
    }else{
        slideOutMenu.style.top = "-175px";
    }

});

function activeItem(){
    console.log("this is an active item");
    // menuItem.classList.remove('active');
}


    
});