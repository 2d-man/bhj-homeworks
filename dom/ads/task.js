const rotators = Array.from(document.querySelectorAll('.rotator'));
let rotatorCases = [];

let count = [];
count.length = rotators.length;
count.fill(0);

for(let i =  0; i < rotators.length; i++) {
    rotatorCases[i] = Array.from(rotators[i].children);
    console.log(rotatorCases[i]);
    

    setInterval(() => {

    for (let add of rotatorCases[i]) {
        add.classList.remove('rotator__case_active');
    }

    rotatorCases[i][count[i]].classList.toggle('rotator__case_active');

    count[i]++;

    if (count[i] >=  rotatorCases[i].length) {
        count[i] = 0;
    }

    console.log(rotatorCases[i][count[i]]);

}, 1000);
}



