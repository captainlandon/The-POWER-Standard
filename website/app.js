const menu=document.querySelector('.menu');
const links=document.querySelector('.navlinks');
if(menu&&links){menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));links.style.display=open?'none':'flex';links.style.position=open?'':'absolute';links.style.top=open?'':'70px';links.style.right=open?'':'18px';links.style.padding=open?'':'18px';links.style.background=open?'':'#071d3a';links.style.flexDirection=open?'':'column';});}
