const accInput = document.querySelector('.acc-input');
const curInput = document.querySelector('.cur-input');

// Numbers

function assignNum(numVar, num) {
    numVar.addEventListener('click', () => {
        curInput.innerHTML += num;
    })
}

assignNum(n1, 1);
assignNum(n2, 2);
assignNum(n3, 3);
assignNum(n4, 4);
assignNum(n5, 5);
assignNum(n6, 6);
assignNum(n7, 7);
assignNum(n8, 8);
assignNum(n9, 9);

// Clears

c.addEventListener('click', () => {
    accInput.innerHTML = '';
    curInput.innerHTML = '';
});

ce.addEventListener('click', () => {
    curInput.innerHTML = '';

})

// Operators

add.addEventListener('click', () => {
    accInput.innerHTML += curInput.innerHTML;
    accInput.innerHTML += '+';
})

subtract.addEventListener('click', () => {
    accInput.innerHTML += curInput.innerHTML;
    accInput.innerHTML += '-';
})

multiply.addEventListener('click', () => {
    accInput.innerHTML += curInput.innerHTML;
    accInput.innerHTML += '*';
})

divide.addEventListener('click', () => {
    accInput.innerHTML += curInput.innerHTML;
    accInput.innerHTML += '&#247';
})