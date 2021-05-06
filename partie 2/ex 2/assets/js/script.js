// document.getElementById('javaImg').addEventListener("mouseover", function identity () {
    
//     document.getElementById('javaImg').width='500';
    
// });

// document.getElementById('javaImg').addEventListener("mouseout", function mouseout() {
//     document.getElementById('javaImg').width='768';
// });

let img = document.getElementById('javaImg');

img.addEventListener('click', (function zoom(){
    let width= img.clientWidth;
    img.style.width = (width + 100) + 'px';

    if (width >= 1000){
    img.style.width = 600 + 'px';
}
    else if (width <1000) {
        img.style.width = (width + 100) + 'px';
    }
}
 ) )