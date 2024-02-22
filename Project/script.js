function auth(){
    var email=document.getElementById("E-mail").value;
    var password = document.getElementById("Password").value;
    if(email=="admin" && password=="1234")
    {
        window.location.assign("home.html");
        alert("Login Successfull");
    }
    else{
        alert("Invalid Information");
        return;
    }
}