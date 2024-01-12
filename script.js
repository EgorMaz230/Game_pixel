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
        coin.style.display = "none";
        score++;
        scoreElement.textContent = score;
        resetCoinPosition(coin);
      }
    });
  }

  
  function resetCoinPosition(coin) {
    const randomX = Math.random() * (window.innerWidth - 50);
    const randomY = Math.random() * (window.innerHeight - 50);
    coin.style.left = `${randomX}px`;
    coin.style.top = `${randomY}px`;
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
