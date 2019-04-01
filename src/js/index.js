
var icon = document.getElementById("hamburger-icon");
var menu = document.getElementById("mobile-nav");
console.log(menu);
icon.addEventListener('click', function(e) {
    e.preventDefault();
    if(icon.classList.contains("open")){
        icon.classList.remove('open'); 
        menu.classList.remove('open'); 
    }else{
        icon.classList.add('open'); 
        menu.classList.add('open'); 
    }
    //icon.classList.toggle('open'); 
});