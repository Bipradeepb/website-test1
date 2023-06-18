burger=document.querySelector('.burger')
navbar=document.querySelector('.nav-bar')
navlist=document.querySelector('.nav-list')
rightnav=document.querySelector('.nav-bar-right')


burger.addEventListener('click',()=>{
    navlist.classList.toggle('v-bar');
    rightnav.classList.toggle('v-bar');
    navbar.classList.toggle('hide-navbar');
})

var leftbutton=document.querySelector(".fourth-line .left");
var rightbutton=document.querySelector(".fourth-line .right");
var buttonerLeft=document.querySelector(".left .buttoner");
var buttonerRight=document.querySelector(".right .buttoner");

leftbutton.addEventListener("click",function(e){
    leftbutton.classList.toggle("clicked");
    rightbutton.classList.remove("clicked");
    buttonerLeft.classList.toggle("visible");
    buttonerRight.classList.remove("visible");
});

rightbutton.addEventListener("click",function(e){
    rightbutton.classList.toggle("clicked");
    leftbutton.classList.remove("clicked");
    buttonerRight.classList.toggle("visible");
    buttonerLeft.classList.remove("visible");
});

const year=new Date().getFullYear();

document.querySelector(".Copyright span").innerHTML=year;
