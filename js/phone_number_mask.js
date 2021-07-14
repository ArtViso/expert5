const pnm_phones = {
    'ua': '+380 (99) 999-99-99',
    'ru': '+7 (999) 999-99-99'
};

const u_select = document.querySelector('.call__master__modal .call__master__urgent .call__master__urgent__phone select');
const u_input = document.querySelector('.call__master__modal .call__master__urgent .call__master__urgent__phone input[type=text]');

const n_select = document.querySelector('.call__master__modal .call__master__nonurgent__second .call__master__nonurgent__second__phone select');
const n_input = document.querySelector('.call__master__modal .call__master__nonurgent__second .call__master__nonurgent__second__phone input[type=text]');

u_select.addEventListener('change', e=>{
    u_input.value = '';
    u_input.placeholder = pnm_phones[e.target.value];
    $(u_input).mask(pnm_phones[e.target.value]);
});
$(u_input).mask(pnm_phones['ua']);

n_select.addEventListener('change', e=>{
    n_input.value = '';
    n_input.placeholder = pnm_phones[e.target.value];
    $(n_input).mask(pnm_phones[e.target.value]);
});
$(n_input).mask(pnm_phones['ua']);
