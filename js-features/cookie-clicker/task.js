let clickCount = document.getElementById('clicker__counter');
let cookie = document.getElementById('cookie');
let speedClickCount = 0;
let clickeSpeed = document.getElementById('clicker__speed');
let clickeSpeedRecord = document.getElementById('speed__record');



let speedPerSecond = setInterval(() => {

    cookie.onclick = () => {
        cookie.width = 150;
        clickCount.textContent++;
        speedClickCount++;
        setTimeout(() => {
            cookie.width = 200;
        },100);
    
        clickeSpeed.textContent = speedClickCount;
        console.log('Скорость: ', clickeSpeed.textContent)

        if (clickeSpeedRecord.textContent < speedClickCount) {
            clickeSpeedRecord.textContent = clickeSpeed.textContent;
            console.log('Рекорд! ', clickeSpeedRecord.textContent)
        }
        
    }

    speedClickCount = 0;
    clickeSpeed.textContent = 0;
},1000);