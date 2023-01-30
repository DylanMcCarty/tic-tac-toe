Create pseudocode.md file
Identify procedures
Identify functions
Identify objects
Identify the requirements.
Identify the design.
Identify the desired functionality.
Define how the procedures, functions, and objects work together to achieve the requirements, design, and functionality.
Design the process to transition from pseudocode to working Code
Transition from Pseudocode to Procedural Code
Tip: When the page loads start with an init function to setup the next series of subroutines as procedures
Transition from Procedural Code to Functional Code
Tip: When the init procedure is invoked you can invoke other functions like “setState” or “buildUserInterface” or “getData”.
Develop the project from pseudocode and refactor your pseudocode as needed
Debug often using DevTools’ console, elements, sources
Tip: Use breakpoints for better control of your code while debugging
Test often
Save often
Commit and Push to your branch on GitHub when important changes happen


# Random Notes
reset button

// win condition
checkWinCondition() {
    if state = winConditions[]
    run WinnerFunction
}

I need to have a function that shows the current state of the page 
how will i do that? 
how can i decide to update the state of the page with a button?
 


# Post Bootcamp Psuedo-code: Tic-Tac-Toe, Re-imagined, Upgraded, and ReBuilt

I want to create a tic tac toe board in javascript which is capable of playing tic tac toe

# Must Haves 

    - A player X and a player O
    - The players must be able to take turns playing placing an x and an o 1 at a time
    - the board game must be able to recognize edge cases such as a board that is full where no one has one
    - the game must also recognize when someone has won on the last move so that the player that one has still won.
    - the game must be able to have a reset game button
    - the game must have a start game button

# Procedures

A function that creates the divs which is the game board
A function which changes the player each turn
A function which adds the player letter to the board when clicked
a function that checks for a possible win after each round

# Objects

An object that stores the board state and will update as the game is played
An object that shows the win conditions and will be used to check each round if a player has one