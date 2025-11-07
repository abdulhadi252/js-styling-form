let signupbtn=document.querySelector(".signupbtn");
let signinBtn=document.querySelector(".signinbtn");
let namefield=document.querySelector(".namefield");
let text=document.querySelector(".text");
let title=document.querySelector(".title");
let underline=document.querySelector(".underline");


signinBtn.addEventListener('click',()=>{
    namefield.style.maxHeight='0px';
    title.innerHTML ='Sign In'
    text.innerHTML='Lost Password';
    signupbtn.classList.add('disable');
    signinBtn.classList.remove('disable');
    underline.style.transform ='translateX(35px)'
});

signupbtn.addEventListener('click',()=>{
    title.innerHTML ="Sign Up"
    text.innerHTML='Password Suggestion:'
    namefield.style.maxHeight='60px';
    signupbtn.classList.remove('disable');
    signinBtn.classList.add('disable');
    underline.style.transform ='translateX(0)';
})