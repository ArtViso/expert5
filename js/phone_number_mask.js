const pnm_phones = {
    'ua': '+380 (99) 999-99-99',
    'ru': '+7 (999) 999-99-99'
};
const pnm_select = document.querySelector('.call__master__modal .call__master__urgent .call__master__urgent__phone select');
const pnm_input = document.querySelector('.call__master__modal .call__master__urgent .call__master__urgent__phone input[type=text]');
pnm_select.addEventListener('change', e=>{
    pnm_input.value = '';
    pnm_input.placeholder = pnm_phones[e.target.value];
    $(pnm_input).mask(pnm_phones[e.target.value]);
});
$(pnm_input).mask(pnm_phones['ua']);
