// ? Task #1
// ? Filter Strings from Array
// ! What's wrong with DOM ?

// function filterArray(arr) {
//     let myArray = [];
//     myArray = arr.filter(elem => typeof elem == 'number' && Number.isInteger(elem));
//     return myArray;
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let arrInp = document.querySelector(".arr-inp");
//     let myResult = document.querySelector(".result");
//     let ar = arrInp.value.trim().split(" ");
//     myResult.innerHTML = filterArray(ar);
// }

// ? Task #2
// ? Calculate Using String Operation

// function calculate(num1, num2, op) {
//     return eval(num1 + op + num2)
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let inpNum1 = document.querySelector(".inp1");
//     let inpNum2 = document.querySelector(".inp2");
//     let inpOper = document.querySelector(".inp3");
//     let myResult = document.querySelector(".result");

//     myResult.innerHTML = calculate(inpNum1.value, inpNum2.value, inpOper.value);
// }

// ? Task #3
// ? Keyboard Mistakes

// function keyboardMistakes(str) {
//     return str.replaceAll("4", "A").replaceAll("5", "S").replaceAll("0", "O").replaceAll("1", "I");
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let myInp = document.querySelector(".inp1");
//     let myResult = document.querySelector(".result");

//     myResult.innerHTML = keyboardMistakes(myInp.value);
// }

// ? Task #4
// ? Return Last Item
// ! How to get the last item when user input "STRING" ?

// function lastItem(input) {
//     return input.at(-1)
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let inp = document.querySelector(".inp");
//     let result = document.querySelector(".result");

//     let m = inp.value.trim().split(" ");

//     result.innerHTML = lastItem(m);
// }