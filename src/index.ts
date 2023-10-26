function multiply(num1, num2) {
    return num1 * num2;
}

function sum(num1, num2) {
    return num1 + num2;
}

function isEven(num) {
    return num % 2 === 0;
}

function showResult(result) {
    if(isEven(result)) {
        console.log(`The result is ${result} and it's even!`);
    } else {
        console.log(`The result is ${result} and it's odd!`);
    }
}

(() => {
    const num1 = prompt("First Number");
    const num2 = prompt("Second Number");
    
    let result = sum(num1,num2);
    result += multiply(1,2);
    showResult(result);
})();
