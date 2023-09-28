 document.addEventListener("DOMContentLoaded", function () {
    
    const holes = document.querySelectorAll(".hole");
    const scoreDisplay = document.querySelector(".score");
  
    let score = 0;
    let isGameActive = false;
  
    function startGame() {
      if (isGameActive) return;
  
      isGameActive = true;
      score = 0;
      scoreDisplay.textContent = "SCORE: 0";

      molesPop();
    }

    function molesPop() {
      const randomHoleIndex = Math.floor(Math.random() * holes.length);
      const hole = holes[randomHoleIndex];
      const randomDelay = Math.random() * 2 + 1;
      const delayInMilliseconds = randomDelay * 1000;
  
      hole.classList.add("mole");
      setTimeout(() => {
        if (isGameActive) {
            hole.classList.remove("mole");
            if (!hole.classList.contains("clicked")) {
                score--;
                scoreDisplay.textContent = `SCORE: ${score}`;
              }
              hole.classList.remove("clicked");
            molesPop();
          }
      }, delayInMilliseconds); 
    }
  
    function whackMole(e) {
      if (!e.isTrusted) return; 
  
      if (e.target.classList.contains("mole")) {
        e.target.classList.add("clicked")
        e.target.classList.remove("mole");
        score++;
        scoreDisplay.textContent = `SCORE: ${score}`;
      } 
    }
  
    holes.forEach((hole) => hole.addEventListener("click", whackMole));
  
    startGame();
  });