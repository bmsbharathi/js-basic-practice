let btn = document.querySelector('button');
let para = document.querySelector('p');

btn.addEventListener('click', () => {
    para.textContent = '';
    for (let i = 0; i < 10000000000; i++) {

    }
    para.textContent = 'Looped from 0 to 10000000000';
    para.style.fontSize = '25px';
});

btn.addEventListener('click', () => alert('Process completed!'));