

//DATA STORAGE
function savePlayerDataInLocalStorage()
{
    
}

function getPlayerDataFromLocalStorage()
{
    
}

function main()
{    
    // GENERAL //
    //Fetched elements
    const audioButtons = document.querySelectorAll("i");
    const gameAudio = document.querySelector("#audioPlay");
    const isPlaying = gameAudio.play;
    const muteButton = document.createElement("i");
    const playerName = document.querySelector("#userName > input");

    //Audio toggle
    audioButtons.forEach(function(audioButton){
        audioButtons.addEventListener("click",function(){
        
            alert("click working");
        
            //Conditions to control audio toggle
            if(isPlaying==true)
            {
                gameAudio.paused();
                audioButton.style.visibility="hidden";
                muteButton.setAttribute("class","fas fa-volume-mut");  
            }
    
            else
            {
                gameAudio.play();
                muteButton.style.visibility="hidden";
                audioButton.style.visibility="visible";
            }
        });
    });


    //START


    //LOCAL DATA STORAGE
    

    //GAMEPLAY


    //WIN-LOSE


    //REPORT
    
}
main();