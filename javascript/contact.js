function fun()
{
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var msg = document.getElementById("msg").value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if(name == "")
        document.getElementById("namespan").innerHTML = " * name is required";
    else
        document.getElementById("namespan").innerHTML = "";

    if(email == "")
        document.getElementById("emailspan").innerHTML = " * email is required";
    else if(!emailRegex.test(email))
        document.getElementById("emailspan").innerHTML = " * email is invalid";
    else 
        document.getElementById("emailspan").innerHTML = "";

    if(msg == "")
        document.getElementById("msgspan").innerHTML = "* message is required";
    else
        document.getElementById("msgspan").innerHTML = "";

    if(name != "" && email != "" && emailRegex.test(email) && msg != "") {
        alert("Submitted succesfully")
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("msg").value = "";
    }
    
}