function password(){
    var checkbox = document.getElementById("exampleInputPassword1");
    if (checkbox.type === "password") {
        checkbox.type = "text";
    } else {
        checkbox.type = "password";
    }
}
function submitprocess(){
    var checkbox = document.getElementById("exampleInputEmail1");
    var ceheckboxtwo = document.getElementById("exampleInputEmail1");
    if(checkbox === ceheckboxtwo){
        alert("Login Successful")
    }else if(checkbox === " " || ceheckboxtwo === " " ){
        alert("Enter Your Email Or Password !!!!")
    }
    else{
        alert("Your Email Or Password Is Wrong ")
    }
}