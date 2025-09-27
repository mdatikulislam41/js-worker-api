let worker = new Worker('./worker.js');//Worker Register
let count  = document.getElementById('count');
let result = document.getElementById('result');
let bg = document.getElementById('bg');
let countNumber = 1000000000;
bg.addEventListener('click', (e) => {
    let bgColor =  document.body.style.background !=='red' ? 'red': 'white';
    document.body.style.background = bgColor;
})
count.addEventListener('click', ()=>{
    worker.postMessage(countNumber);// run Worker
    worker.onmessage = function(e){
        result.textContent = e.data;
    }
    //Get data from workder
})