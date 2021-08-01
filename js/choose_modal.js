const choosebtns =  document.querySelector('.btns');
const choosebtn2 = document.querySelector('.btn2');

const chooseModallBlock = document.querySelector('.call__master__modal');
const chooseClosedModal = document.querySelector('.call__master__modal .closedModal');
const chooseModalContent =  document.querySelector('.call__master__modal__content');
const urgentCallModal = document.querySelector('.call__master__urgent');
const nonUrgentCallModalFirst = document.querySelector('.call__master__nonurgent__first');
const nonUrgentCallModalSecond = document.querySelector('.call__master__nonurgent__second');
const payModal = document.querySelector('.call__master__pay');

const leftBlockModal = document.querySelector('.column_image_block.left_block');
const rightBlockModal = document.querySelector('.column_image_block.right_block');

const nonUrgentCallNextButton = document.querySelector('.call__master__nonurgent__first__btn');
const nonUrgentCallPrevButton = document.querySelector('.call__master__nonurgent__second__btns .prev__btn');
const urgentPayButton = document.querySelector('.call__master__urgent__btn');
const nonUrgentPayButton = document.querySelector('.call__master__nonurgent__second__btns .pay__btn');
const payButton = document.querySelector('.call__master__pay__btn');


const [choose_left_block, choose_right_block] = document.querySelectorAll('.choose__call__item__block');

let call = null;

const validateModal = modal => {
    const inputs = modal.querySelectorAll('input[type="text"], textarea');
    if([...inputs].filter(input => input.value === '').length) {
        alert('Заполните все поля');
        return false;
    }
    return true;
}

const clearAllInputs = modal => {
    const inputs = modal.querySelectorAll('input[type="text"], textarea');
    inputs.forEach(input => input.value = '');
}

if(leftBlockModal && rightBlockModal) {
    leftBlockModal.addEventListener('click', ()=>{
        rightBlockModal.querySelector('.checked').style.display = 'none';
        leftBlockModal.querySelector('.checked').style.display = 'flex';
        showModalChoose();
        showModalUrgentCall();
    });
    rightBlockModal.addEventListener('click', ()=>{
        leftBlockModal.querySelector('.checked').style.display = 'none';
        rightBlockModal.querySelector('.checked').style.display = 'flex';
        showModalChoose();
        showModalNonUrgentCallFirst();
    });
}

const showModalChoose = () => { 
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";
    chooseModallBlock.style.top = document.documentElement.scrollTop - 20 +'px';
    chooseModallBlock.style.display = 'flex';  
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
    const res = validateModal(nonUrgentCallModalFirst);
    if(!res) return false; 
    nonUrgentCallModalFirst.style.display = 'none';
    nonUrgentCallModalSecond.style.display = 'block';
}

const showModalNonUrgentCallFirstFromSecond = () => {
    nonUrgentCallModalSecond.style.display = 'none';
    nonUrgentCallModalFirst.style.display = 'block';
}


const showPayModal = (isUrgent) => {
    call = isUrgent ? 'urgent' : 'nonurgent';
    const res = call === 'urgent' ? validateModal(urgentCallModal) : validateModal(nonUrgentCallModalSecond);
    if(!res) return false;
    nonUrgentCallModalSecond.style.display = 'none';
    urgentCallModal.style.display = 'none';
    payModal.style.display = 'block';
}

const payBtnHandler = () => {
    const payAmount = payModal.querySelector('.call__master__pay__price').value;
    let result = {};
    if(+payAmount < 350) {
        alert('Сумма должна быть больше или равна 350');
        return false;
    }
    result['type'] = call;
    result['pay_amount'] = payAmount;
    if(call === 'urgent') {
        result['reason'] = document.querySelector('.call__master__urgent__reason').value;
        result['name'] = document.querySelector('.call__master__urgent__name').value;
        result['phone'] = document.querySelector('.call__master__urgent__phone__input').value.replace(/ /g,'');
    }
    else {
        result['reason'] = document.querySelector('.call__master__nonurgent__first__reason').value;
        result['address'] = document.querySelector('.call__master__nonurgent__first__address').value;
        result['date'] = document.querySelector('.call__master__nonurgent__first__date').value;
        result['time'] = document.querySelector('.call__master__nonurgent__first__time').value;
        result['name'] = document.querySelector('.call__master__nonurgent__second__name').value;
        result['phone'] = document.querySelector('.call__master__nonurgent__second__phone__input').value.replace(/ /g,'');
        result['pay_type'] = document.querySelector('input[name="n_pay"]:checked').value;
    }
    clearAllInputs(urgentCallModal);
    clearAllInputs(nonUrgentCallModalFirst);
    clearAllInputs(nonUrgentCallModalSecond);
    clearAllInputs(payModal);

    payModal.style.display = 'none';
    chooseModallBlock.style.display = 'none';
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
    chooseModalContent.style.display = 'block';
}

if(choosebtns) {
    choosebtns.addEventListener('click', showModalChoose);
}

if(choosebtn2) {
    choosebtn2.addEventListener('click', showModalChoose);
}

choose_left_block.addEventListener('mouseenter', chooseOnMouseEnter);
choose_left_block.addEventListener('mouseleave', chooseOnMouseLeave);
choose_left_block.addEventListener('click', showModalUrgentCall);
choose_right_block.addEventListener('click', showModalNonUrgentCallFirst);
choose_right_block.addEventListener('mouseenter', chooseOnMouseEnter);
choose_right_block.addEventListener('mouseleave', chooseOnMouseLeave);
nonUrgentCallNextButton.addEventListener('click', showModalNonUrgentCallSecond);
nonUrgentCallPrevButton.addEventListener('click', showModalNonUrgentCallFirstFromSecond);
urgentPayButton.addEventListener('click', showPayModal.bind(null, true));
nonUrgentPayButton.addEventListener('click', showPayModal.bind(null, false));
payButton.addEventListener('click', payBtnHandler);

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


