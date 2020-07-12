function validateForm(){ // Création d'une fonction validateform
    if (total === 0 ){   // Si le total du panier est égal à 0
        alert("Votre panier est vide"); // On crée une une alerte
        return false;   // On retourne le boléen "false" pour indiquer que ce n'est pas valide
    }
    var form1 = document.forms["myForm"]["firstname"]; // Création d'une variable qui prend en compte la valeur de "firstname" dans le formulaire "myForm"
    if (!form1.checkValidity()){ // Si le champ n'est pas valide pour un e-mail
        alert("Il y'a une erreur sur le champ prénom")
        return false;
    }
    var form2 = document.forms["myForm"]["lastname"];
    if (!form2.checkValidity()){ // Si le champ n'est pas valide pour un e-mail
        alert("Il y'a une erreur sur le champ de nom")
        return false;
    }
    var form3 = document.forms["myForm"]["address"];
    if (!form3.checkValidity()){ // Si le champ n'est pas valide pour un e-mail
        alert("Il y'a une erreur sur le champ d'adresse")
        return false;
    }
    var form4 = document.forms["myForm"]["city"];
    if (!form4.checkValidity()){ // Si le champ n'est pas valide pour un e-mail
        alert("Il y'a une erreur sur le champ ville")
        return false;
    }
    var form5 = document.forms["myForm"]["date"].value;
    if (form5 ==""){
        alert("La case Date de naissance doit être remplie");
        return false;
    }
    var form6 = document.forms["myForm"]["email"];
    if (!form6.checkValidity()){ // Si le champ n'est pas valide pour un e-mail
        alert("Il y'a une erreur sur le champ e-mail")
        return false;
    }
    else {
        return true;
    }
}