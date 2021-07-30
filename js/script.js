const acc = document.getElementsByClassName("accordion");
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

if(window.innerWidth > 769){
  setTimeout(() => {
    if(document.querySelector('.call__master__modal').style.display === 'none' || document.querySelector('.call__master__modal').style.display === '') {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100%";
      setTimeout(() => {
        let core = document.documentElement.scrollTop - 20 +'px';
        modallBlock.style.top = core;
        modallBlock.style.display = 'flex';
      }, 150);
    }    
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




