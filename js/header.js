
const contentMenu3 = document.querySelector('.content__menu');
const contentMenuBlock3 = document.querySelector('.content__menu__block');

const li1 = document.querySelector('.li1');
const li2 = document.querySelector('.li2');
const li3 = document.querySelector('.li3');
const li4 = document.querySelector('.li4');
const li5 = document.querySelector('.li5');
const li6 = document.querySelector('.li6');

const iw1 = document.querySelector('.iw1');
const iw2 = document.querySelector('.iw2');
const iw3 = document.querySelector('.iw3');
const iw4 = document.querySelector('.iw4');
const iw5 = document.querySelector('.iw5');
const iw6 = document.querySelector('.iw6');

li1.addEventListener('mouseover',()=>{
    iw1.src = './icon/iw1.svg';
  });
  li1.addEventListener('mouseout',()=>{
    iw1.src = './icon/electrician.svg';
  });
  li2.addEventListener('mouseover',()=>{
    iw2.src = './icon/iw2.svg';
  });
  li2.addEventListener('mouseout',()=>{
    iw2.src = './icon/heating.svg';
  });
  li3.addEventListener('mouseover',()=>{
    iw3.src = './icon/iw3.svg';
    if(window.innerWidth >= 769){
    contentMenu3.style.display = 'block';
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";
    }
  });
  li3.addEventListener('mouseout',()=>{
    iw3.src = './icon/plumbing.svg';
  });
  li4.addEventListener('mouseover',()=>{
    iw4.src = './icon/iw4.svg';
  });
  li4.addEventListener('mouseout',()=>{
    iw4.src = './icon/washer.svg';
  });
  li5.addEventListener('mouseover',()=>{
    iw5.src = './icon/iw5.svg';
  });
  li5.addEventListener('mouseout',()=>{
    iw5.src = './icon/furniture.svg';
  });
  li6.addEventListener('mouseover',()=>{
    iw6.src = './icon/iw6.svg';
  });
  li6.addEventListener('mouseout',()=>{
    iw6.src = './icon/hammer.svg';
  });


  contentMenuBlock3.addEventListener('mouseover',(e)=>{
      if(e.target == document.querySelector('.back_content')){
        contentMenu3.style.display = 'none';
        document.body.style.overflow = "auto";
        document.body.style.height = "auto";
      } 
  })

  //for thanks.html
