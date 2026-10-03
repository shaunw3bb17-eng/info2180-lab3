document.addEventListener("DOMContentLoaded",function() {
    let squares = document.querySelectorAll("#board div");
    let currentPlayer = "X";

    for (let index = 0; index < squares.length; index++) {
        const element = squares[index];
         element.classList.add("square");
        
    
    
    element.addEventListener("click",function(){

    
        element.textContent = currentPlayer;
        element.classList.add(currentPlayer);

        if (currentPlayer == "X") {
            currentPlayer = "O";
        }else{
            currentPlayer = "X";
        }

       
    });
}
});
