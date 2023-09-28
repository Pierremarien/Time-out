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
  
      hole.classList.add("mole");
      setTimeout(() => {
        hole.classList.remove("mole");
        if (isGameActive) {
          molesPop();
        }
      }, 1000); 
    }
  
    function whackMole(e) {
      if (!e.isTrusted) return; 
  
      if (e.target.classList.contains("mole")) {
        e.target.classList.add("clicked")
        setTimeout(() => {
            e.target.classList.remove("clicked");
        },300)
        e.target.classList.remove("mole");
        score++;
        scoreDisplay.textContent = `SCORE: ${score}`;
      }
    }
  
    holes.forEach((hole) => hole.addEventListener("click", whackMole));
  
    startGame();
  });