document.getElementById('result').addEventListener('click',
function test() {  
    let x=document.getElementById('n1').value;
    let y=document.getElementById('n2').value;
  
   
    if (x>0) {
        var rem= x % y ;
        alert(rem)
    }
    else {
        alert('erreur');
    }  
} 
)