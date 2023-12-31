                                                // Dice Game

var userName = prompt("Enter your name");
var HeadTale = prompt("What do you want? (H/T)").toUpperCase();
var hT = ["H","T"];

var randomNumber = Math.floor(Math.random() * hT.length);

var word = hT[randomNumber];

if(HeadTale === word){
    Swal.fire({
        icon: "success",
        title: "Congratulation You Win",
      });
}
else if(HeadTale === ""){
    Swal.fire({
        icon: "error",
        title: "Empty Input",
      });
}
else if(HeadTale !== "H" && HeadTale !== "T"){
    Swal.fire({
        icon: "error",
        title: "Neither Head nor Tail",
      });
}
else{
    Swal.fire({
        icon: "error",
        title: "You Lost",
      });
}

// var userName = prompt("Enter your Name");
// var headTale = prompt("What do You Want? (H/T)").toUpperCase();
// var hT = ["H","T"];
// var randomNumber = Math.floor(Math.random() * hT.length);
// var word = hT[randomNumber];

// if(headTale == ''){
//     console.log("Input empty"); 
// }
// else if(word === headTale){
//     console.log(userName,"you win")
// }
// else if(headTale !== "H" && headTale !== "T"){
//     console.log("neither head nor tail");   
// }
// else{
//     console.log("you loss")
// }