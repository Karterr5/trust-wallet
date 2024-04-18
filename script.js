let minus = document.getElementById('minus');
let num = document.getElementById('num');
let plus = document.getElementById('plus');

let count = 0;

plus.addEventListener('click', function() {
    minus.removeAttribute('disabled')
    count++;
    console.log(count);
    num.innerHTML = count;

    if (count > 14 && count <= 15){
        alert('Almost there')
    }

    if (count > 19){
        alert('limit reached')
        plus.setAttribute('disabled', 'true')
    }
})

minus.addEventListener('click', function () {
    plus.removeAttribute('disabled');
    count--;
    console.log(count);
    num.innerHTML = count;

    if (count <1){
        minus.setAttribute('disabled', 'true')
    }
    
})
