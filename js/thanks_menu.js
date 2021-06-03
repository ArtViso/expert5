
    const burger = document.querySelector('.burger');
    const clos = document.querySelector('.close');
    const chevron = document.querySelector('.chevron');
    const header = document.querySelector('.header');
    const section = document.querySelector('section');
    const headerMain = document.querySelector('.header__main');
    burger.addEventListener('click',()=>{
      chevron.style.display = 'block';
      burger.style.display = 'none';
      clos.style.display = 'block';
      header.style.display = 'none';
      section.style.display = 'none';
      headerMain.style.display = 'none';
    });
    clos.addEventListener('click',()=>{
      chevron.style.display = 'none';
      burger.style.display = 'block';
      clos.style.display = 'none';
      header.style.display='block';
      section.style.display = 'block';
      headerMain.style.display = 'block';     
  });
