//Анимация чисел в первом блоке (эффект "счётчика")
let count0 = document.getElementById('out0');
let count1 = document.getElementById('out1');

function counterAnimation(counterNum, start, end, duration){
    let startTimestamp = null;
    function step(timestamp){
        if(!startTimestamp ){
            startTimestamp = timestamp;
        }
        let progress = Math.min((timestamp - startTimestamp) / duration, 1);
        counterNum.innerText = Math.floor(progress * (end - start) + start);
        if(progress < 1){
            window.requestAnimationFrame(step);
        }
    }
    window.requestAnimationFrame(step);
}

counterAnimation(count0, 0, 28000, 3000)
counterAnimation(count1, 0, 5800, 2500)