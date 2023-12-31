                                                            //Palindrome Words

var userInput = prompt("Enter a word");

var checkUserInput = "";

for(var i = userInput.length -1; i >= 0; i--){

    // checkUserInput = checkUserInput + userInput[i];
    checkUserInput += userInput[i];

}
if (userInput === checkUserInput){

    alert(userInput + " is a palindrome word");

}
else{

    alert(userInput + " is not a palindrome word");

}

/* initialize i = word.length -1; because we have to check user given word length and -1 applied for reverting 
the user value to check the given word is palindrome or not -1 counts the value from end i-- is applied because
in reverting the value has been decrement*/