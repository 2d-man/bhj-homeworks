const getHole = index => document.getElementById(`hole${index}`);

    for (let i = 1; i < 10; i++){
        getHole(i).onclick = () => {

            if (getHole(i).className === 'hole hole_has-mole') {
                document.getElementById('dead').textContent++;
            } else {
                document.getElementById('lost').textContent++;
            }

            if (document.getElementById('dead').textContent == 10) {
                document.getElementById('dead').textContent = 0;
                document.getElementById('lost').textContent = 0;
                alert('Победа!');
            }
        
            if (document.getElementById('lost').textContent == 5) {
                document.getElementById('dead').textContent = 0;
                document.getElementById('lost').textContent = 0;
                alert('Проигрыш(');
            }
    
        }
    }

    
