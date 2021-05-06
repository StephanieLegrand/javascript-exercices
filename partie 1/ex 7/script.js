function test() {
    let age=document.getElementById('n1').value;
   
    if (age>=18 && age <110) {
        alert('Vous êtes majeur');
    }
    else if (age>=0 && age<18){
        alert('Vous êtes mineur');
    }
    else {
        alert ('Mettez une valeur entre 1 et 110')
    }
    
}