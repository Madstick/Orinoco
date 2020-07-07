function validateForm(){ // Création d'une fonction validateform
    if (total === 0 ){   // Si le total du panier est égal à 0
        alert("Votre panier est vide"); // On crée une une alerte
        return false;   // On retourne le boléen "false" pour indiquer que ce n'est pas valide
    }
    var form1 = document.forms["myForm"]["firstname"].value; // Création d'une variable qui prend en compte la valeur de "firstname" dans le formulaire "myForm"
    if (form1 ==""){ // Si l'input "firstname" est vide
        alert("La case Prénom doit être remplie"); // On crée une alerte
        return false; // On retourne false
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
    var form6 = document.forms["myForm"]["email"];
    if (!form6.checkValidity()){ // Si le champ n'est pas valide pour un e-mail
        alert("Il y'a une erreur sur le champ e-mail")
        return false;
    }
    else {
        return true;
    }
}