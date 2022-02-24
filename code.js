'use strict'
 const switcher = document.querySelector('.btn'); 
 const remember = document.querySelector('.remember');


 switcher.addEventListener('click', function() {
     document.body.classList.toggle('dark-theme')

     var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }

    console.log('current class name: ' + className);
    let colorpath = switcher;
    localStorage.setItem("colorpath", colorpath);
 });

 window.onload = function(){
    let mypath = localStorage.getItem("colorpath");
    //document.getElementById('output').innerHTML = colorpath;
};  

  