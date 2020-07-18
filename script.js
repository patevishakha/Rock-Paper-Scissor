var yourScore= 0;
var computerScore= 0;


function computer_play()
{
    var arr = ["Rock","Paper","Scissor"];
    var myvar = arr[Math.floor(Math.random()* arr.length)];
    document.getElementById("p2").innerHTML = myvar;
    return myvar;

}
function playrock()
{
    document.getElementById("p1").innerHTML = "Rock";
    play("Rock");
    
}
function playpaper()
{   
    document.getElementById("p1").innerHTML = "paper";
    play("Paper");
}
function playscissor()
{   
    document.getElementById("p1").innerHTML = "Scissor";
    play("Scissor");
}

function play(human_choice)
{
    var computer_choice = computer_play();
    if(human_choice=="Rock")
    {
        if(computer_choice=="Rock")
            document.getElementById("result").innerHTML = "IT'S TIE";
        else if(computer_choice=="Paper")
            document.getElementById("result").innerHTML = "YOU LOSE";
        else if(computer_choice=="Scissor")
            document.getElementById("result").innerHTML = "YOU WIN";        
    }

    else if(human_choice=="Paper")
    {
        if(computer_choice=="Rock")
            document.getElementById("result").innerHTML = "YOU WIN";
        else if(computer_choice=="Paper")
            document.getElementById("result").innerHTML = "IT'S TIE";
        else if(computer_choice=="Scissor")
            document.getElementById("result").innerHTML = "YOU LOSE"; 
    }

    else if(human_choice=="Scissor")
    {
        if(computer_choice=="Rock")
            document.getElementById("result").innerHTML = "YOU LOSE";
        else if(computer_choice=="Paper")
            document.getElementById("result").innerHTML = "YOU WIN";
        else if(computer_choice=="Scissor")
        document.getElementById("result").innerHTML = "IT'S TIE"; 
    }

    if(document.getElementById("result").innerHTML == "YOU WIN")
    {
        yourScore+=1;
        document.getElementById("your_score").innerHTML = yourScore;
    }
    else if(document.getElementById("result").innerHTML == "YOU LOSE")
    {
        computerScore+=1;
        document.getElementById("computer_score").innerHTML = computerScore;
    }

}