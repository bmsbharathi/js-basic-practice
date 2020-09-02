let btn = document.querySelector('button');
let para = document.querySelector('p');
// const worker = new Worker('worker.js'); //actual code to invoke a worker in a hosted environment

/** Since chrome does not allow to invoke a worker. Converting the function as a blob and making it a worker*/
const worker = new Worker(URL.createObjectURL(new Blob(["(" + worker_function.toString() + ")()"], { type: 'text/javascript' })));

btn.addEventListener('click', () => {

    para.textContent = '';
    worker.postMessage('startLoop');


});

btn.addEventListener('click', () => alert('Process Initiated in Background!'));

worker.onmessage = (evt) => {

    para.textContent = evt.data;
    para.style.fontSize = '25px';

};

function worker_function() {
    onmessage = function() {

        for (let i = 0; i < 10000000000; i++) {

        }
        postMessage('Loop completed from 1 to 10000000000!!!!');

    }
}