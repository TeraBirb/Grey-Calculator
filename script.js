const accInput = document.querySelector('.acc-input');
const curInput = document.querySelector('.cur-input');
let computer = [];
let current;
let sum;
let lastOp;


// Numbers

function assignNum(numVar, num) {
    numVar.addEventListener('click', () => {
        curInput.innerHTML += num;
        current = parseInt(curInput.innerHTML);
        console.log('computer: ' + computer, '| current: ' + current);
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
    current = undefined;
    computer = [];
});

ce.addEventListener('click', () => {
    curInput.innerHTML = '';

})

// Operators



add.addEventListener('click', () => {
    accInput.innerHTML += curInput.innerHTML + '+';
    curInput.innerHTML = '';
    computer.push(current);
    if (computer.length > 1) {
        sum = computer[0] + computer[1];
        computer = [sum];
    }
    lastOp = "add";
    current = undefined;
    console.log('computer: ' + computer, '| current: ' + current);
})

subtract.addEventListener('click', () => {
    accInput.innerHTML += curInput.innerHTML;
    accInput.innerHTML += '-';
    curInput.innerHTML = '';
})

multiply.addEventListener('click', () => {
    accInput.innerHTML += curInput.innerHTML;
    accInput.innerHTML += '*';
    curInput.innerHTML = '';
})

divide.addEventListener('click', () => {
    accInput.innerHTML += curInput.innerHTML;
    accInput.innerHTML += '&#247';
    curInput.innerHTML = '';
})

equals.addEventListener('click', () => {
    accInput.innerHTML = '';
    if (current) {
        if (lastOp = "add") {
            computer = parseInt(computer) + current;
        }
    }
    console.log('computer: ' + computer + '| current: ' + current);
    curInput.innerHTML = computer;
})