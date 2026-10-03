document.addEventListener("DOMContentLoaded",function() {
    let squares = document.querySelectorAll("#board div");

    for (let index = 0; index < squares.length; index++) {
        const element = squares[index];
         element.classList.add("square");
        
    }
    
});