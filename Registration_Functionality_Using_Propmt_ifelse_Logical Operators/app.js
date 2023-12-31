var userName = prompt("Enter your Name");
var regEmail = prompt("Enter your Email");
var phoneNumber = +prompt("Enter your Mobile Number");
var regPassword = prompt("Enter your Password");
var confirmPassword = prompt("Cnfirm Password");
if(userName !=="" && regEmail !==""){
    if(regPassword === confirmPassword){
        alert("Login Successfully");
        var isLogin = prompt("Do you want to login");
        if(isLogin === "yes"){
            var userEmail = prompt("Please enter your email");
            var userPassword = prompt("Please enter your password");
            if(userEmail === regEmail && userPassword === regPassword){
                alert("Login successfully");
            }else{
                alert("Invalid Credentials");
            }
        }else{
            alert("Okay see you soon");
        }
    }else{
        alert("Invalid Password");
    }
} else{
    console.log("Fill all inputs");
}