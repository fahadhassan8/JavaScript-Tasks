let calculate = document.querySelector('#Cal');
let result = document.querySelector("#result");
let equalBtn = document.querySelector('#equal-btn');
let clearBtn = document.querySelector('.clear');
let removeBtn = document.querySelector('.remove');

function getnum(num){
    calculate.value += num;
    calculate.style.color = "gray";
}
function equalTo(){
    result.value = eval(calculate.value);
}
equalBtn.addEventListener('click', equalTo);

function clear(){
    result.value = "";
    calculate.value = "";
}
function remove(){
    result.value = "";
    calculate.value = "";
}
clearBtn.addEventListener('click',clear)
removeBtn.addEventListener('click',remove)