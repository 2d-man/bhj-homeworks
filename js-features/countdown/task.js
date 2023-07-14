let time = document.getElementById('timer');
let t = time.textContent;
let countdown = setInterval(() => {
    if (t !== 0) {
        t --;
        console.log(t);
        let h = Math.trunc(t/3600);
            m = Math.trunc((t-h*3600)/60),
            s = Math.trunc(t-h*3600-m*60);
            console.log(h, m, s);
        time.textContent = (h<10?"0"+h:h)+":"+(m<10?"0"+m:m)+":"+(s<10?"0"+s:s);
    } else {
        location = 'https://superwalls.top/uploads/posts/2022-09/1662448756_2-gamerwall-pro-p-kotik-v-shoke-instagram-2.jpg';
        alert(location,'Вы победили в конкурсе!');
        clearInterval(countdown);
    }
    
    return time.textContent;
}, 1000);
