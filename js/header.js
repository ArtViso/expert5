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

const burger = document.querySelector('.burger');
const clos = document.querySelector('.close');
const chevron = document.querySelector('.chevron');
const header = document.querySelector('.header');
const headerMain = document.querySelector('.header__main');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const menu3 = document.querySelector('.menu3');
const menu2 = document.querySelector('.menu2');

const allBlocks = document.querySelectorAll('.content__menu__block__box');
const firstBlock = document.querySelector('.content__menu__block__box.first_block');
const secondBlock = document.querySelector('.content__menu__block__box.second_block');
const thirdBlock = document.querySelector('.content__menu__block__box.third_block');
const fourthBlock = document.querySelector('.content__menu__block__box.fourth_block');
const fifthBlock = document.querySelector('.content__menu__block__box.fifth_block');
const sixthBlock = document.querySelector('.content__menu__block__box.sixth_block');

const showMenu = (block, position) => {
  if(window.innerWidth >= 769){
    contentMenuBlock3.setAttribute('data-after', position);
    contentMenu3.style.display = 'block';
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";
    allBlocks.forEach(block => block.classList.remove('active'));
    block.classList.add('active');
  }
};

li1.addEventListener('mouseover',()=>{
    iw1.src = './icon/iw1.svg';
    showMenu(firstBlock, 'first');
  });
  li1.addEventListener('mouseout',()=>{
    iw1.src = './icon/electrician.svg';
  });
  li2.addEventListener('mouseover',()=>{
    iw2.src = './icon/iw2.svg';
    showMenu(secondBlock, 'second');
  });
  li2.addEventListener('mouseout',()=>{
    iw2.src = './icon/heating.svg';
  });
  li3.addEventListener('mouseover',()=>{
    iw3.src = './icon/iw3.svg';
    showMenu(thirdBlock, 'third');
  });
  li3.addEventListener('mouseout',()=>{
    iw3.src = './icon/plumbing.svg';
  });
  li4.addEventListener('mouseover',()=>{
    iw4.src = './icon/iw4.svg';
    showMenu(fourthBlock, 'fourth');
  });
  li4.addEventListener('mouseout',()=>{
    iw4.src = './icon/washer.svg';
  });
  li5.addEventListener('mouseover',()=>{
    iw5.src = './icon/iw5.svg';
    showMenu(fifthBlock, 'fifth');
  });
  li5.addEventListener('mouseout',()=>{
    iw5.src = './icon/furniture.svg';
  });
  li6.addEventListener('mouseover',()=>{
    iw6.src = './icon/iw6.svg';
    showMenu(sixthBlock, 'sixth');
  });
  li6.addEventListener('mouseout',()=>{
    iw6.src = './icon/hammer.svg';
  });


  contentMenu3.addEventListener('mouseover',(e)=>{
      if(e.target == document.querySelector('.back_content')){
        contentMenu3.style.display = 'none';
        document.body.style.overflow = "auto";
        document.body.style.height = "auto";
      } 
  });

  burger.addEventListener('click',()=>{
    chevron.style.display = 'block';
    burger.style.display = 'none';
    clos.style.display = 'block';
    header.style.display = 'none';
    if(main && footer) {
      main.style.display = 'none';
      footer.style.display = 'none';
    }
    if(headerMain) {
      headerMain.style.display = 'none';
    }          
    menu3.style.display = 'none';
  });

  clos.addEventListener('click',()=>{
    chevron.style.display = 'none';
    burger.style.display = 'block';
    clos.style.display = 'none';
    header.style.display='block';
    if(main && footer) {
      main.style.display = 'block';
      footer.style.display = 'block';
    }
    if(headerMain) {
      headerMain.style.display = 'block'; 
    }       
    menu3.style.display = 'flex';
  });



