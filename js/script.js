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

const aroundTheClock = document.querySelector('.aroundTheClock');
const prompte = document.querySelector('.prompt');
const aroundTheClock2 = document.querySelector('.aroundTheClock2');
const prompte2 = document.querySelector('.prompt2');
const prompte3 = document.querySelector('.prompt3');
const prompte4 = document.querySelector('.prompt4');
const hourses = document.querySelector('.hourses');
const hourses2 = document.querySelector('.hourses2');

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
  // if(e.target == )
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
li1.addEventListener('mouseover',()=>{
  iw1.src = '/icon/iw1.svg';
});
li1.addEventListener('mouseout',()=>{
  iw1.src = './icon/electrician.svg';
});
li2.addEventListener('mouseover',()=>{
  iw2.src = '/icon/iw2.svg';
});
li2.addEventListener('mouseout',()=>{
  iw2.src = './icon/heating.svg';
});
li3.addEventListener('mouseover',()=>{
  iw3.src = '/icon/iw3.svg';
});
li3.addEventListener('mouseout',()=>{
  iw3.src = './icon/plumbing.svg';
});
li4.addEventListener('mouseover',()=>{
  iw4.src = '/icon/iw4.svg';
});
li4.addEventListener('mouseout',()=>{
  iw4.src = './icon/washer.svg';
});
li5.addEventListener('mouseover',()=>{
  iw5.src = '/icon/iw5.svg';
});
li5.addEventListener('mouseout',()=>{
  iw5.src = './icon/furniture.svg';
});
li6.addEventListener('mouseover',()=>{
  iw6.src = '/icon/iw6.svg';
});
li6.addEventListener('mouseout',()=>{
  iw6.src = './icon/hammer.svg';
});