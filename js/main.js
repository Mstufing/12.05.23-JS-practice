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

// ? Task #9
// ? Get Word Count

// function countWords(str) {
//     return str.split(" ").length;
// }

// let btn = document.querySelector(".btn");

// btn.onclick = () => {
//     let txtInp = document.querySelector(".txt-inp");
//     let res = document.querySelector(".result");

//     res.innerHTML = countWords(txtInp.value);
// }

// ? Task #10
// ? Stupid Addition
// TODO Is there another way to solve this task ? Except Else ...If statement!
// ! How to write string in input field ?

// function stupidAddition(a, b) {
//     let res;
//     if (typeof a !== typeof b)
//         res = null;
//     else if (typeof a == "string" && typeof b == "string")
//         res = +a + +b;
//     else if (typeof a == "number" && typeof b == "number")
//         res = String(a) + String(b);
//     return res;
// }

// let clickBtn = document.querySelector(".btn");

// clickBtn.onclick = () => {
//     let firstInp = document.querySelector(".first-inp");
//     let secondInp = document.querySelector(".second-inp");
//     let res = document.querySelector(".result");

//     res.innerHTML = stupidAddition(firstInp.value, secondInp.value);
// }

// console.log(stupidAddition("5", "10"));
// console.log(stupidAddition(5, 10));
// console.log(stupidAddition("5", 10));


// ? Task #11
// ? True Ones, False Zeros

// function integerBoolean(n) {
//     let arr = [];
//     arr = n.split("").map(elem => elem == 1 ? true : false);
//     return `[${arr}]`;
// }

// let btn = document.querySelector(".btn");

// btn.onclick = () => {
//     let firstInput = document.querySelector(".first-inp");
//     let res = document.querySelector(".result");

//     res.innerHTML = integerBoolean(firstInput.value);
// }

// ? Task #12
// ? Fraction Greater Than One

// function greaterThanOne(frac) {
//     return eval(frac) > 1;
// }

// let btn = document.querySelector(".btn");

// btn.onclick = () => {
//     let firstInput = document.querySelector(".first-inp");
//     let res = document.querySelector(".result");

//     res.innerHTML = greaterThanOne(firstInput.value);
// }

// ? Task #13
// ?Count the Capital Letters

// function capitalLetters(str) {
//     const regex = /[A-Z]/g;
//     if (!str.match(regex))
//         return 0;
//     else
//         return str.match(regex).length;
// }

// let btn = document.querySelector(".btn");

// btn.onclick = () => {
//     let firstInput = document.querySelector(".first-inp");
//     let res = document.querySelector(".result");

//     res.innerHTML = capitalLetters(firstInput.value);
// }

// ? Task #14
// ? Count Syllables

// function numberSyllables(word) {
//     return word.split("-").length;
// }

// let btn = document.querySelector(".btn");

// btn.onclick = () => {
//     let firstInput = document.querySelector(".first-inp");
//     let res = document.querySelector(".result");

//     res.innerHTML = numberSyllables(firstInput.value);
// }

// ? Task #15
// ? Hamming Distance

// function hammingDistance(str1, str2) {
//     let cnt = 0;
//     if (str1.length === str2.length) {
//         for (let i = 0; i <= str1.length; i++) {
//             if (str1[i] !== str2[i])
//                 cnt++;
//         }
//         return cnt;
//     }
//     return "unequal word lengths";
// }

// let btn = document.querySelector(".btn");

// btn.onclick = () => {
//     let firstInput = document.querySelector(".first-inp");
//     let secondInp = document.querySelector(".second-inp");
//     let res = document.querySelector(".result");

//     res.innerHTML = hammingDistance(firstInput.value, secondInp.value);
// }

// ? Task #16
// ? Remove the First and Last Characters

// function removeFirstLast(str) {
//     if (str.length <= 2)
//         return str;
//     else
//         return str.slice(1, str.length - 1)
// }

// let myButton = document.querySelector(".btn");

// myButton.onclick = () => {
//     let inp1 = document.querySelector(".first-inp");
//     let myRes = document.querySelector(".result");

//     myRes.innerHTML = removeFirstLast(inp1.value);
// }

// ? Task #17
// ? Retrieve the Subreddit
// ! Try to get how function works !!!

// function subReddit(link) {
//     let arr = [];
//     arr = link.split("/");
//     return arr[arr.length - 2]
// }

// let myButton = document.querySelector(".btn");

// myButton.onclick = () => {
//     let inp1 = document.querySelector(".first-inp");
//     let myRes = document.querySelector(".result");

//     myRes.innerHTML = subReddit(inp1.value);
// }


// ? Task #18
// ? Broken Bridge

// function isSafeBridge(str) {
//     if (str.match(" "))
//         return false;
//     return true;
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let inp = document.querySelector(".inp");
//     let res = document.querySelector(".res");

//     res.innerHTML = isSafeBridge(inp.value);
// }

// ? Task #19
// ? Vowel Replacer

// function replaceVowels(str, ch) {
//     return str.replace(/[aeiou]/gi, ch);
// }

// let myButton = document.querySelector(".btn");

// myButton.onclick = () => {
//     let firstInp = document.querySelector(".inp1");
//     let secondInp = document.querySelector(".inp2");
//     let myRes = document.querySelector(".res");

//     myRes.innerHTML = replaceVowels(firstInp.value, secondInp.value);
// }

// ? Task #20
// ? Word Endings

// function addEnding(arr, ending) {
//     let myArr = [];
//     myArr = arr.map(elem => elem + ending)
//     return `[${myArr}]`;
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let firstInp = document.querySelector(".inp1");
//     let secondInp = document.querySelector(".inp2");
//     let myResult = document.querySelector(".res");
//     let myArr = firstInp.value.trim().split(" ");
//     myResult.innerHTML = addEnding(myArr, secondInp.value);
// }

// ? Task #21
// ? Return the Four Letter Strings

// function isFourLetters(arr) {
//     let myArr = [];
//     myArr = arr.filter(elem => elem.length === 4)
//     return `[${myArr}]`;
// }

// let myBtn = document.querySelector(".btn");

// myBtn.onclick = () => {
//     let firstInp = document.querySelector(".inp1");
//     let myResult = document.querySelector(".res");
//     let myArr = firstInp.value.trim().split(" ");
//     myResult.innerHTML = isFourLetters(myArr);
// }

