
document.addEventListener("DOMContentLoaded", function () {
    let square = document.querySelector(".square");
    let coins = document.querySelectorAll(".coin");
    let scoreElement = document.getElementById("score-value");
  
    let isMovingLeft = false;
    let isMovingRight = false;
    let isJumping = false;
  
    let step = 8;
    let jumpHeight = 100;
    let tiltAngle = 15;
    let currentBottom = parseInt(getComputedStyle(square).bottom, 10);
    let score = 0;
    
  
    function moveLeft() {
      let currentLeft = parseInt(getComputedStyle(square).left, 10);
      square.style.left = Math.max(currentLeft - step, 0) + "px";
      square.style.transform = "scaleX(-1) rotate(-" + tiltAngle + "deg)";
      checkPosition();
    }
  
    function moveRight() {
      let currentLeft = parseInt(getComputedStyle(square).left, 10);
      square.style.left = Math.min(currentLeft + step, window.innerWidth - parseInt(getComputedStyle(square).width, 10)) + "px";
      square.style.transform = "scaleX(1) rotate(" + tiltAngle + "deg)";
      checkPosition();
    }
  
    function checkPosition() {
      let squareRect = square.getBoundingClientRect();
    
      coins.forEach((coin) => {
        let coinRect = coin.getBoundingClientRect();
    
        if (
          squareRect.bottom >= coinRect.top &&
          squareRect.top <= coinRect.bottom &&
          squareRect.right >= coinRect.left &&
          squareRect.left <= coinRect.right &&
          coin.style.display !== "none"
        ) {
          // Check if the coin is already being collected
          if (!coin.isCollected) {
            coin.isCollected = true; // Set the flag to true to avoid multiple calls
            handleCoinCollected(coin);
          }
        } else {
          // Reset the flag when the coin is no longer in the collection range
          coin.isCollected = false;
        }
      });
    }
    
    function handleCoinCollected(coin) {
      coin.style.transition = "top 1s linear, opacity 1s linear";
      coin.style.top = "500px";
      coin.style.opacity = "0";
    
      // Listen for the transitionend event to reset the top position and opacity
      coin.addEventListener("transitionend", function handleTransitionEnd() {
        resetCoinPosition(coin);
        coin.style.transition = ""; // Reset transitions for future animations
        coin.style.opacity = "1"; // Restore opacity
    
        // Increment the score by 1 for each collected coin
        score++;
        scoreElement.textContent = score; // Update the score display
    
        // Remove the event listener to avoid multiple calls
        coin.removeEventListener("transitionend", handleTransitionEnd);
      });
    }
   
  
    function resetCoinPosition(coin) {
      const randomX = Math.random() * (window.innerWidth - parseInt(getComputedStyle(coin).width, 10));
      // const randomY = Math.random() * (window.innerHeight - parseInt(getComputedStyle(coin).height, 10));
      
      coin.style.left = `${randomX}px`;
      coin.style.top = `${990}px`;
    
      // Ensure the coin is visible
      coin.style.display = "block";
    }
  
    document.addEventListener("keydown", function (event) {
      if (event.keyCode === 37) {
        isMovingLeft = true;
        isMovingRight = false;
      } else if (event.keyCode === 39) {
        isMovingRight = true;
        isMovingLeft = false;
      } else if (event.keyCode === 38 && !isJumping) {
        isJumping = true;
        let jumpUp = setInterval(function () {
          if (currentBottom < jumpHeight) {
            square.style.bottom = currentBottom + step + "px";
            currentBottom += step;
          } else {
            clearInterval(jumpUp);
  
            let jumpDown = setInterval(function () {
              if (currentBottom > 0) {
                square.style.bottom = currentBottom - step + "px";
                currentBottom -= step;
              } else {
                clearInterval(jumpDown);
                isJumping = false;
              }
            }, 20);
          }
        }, 20);
      }
    });
  
    document.addEventListener("keyup", function (event) {
      if (event.keyCode === 37) {
        isMovingLeft = false;
        square.style.transform = "scaleX(-1) rotate(0)";
      } else if (event.keyCode === 39) {
        isMovingRight = false;
        square.style.transform = "scaleX(1) rotate(0)";
      }
    });
  
    setInterval(function () {
      if (isMovingLeft) {
        moveLeft();
      }
    }, 20);
  
    setInterval(function () {
      if (isMovingRight) {
        moveRight();
      }
    }, 20);
    
  });
   
  document.addEventListener("DOMContentLoaded", function () {
    const container1 = document.getElementById("container11")
    const character = document.getElementById("pers")
    const square = document.querySelector(".square")
    const modal = document.querySelector(".modal")
    const closeBtn = document.querySelector(".close");

    function createFallingObject() {
        const object1 = document.createElement("div")
        object1.className = "fobject"
        container1.appendChild(object1)

        const startPositionX1 = Math.random() * window.innerWidth
        const startPositionY1 = -20
        const speed = 2 + Math.random() * 3

        object1.style.left = startPositionX1 + "px"
        object1.style.top = startPositionY1 + "px"

        function updatePosition() {
            const currentPositionY1 = parseFloat(object1.style.top)
            if (currentPositionY1 < window.innerHeight) {
                object1.style.top = currentPositionY1 + speed + "px"

                if (isOverlapping(character, object1)) {
                    character.style.display = "none"
                    clearInterval(checkOverlapInterval)
                }

                if (isOverlapping(square, object1)) {
                    square.style.display = "none"
                    clearInterval(checkSquareOverlapInterval)
                }

                requestAnimationFrame(updatePosition)
            } else {
                container1.removeChild(object1)
            }
        }
closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });
        updatePosition()
    }

    function spawnObjects() {
        createFallingObject()
        setTimeout(spawnObjects, 700)
    }

    const checkOverlapInterval = setInterval(() => {
        if (isOverlapping(character, container1)) {
            character.style.display = "none"
            clearInterval(checkOverlapInterval)
        }
    }, 100)

    const checkSquareOverlapInterval = setInterval(() => {
        if (isOverlapping(square, container1)) {
            square.style.display = "none"
            modal.style.display = "block"

            clearInterval(checkSquareOverlapInterval)
        }
    }, 100)

    spawnObjects()

    function isOverlapping(element1, element2) {
        const rect1 = element1.getBoundingClientRect()
        const rect2 = element2.getBoundingClientRect()

        return !(
            rect1.top > rect2.bottom ||
            rect1.right < rect2.left ||
            rect1.bottom < rect2.top ||
            rect1.left > rect2.right
        );
    }
});
