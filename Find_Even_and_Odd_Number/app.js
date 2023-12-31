                                    // Find Even & Odd Numbers
// FIRST METHOD 

var numArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var even = [];
var odd = [];

for (i = 0; i < numArray.length; i++){
    if(numArray[i] % 2 === 0){
        even.push(numArray[i]);
    }
    else{
        odd.push(numArray[i]);
    }
}
document.write("Even Number: ",even, "<br/>");
document.write("Odd Number: ",odd, "<br/>");

// SECOND METHOD
console.log("Even Number:");
for (i = 0; i <= 20; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

console.log("Odd Number:");
for (i = 0; i <= 20; i++){
    if(i % 2 !== 0){
        console.log(i);
    }
}