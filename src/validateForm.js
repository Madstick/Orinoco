function validateForm(){
    var form1 = document.forms["myForm"]["firstname"].value;
    if (form1 ==""){
        alert("La case Prénom doit être remplie");
        return false;
    }
    var form2 = document.forms["myForm"]["lastname"].value;
    if (form2 ==""){
        alert("La case Nom doit être remplie");
        return false;
    }
    var form3 = document.forms["myForm"]["address"].value;
    if (form3 ==""){
        alert("La case Adresse doit être remplie");
        return false;
    }
    var form4 = document.forms["myForm"]["city"].value;
    if (form4 ==""){
        alert("La case Ville doit être remplie");
        return false;
    }
    var form5 = document.forms["myForm"]["date"].value;
    if (form5 ==""){
        alert("La case Date de naissance doit être remplie");
        return false;
    }
    var form6 = document.forms["myForm"]["email"].value;
    if (form6 ==""){
        alert("La case E-mail doit être remplie");
        return false;
    }
    else {
        return true;
    }
}