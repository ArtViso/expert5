const choosebtns =  document.querySelector('.btns');
const choosebtn2 = document.querySelector('.btn2');


const chooseModallBlock = document.querySelector('.call__master__modal');
const chooseClosedModal = document.querySelector('.call__master__modal .closedModal');
const chooseModalContent =  document.querySelector('.call__master__modal__content');
const urgentCallModal = document.querySelector('.call__master__urgent');
const nonUrgentCallModalFirst = document.querySelector('.call__master__nonurgent__first');
const nonUrgentCallModalSecond = document.querySelector('.call__master__nonurgent__second');
const payModal = document.querySelector('.call__master__pay');

const nonUrgentCallNextButton = document.querySelector('.call__master__nonurgent__first__btn');
const nonUrgentCallPrevButton = document.querySelector('.call__master__nonurgent__second__btns .prev__btn');
const urgentPayButton = document.querySelector('.call__master__urgent__btn');
const nonUrgentPayButton = document.querySelector('.call__master__nonurgent__second__btns .pay__btn');



const [choose_left_block, choose_right_block] = document.querySelectorAll('.choose__call__item__block');

const showModalChoose = () => { 
    if(window.innerWidth > 651){
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";
    chooseModallBlock.style.top = document.documentElement.scrollTop - 20 +'px';
    chooseModallBlock.style.display = 'flex';  
    } 
}

chooseModallBlock.addEventListener('click',(e)=>{
    if(e.target === chooseModallBlock || e.target === chooseClosedModal){
    chooseModallBlock.style.display = 'none';
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
    chooseModalContent.style.display = 'block';
    urgentCallModal.style.display = 'none';
    nonUrgentCallModalFirst.style.display = 'none';
    nonUrgentCallModalSecond.style.display = 'none';
    payModal.style.display = 'none';
    }
});

const showModalUrgentCall = () => {
    chooseModalContent.style.display = 'none';
    urgentCallModal.style.display = 'block';
}

const showModalNonUrgentCallFirst = () => {
    chooseModalContent.style.display = 'none';
    nonUrgentCallModalFirst.style.display = 'block';
}

const showModalNonUrgentCallSecond = () => {
    nonUrgentCallModalFirst.style.display = 'none';
    nonUrgentCallModalSecond.style.display = 'block';
}

const showModalNonUrgentCallFirstFromSecond = () => {
    nonUrgentCallModalSecond.style.display = 'none';
    nonUrgentCallModalFirst.style.display = 'block';
}

const showPayModal = () => {
    nonUrgentCallModalSecond.style.display = 'none';
    urgentCallModal.style.display = 'none';
    payModal.style.display = 'block';
}

choosebtns.addEventListener('click', showModalChoose);
choosebtn2.addEventListener('click', showModalChoose);
choose_left_block.addEventListener('mouseenter', chooseOnMouseEnter);
choose_left_block.addEventListener('mouseleave', chooseOnMouseLeave);
choose_left_block.addEventListener('click', showModalUrgentCall);
choose_right_block.addEventListener('click', showModalNonUrgentCallFirst);
choose_right_block.addEventListener('mouseenter', chooseOnMouseEnter);
choose_right_block.addEventListener('mouseleave', chooseOnMouseLeave);
nonUrgentCallNextButton.addEventListener('click', showModalNonUrgentCallSecond);
nonUrgentCallPrevButton.addEventListener('click', showModalNonUrgentCallFirstFromSecond);
urgentPayButton.addEventListener('click', showPayModal);
nonUrgentPayButton.addEventListener('click', showPayModal);


function chooseOnMouseEnter(){
    this.style.backgroundColor = "#1117A3";
    this.querySelector('.default').style.display='none';
    this.querySelector('.white').style.display='block';
}

function chooseOnMouseLeave(){
    this.style.backgroundColor = "#F3F4F9";
    this.querySelector('.white').style.display='none';
    this.querySelector('.default').style.display='block';
}


