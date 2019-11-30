const accInput = document.querySelector('.acc-input');
const curInput = document.querySelector('.cur-input');
let computer = [];
let current;
let sum;
let lastOp;


// Numbers : click event to change external and internal, then logs

function assignNum(numVar, num) {
    numVar.addEventListener('click', () => {
        curInput.innerHTML += num;
        current = parseFloat(curInput.innerHTML);
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

decimal.addEventListener('click', () => {
    if (Number.isInteger(current)) {
        curInput.innerHTML += '.';
        current = parseFloat(curInput.innerHTML);
        console.log('computer: ' + computer, '| current: ' + current);
    }
})


// Clears: reset external and internal

c.addEventListener('click', () => {
    accInput.innerHTML = '';
    curInput.innerHTML = '';
    current = undefined;
    computer = [];
});

ce.addEventListener('click', () => {
    curInput.innerHTML = '';

})

// Operators: current goes to accumulator, last operation changes, current pushes to computer array, executes operation, current resets, logs


add.addEventListener('click', () => {
    accInput.innerHTML += curInput.innerHTML + '+';
    computer.push(current);
    if (computer.length > 1) {
        sum = computer[0] + computer[1];
        computer = [sum];
    }
    lastOp = "add";
    curInput.innerHTML = '';
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

// Equals: resets accumulator, check if current has a value, proceeds to last operation if current has a value, resets current, logs

equals.addEventListener('click', () => {
    accInput.innerHTML = '';
    if (current) {
        if (lastOp = "add") {
            computer = parseFloat(computer) + current;
        }
    }
    curInput.innerHTML = computer;
    current = computer;
    console.log('computer: ' + computer + '| current: ' + current);
    computer = [];
})