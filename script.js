const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
const accInput = document.querySelector('.acc-input');
const curInput = document.querySelector('.cur-input');
let computer = [];
let current;
let answer;
let lastOp;
let splitStr;


// Numbers : click event to change external and internal, then logs

function assignNum(numVar, num) {
    numVar.addEventListener('click', () => {
        if ( (w > 500 && curInput.innerHTML.length < 13) ||
             (w > 768 && curInput.innerHTML.length < 23) ||
             (w > 950 && curInput.innerHTML.length < 35) ) {
        curInput.innerHTML += num;
        current = parseFloat(curInput.innerHTML);
        console.log('computer: ' + computer, '| current: ' + current);
        } else {
            alert('Oops, the characters don\'t fit! Increase window size and refresh or use a big boy calculator.');
        }
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
assignNum(n0, 0);

// Other buttons

decimal.addEventListener('click', () => {
    if (Number.isInteger(current)) {
        curInput.innerHTML += '.';
        current = parseFloat(curInput.innerHTML);
        console.log('computer: ' + computer, '| current: ' + current);
    }
})

backspace.addEventListener('click', () => {
    splitStr = curInput.innerHTML.split('');
    splitStr.pop();
    curInput.innerHTML = splitStr.join('');
    current = parseFloat(curInput.innerHTML);
    console.log('computer: ' + computer, '| current: ' + current, '| splitStr: ' + splitStr);
})

negative.addEventListener('click', () => {
    splitStr = curInput.innerHTML.split('');
    if (splitStr[0] == '-') {
        splitStr[0] = '';
    } else {
        splitStr.unshift('-');
    }
    curInput.innerHTML = splitStr.join('');
    current = parseFloat(curInput.innerHTML);
    console.log('computer: ' + computer, '| current: ' + current, '| splitStr: ' + splitStr);
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
    accInput.innerHTML += curInput.innerHTML + ' + ';
    computer.push(current);
    if (computer.length > 1) {
        answer = computer[0] + computer[1];
        computer = [answer];
    }
    lastOp = 'add';
    curInput.innerHTML = '';
    current = undefined;
    console.log('computer: ' + computer, '| current: ' + current);
})

subtract.addEventListener('click', () => {
    accInput.innerHTML += curInput.innerHTML + ' - ';
    computer.push(current);
    if (computer.length > 1) {
        answer = computer[0] - computer[1];
        computer = [answer];
    }
    lastOp = 'subtract';
    curInput.innerHTML = '';
    current = undefined;
    console.log('computer: ' + computer, '| current: ' + current);
})

multiply.addEventListener('click', () => {
    accInput.innerHTML += curInput.innerHTML + ' * ';
    computer.push(current);
    if (computer.length > 1) {
        answer = computer[0] * computer[1];
        computer = [answer];
    }
    lastOp = 'multiply';
    curInput.innerHTML = '';
    current = undefined;
    console.log('computer: ' + computer, '| current: ' + current);
})

divide.addEventListener('click', () => {
    accInput.innerHTML += curInput.innerHTML + ' &#247 ';
    computer.push(current);
    if (computer.length > 1) {
        answer = computer[0] / computer[1];
        computer = [answer];
    }
    lastOp = 'divide';
    curInput.innerHTML = '';
    current = undefined;
    console.log('computer: ' + computer, '| current: ' + current);
})

// Equals: resets accumulator, check if current has a value, proceeds to last operation if current has a value, resets current, logs

equals.addEventListener('click', () => {
    accInput.innerHTML = '';
    if (current !== undefined) {
        if (lastOp === "add") {
            computer = parseFloat(computer) + current;
        } else if (lastOp === "subtract") {
            computer = parseFloat(computer) - current;
        } else if (lastOp === "multiply") {
            computer = parseFloat(computer) * current;
        } else if (lastOp === "divide") {
            computer = parseFloat(computer) / current;
        }
    }
    curInput.innerHTML = computer;
    current = computer;
    console.log('computer: ' + computer + '| current: ' + current);
    computer = [];
})