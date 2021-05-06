// recup information du champ a remplir
// déclare le "nom" username (que l'on voudra dans le champ a remplir)
let user = document.getElementById('name');
let username = 'manu';
// ajoute l'element declencheur que l'on veut et la fonction lorsqu'on rempli le champ
user.addEventListener("input", identity);
function identity() {
    // innerHTML permet d'integrer un texte qui apparaitra dans le html selon l'ID, on peut y integrer des "class" (= mettre un \"xxx\" a la place des "" sinon le code n'est pas correct) 
    if (user.value == username) {
        user.style.backgroundColor = "green";
        document.getElementById('content').innerHTML = "<div class=\"alert alert-success\" role=\"alert\">Bienvenue</div>";

    }
    else {
        user.style.backgroundColor = "red";
        document.getElementById("content").innerHTML = "<div class=\"alert alert-danger\"role=\"alert\">Le nom d'utilisateur n'est pas correct</div>";
    }
}