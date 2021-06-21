const btn4 = document.querySelector('.btn4');
const btn5 = document.querySelector('.btn5'); 
const sun = document.querySelector('.sun2');
const mon = document.querySelector('.mon2');
const blockBox1 = document.querySelector('.block__box1');
const blockBox2 = document.querySelector('.block__box2');
const clockTime = document.querySelector('.clock_time');

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
