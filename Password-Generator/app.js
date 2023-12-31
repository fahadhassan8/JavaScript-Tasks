                                            // PASSWORD GENERATOR JS
arr = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  0,
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "+",
  "-",
  ".",
  "~",
  "|",
  "<",
  ">",
  "=",
  "-",
  "_",
  "/",
  ":",
  ";",
  "?",
  "[",
  "]",
  "{",
  "}",
  "~"
];

let inputPassword = document.getElementById('password');
let copiedPsw = document.getElementById('copied');
let inputRange = document.querySelector('#inputRange');
let counter = document.querySelector('.counter');
let pswrdBtn = document.getElementById('generatePswBtn');
let generatedPassword = "";

function randomPassword(){
     generatedPassword = "";
     for(i = 0; i < inputRange.value; i++){
        let randomPass = arr[Math.floor(Math.random() * arr.length)];
        generatedPassword +=randomPass
        inputPassword.value = generatedPassword;
        
    }
}
function copyPassword(){
    copiedPsw.innerHTML = "Password Copied";
    setTimeout(()=>{
        copiedPsw.innerHTML = "";
    },2000)
    navigator.clipboard.writeText(generatedPassword)
}
pswrdBtn.addEventListener('click',copyPassword)



inputRange.addEventListener('input',getRange)

function getRange(){
    counter.innerText = inputRange.value
    randomPassword()
}
