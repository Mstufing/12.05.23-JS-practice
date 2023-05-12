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

// ? Task #5
// ? Owofied a Sentence

// function owofied(sentence) {
//     // let res = sentence.replaceAll("i", "wi").replaceAll("e", "we");
//     let res = sentence.replaceAll(/[i]/gi, "wi").replaceAll(/[e]/gi, "we");
//     return `${res} owo`;
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let inp = document.querySelector(".inp");
//     let result = document.querySelector(".result");

//     let m = inp.value.trim();

//     result.innerHTML = owofied(m);
// }

// ? Task #6

// function countCharacters(arr) {
//     return arr.join('').length;
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let inp = document.querySelector(".inp");
//     let result = document.querySelector(".result");

//     let m = inp.value.trim().split(" ");

//     result.innerHTML = countCharacters(m);
// }


// ? Task #7
// ? Profit Margin
// ! To be honest the code works but i don't know how it works ! Just check it !

// function profitMargin(costPrice, salesPrice) {
//     let res;
//     if (costPrice > salesPrice) {
//         res = -((costPrice - salesPrice) / salesPrice) * 100;
//     }
//     else {
//         res = Math.abs(((costPrice - salesPrice) / salesPrice) * 100);
//     }
//     let dec = res.toFixed(1)
//     return `${dec}%`
// }


// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let costInp = document.querySelector(".cost-inp");
//     let salesInp = document.querySelector(".sales-inp");
//     let myResult = document.querySelector(".result");

//     myResult.innerHTML = profitMargin(costInp.value, salesInp.value);
// }

// ? Task #8
// ? Formatting Text on Edabit

// function mdFormat(word, style) {
//     switch (style) {
//         case 'b':
//             return `**${word}**`;
//             break;
//         case 'i':
//             return `_${word}_`;
//             break;
//         case 'c':
//             return "`" + `${word}` + "`";
//             break;
//         case 's':
//             return `~~${word}~~`;
//             break;
//         default:
//             return `undefined`;
//             break;
//     }
// }

// let btn = document.querySelector(".btn");

// btn.onclick = () => {
//     let txtInp = document.querySelector(".txt-inp");
//     let characterInp = document.querySelector(".character-inp");
//     let res = document.querySelector(".result");

//     res.innerHTML = mdFormat(txtInp.value, characterInp.value);
// }
