burger=document.querySelector('.burger')
navbar=document.querySelector('.nav-bar')
navlist=document.querySelector('.nav-list')
rightnav=document.querySelector('.nav-bar-right')


burger.addEventListener('click',()=>{
    navlist.classList.toggle('v-bar');
    rightnav.classList.toggle('v-bar');
    navbar.classList.toggle('hide-navbar');
})