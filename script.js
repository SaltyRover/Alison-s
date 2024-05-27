const barMenu = document.querySelector('.barMenu');
const navlinks = document.querySelector('.navlinks');
barMenu.addEventListener('click',(e)=>{
    // console.log(navlinks.style.display=='none');
    if(navlinks.style.display=='block'){
        navlinks.style.display='none';
    }else{
        navlinks.style.display='block';
    }
})

window.onresize = function(){
    navlinks.style.display='block';
}


console.dir(document);
console.dir(barMenu);