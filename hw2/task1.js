


function convert() {
    let inp = +document.querySelector('.inp_task1').value;
    let out = document.querySelector('.out_Task1');

    switch (inp) {
        case 0: out.textContent = 'N';
            break;
        case 1: out.textContent = 'I';
            break;
        case 2: out.textContent = 'II';
            break;
        case 3: out.textContent = 'III';
            break;
        case 4: out.textContent = 'IV';
            break;
        case 5: out.textContent = 'V';
            break;
        case 6: out.textContent = 'VI';
            break;
        case 7: out.textContent = 'VII';
            break;
        case 8: out.textContent = 'IIX';
            break;
        case 9: out.textContent = 'IX';
            break;
        default: out.textContent = 'NNN';
            break;
    }

    // console.log(inp.split(' '), inp[0]);

};


document.querySelector('.btn_task1').onclick = convert;