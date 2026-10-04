document.addEventListener("DOMContentLoaded",function() {
    let squares = document.querySelectorAll("#board div");
    let currentPlayer = "X";
    let status = document.getElementById("status");
    let newGame = document.querySelector(".btn");
    let winningCombos = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]

    ];

    for (let index = 0; index < squares.length; index++) {
        const element = squares[index];
         element.classList.add("square");

    
    
    element.addEventListener("click",function(){

        if(element.textContent == ""){
            element.textContent = currentPlayer;
            element.classList.add(currentPlayer);

            if (currentPlayer == "X") {
            currentPlayer = "O";
            }else{
                currentPlayer = "X";
            }
            for(let combo of winningCombos){
                if(squares[combo[0]].textContent != "" && 
                    squares[combo[0]].textContent == squares[combo[1]].textContent &&
                    squares[combo[1]].textContent == squares[combo[2]].textContent){
                        let winner = squares[combo[0]].textContent;
                        status.textContent = "Congratulations! " + winner + " is the Winner!";
                        status.classList.add("you-won")

                }
        }
        }
        

        

       
    });

    element.addEventListener("mouseover", function(){

        element.classList.add("hover");
    });

    element.addEventListener("mouseleave", function(){

        element.classList.remove("hover");

    });
}
        newGame.addEventListener("click", function(){

            for(let element of squares){
                element.textContent = "";
                element.classList.remove("X");
                element.classList.remove("O");
            }
            currentPlayer = "X";

            status.textContent = "Move your mouse over a square and click to play an X or an O. ";
            status.classList.remove("you-won");
         });
        
});
