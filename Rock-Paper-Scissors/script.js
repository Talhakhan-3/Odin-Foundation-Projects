let cScore = 0 , hScore = 0, draw = 0;
function round()
{
    for (let i = 1; i <= 5; i++)
    {
        console.log("------ Round "+i+" -------");
        let cca = computerInput();
        console.log("Computer Choice : "+cca );
        let cha = userInput();
        console.log("User Choice : "+cha );
        score(cca,cha);
        console.log("Computer: " + cScore);
        console.log("Human: " + hScore);
        console.log("Draws: " + draw);
    }
    winner();
}

function computerInput()
{
    let cc = Math.floor(Math.random()*3);
    let cca;
    if(cc === 0 )
    {
         cca = "rock";
    }
    else if(cc === 1)
    {
         cca = "paper";
    }
    else
    {
         cca = "scissor";
    }
    return cca;
}

function userInput()
{
    let ch , cha;
    do
    {
         ch = prompt("Enter Human Choice : Rock Or Paper Or Scissor");
         cha = ch ? ch.toLowerCase().trim() : "";
    }while(cha !== "rock" && cha !== "paper" && cha !== "scissor");
    return cha;
}

function score(cca,cha)
{
    if (cca === "rock" && cha === "paper" )
    {
        hScore ++;
    }
    else if (cca === "paper" && cha === "scissor" )
    {
        hScore ++;
    }
    else if (cca === "scissor" && cha === "rock" )
    {
        hScore ++;
    }
    else if(cca === "scissor" && cha === "scissor")
    {
        draw ++;
    }
    else if(cca === "rock" && cha === "rock")
    {
        draw ++;
    }
    else if(cca === "paper" && cha === "paper")
    {
        draw ++;
    }
    else
    {
        cScore ++;
    }
}

function winner()
{
    if (cScore > hScore)
    {
        return console.log("Winner Is Computer !");
    }
    else if( hScore > cScore)
    {
        return console.log("Winner is Human !");
    }
    else
    {
        return console.log("That's A Draw !")
    }
}

round();

// Round No
// take and display user input 
// take and display computer output
// User Score and Computer Score after Each Round 
// declare winner at the end
