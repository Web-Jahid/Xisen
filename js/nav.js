const menuIcon = document.querySelector('.header-area .header-area__hamburger');
const sidebar = document.querySelector('.side-bar');
console.log(sidebar);
menuIcon.addEventListener('click',(e)=>{
    menuIcon.classList.toggle('active');
    sidebar.classList.toggle('active');
  e.preventDefault();
});