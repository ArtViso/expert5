const burger = document.querySelector('.burger');
const clos = document.querySelector('.close');
const chevron = document.querySelector('.chevron');
const header = document.querySelector('.header');
const btn4 = document.querySelector('.btn4');
const btn5 = document.querySelector('.btn5'); 
const sun = document.querySelector('.sun2');
const mon = document.querySelector('.mon2');
const blockBox1 = document.querySelector('.block__box1');
const blockBox2 = document.querySelector('.block__box2');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const clockTime = document.querySelector('.clock_time');
const acc = document.getElementsByClassName("accordion");
const headerMain = document.querySelector('.header__main');



const aroundTheClock = document.querySelector('.aroundTheClock');
const prompte = document.querySelector('.prompt');
const aroundTheClock2 = document.querySelector('.aroundTheClock2');
const prompte2 = document.querySelector('.prompt2');
const prompte3 = document.querySelector('.prompt3');
const prompte4 = document.querySelector('.prompt4');
const hourses = document.querySelector('.hourses');
const hourses2 = document.querySelector('.hourses2');

const modallBlock = document.querySelector('.modall__block');
const closedModal = document.querySelector('.closedModal');
console.log(window.innerWidth);
if(window.innerWidth > 769){
  setTimeout(() => {
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";
    setTimeout(() => {
      let core = document.documentElement.scrollTop - 20 +'px';
      modallBlock.style.top = core;
      modallBlock.style.display = 'flex';
    }, 150);
  }, 30000);
  modallBlock.addEventListener('click',(e)=>{
    if(e.target === modallBlock || e.target === closedModal){
    modallBlock.style.display = 'none';
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
    }
  });
}


for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

aroundTheClock.addEventListener('mouseover',(e)=>{
  console.log(e.target);
  prompte.style.display = 'block';
});
aroundTheClock.addEventListener('mouseout',()=>{
  prompte.style.display = 'none';
});

aroundTheClock2.addEventListener('mouseover',()=>{
  prompte2.style.display = 'block';
});
aroundTheClock2.addEventListener('mouseout',()=>{
  prompte2.style.display = 'none';
});

// hourses.addEventListener('click',()=>{
//   if(prompte3.style.display =='none'){
//     prompte3.style.display = 'block';
//   }else{
//     prompte3.style.display = 'none';
//   }
// });
// hourses2.addEventListener('click',()=>{
//   if(prompte4.style.display =='none'){
//     prompte4.style.display = 'block';
//   }else{
//     prompte4.style.display = 'none';
//   }
// });

burger.addEventListener('click',()=>{
    chevron.style.display = 'block';
    burger.style.display = 'none';
    clos.style.display = 'block';
    header.style.display = 'none';
    main.style.display = 'none';
    footer.style.display = 'none';
    headerMain.style.display = 'none';
});
clos.addEventListener('click',()=>{
    chevron.style.display = 'none';
    burger.style.display = 'block';
    clos.style.display = 'none';
    header.style.display='block';
    main.style.display = 'block';
    footer.style.display = 'block';
    headerMain.style.display = 'block';
});

btn4.addEventListener('click',()=>{
    sun.src = "/img/son2.png";
    mon.src = "/img/mon2.png";
    btn4.style.backgroundColor = '#1117A3';
    btn5.style.backgroundColor = '#E6E8F6';
    blockBox1.style.display = 'block';
    blockBox2.style.display='none';
    clockTime.innerHTML = "с 08:00 до 20:00";
});
btn5.addEventListener('click',()=>{
    mon.src = "/img/mon.png";
    sun.src = "/img/sun.png";
    btn4.style.backgroundColor = '#E6E8F6';
    btn5.style.backgroundColor = '#1117A3';
    blockBox1.style.display = 'none';
    blockBox2.style.display='block';
    clockTime.innerHTML = "с 20:00 до 08:00";
});
