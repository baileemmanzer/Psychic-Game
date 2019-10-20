var ComputerChoices=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

        var WinCount=0;
        var LossCount=0;
        var GuessLeft=10;
        var GuessedLetters= [];
        var ranLetter="";
        var usedArray=[];


        function CompGuess() {
            ranLetter= ComputerChoices[Math.floor(Math.random()*ComputerChoices.length)];
        }
        CompGuess();
    document.onkeyup=function (event) {
          
        var userGuess = event.key.toLowerCase();

        if (userGuess===ranLetter) {
            WinCount++;
            GuessLeft=10;
            CompGuess();
        } else if (usedArray.indexOf(userGuess) ===-1){
            GuessLeft--;
            usedArray.push(userGuess);
        }
        else {
            alert("You've already guessed that!");
        }
        if (GuessLeft==0) {
            LossCount++;
            GuessLeft=10;
            CompGuess();
        }

        document.getElementById('WinCount').innerHTML=WinCount;
        document.getElementById('LossCount').innerHTML=LossCount;
        document.getElementById('GuessLeft').innerHTML=GuessLeft;
        document.getElementById('userGuess').innerHTML = usedArray;
    }
