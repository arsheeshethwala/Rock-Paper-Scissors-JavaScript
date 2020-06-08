var userChoice = prompt("Choose any one option to play the game : \n1.Rock\n2.Paper\n3.Scissor");
    var dynamicMsg = document.getElementById("dmsg");
    var userImg = document.getElementById("userImg");
    var compImg = document.getElementById("compImg")

    function getComputerChoice() {
      const choices = ['rock', 'paper', 'scissors'];
      const randomNum = (Math.floor(Math.random() * 3));
      return choices[randomNum];
    }


    function game(userChoice) {
      const computerChoice = getComputerChoice();
      if (computerChoice == "rock") {
        compImg.src = "./assets/rock.png";
      }
      else if (computerChoice == "paper") {

        compImg.src = "./assets/paper.png";
      }
      else {

        compImg.src = "./assets/scissors.png";
      }
      //Checking for a tie
      if (userChoice === computerChoice) {
        dynamicMsg.innerHTML = userChoice + " equals to " + computerChoice + ". Its a draw";
        return;
      }

      //Check for Rock
      if (userChoice === "rock") {
        if (computerChoice === "scissors") {
          dynamicMsg.innerHTML = userChoice + " beats " + computerChoice + ". You Win this Round";
          return;
        } else {
          dynamicMsg.innerHTML = computerChoice + " beats " + userChoice + ". You loose this Round";
          return;
        }
      }
      //Check for Paper
      if (userChoice === "paper") {
        if (computerChoice === "scissors") {
          dynamicMsg.innerHTML = computerChoice + " beats " + userChoice + ". You loose this Round";
          return;
        } else {
          dynamicMsg.innerHTML = userChoice + " beats " + computerChoice + ". You Win this Round";
          return;
        }
      }
      //Check for Scissors
      if (userChoice === "scissors") {
        if (computerChoice === "rock") {
          dynamicMsg.innerHTML = computerChoice + " beats " + userChoice + ". You loose this Round";
          return;
        } else {
          dynamicMsg.innerHTML = userChoice + " beats " + computerChoice + ". You Win this Round";
          return;
        }
      }
    };

    //Prompt user function conditions

    if (userChoice == 1) {
      userImg.src = "./assets/rock.png"
      game("rock");
    }
    else if (userChoice == 2) {
      userImg.src = "./assets/paper.png"
      game("paper");
    }
    else if (userChoice == 3) {
      userImg.src = "./assets/scissors.png"
      game("scissors");
    }
    else {
      alert("Please select from 1, 2 and 3 to play this game...!!!!");
      window.location.reload();
    }