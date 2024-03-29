document.addEventListener("DOMContentLoaded", function () {
    let square = document.querySelector(".square");
    let coins = document.querySelectorAll(".coin");
    let scoreElement = document.getElementById("score-value");
  
    let isMovingLeft = false;
    let isMovingRight = false;
    let isJumping = false;
  
    let step = 8;
    let jumpHeight = 130;
    let tiltAngle = 10;
    let currentBottom = parseInt(getComputedStyle(square).bottom, 10);
    let score = 0;
    
        

        // // Отримання об'єкта з відліком
        // const countdown = document.getElementById("countdown");
    
        // // Встановлення початкового значення таймера
        // let timeLeft = 20;
    
        // // Функція для оновлення відображення таймера
        // function updateCountdown() {
        //     countdown.textContent = `Redirecting in ${timeLeft} seconds`;
        // }
    
        // // Функція для відліку часу та переходу на нову сторінку після 20 секунд
        // function countdownTimer() {
        //     updateCountdown(); // Оновлення відображення таймера
    
        //     // Зменшення лічильника кожну секунду
        //     const timer = setInterval(() => {
        //         timeLeft--;
        //         updateCountdown(); // Оновлення відображення таймера
    
        //         // Перевірка, чи досягнуто кінця таймера
        //         if (timeLeft <= 0) {
        //             clearInterval(timer); // Зупинка таймера
        //             window.location.href = "index.html"; // Перехід на нову сторінку
        //         }
        //     }, 1000);
        // }
    
        // // Виклик функції відліку таймера
        // countdownTimer();
  
        let audio = document.getElementById("myAudio");
        let toggleButton = document.getElementById("toggleButton");
        let isPlaying = false;
        // let volumeButton = document.getElementById("volumeButton");
        toggleButton.addEventListener("click", function() {
            if (!isPlaying) {
              audio.pause();
              toggleButton.textContent = "Play Music";
             
               
            } else {
              audio.play();
              toggleButton.textContent = "Pause Music";
            }
            isPlaying = !isPlaying; // Переключаем состояние isPlaying
        }); 
      //   volumeButton.addEventListener("input", function() {
      //     let volume = parseFloat(volumeButton.value);
      //     audio.volume = volume;
      // });


    
    function checkPosition() {
      let squareRect = square.getBoundingClientRect();
      var back = document.querySelector('.back');
  
      var obstacleRect = obstacle.getBoundingClientRect();
      var obstacleFirstRect = obstacleFirst.getBoundingClientRect();
      var obstacleSecondRect = obstacleSecond.getBoundingClientRect();
  
      var threshold = 10;
  
      // Проверка коллизий с препятствиями
      if (
          isColliding(squareRect, obstacleRect, threshold) ||
          isColliding(squareRect, obstacleFirstRect, threshold) ||
          isColliding(squareRect, obstacleSecondRect, threshold)
      ) {
          handleDeath();
      }
  
      // Проверка коллизий с монетами
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
  
  function moveLeft() {
    var currentLeft = parseInt(getComputedStyle(square).left, 10);
    if (currentLeft - step > 0) { // Перевірка, чи не вийшов персонаж за межі лівого краю екрану
      square.style.left = currentLeft - step + 'px';
      square.style.transform = 'scaleX(-1) rotate(-' + tiltAngle + 'deg)';
      currentBottom = parseInt(getComputedStyle(square).bottom, 10); // Обновлення currentBottom
      checkPosition();
    }
  }
  
  function moveRight() {
    var currentLeft = parseInt(getComputedStyle(square).left, 10);
    var maxX = window.innerWidth - parseInt(getComputedStyle(square).width, 10);
    if (currentLeft + step < maxX) { // Перевірка, чи не вийшов персонаж за межі правого краю екрану
      square.style.left = currentLeft + step + 'px';
      square.style.transform = 'scaleX(1) rotate(' + tiltAngle + 'deg)';
      currentBottom = parseInt(getComputedStyle(square).bottom, 10); // Обновлення currentBottom
      checkPosition();
    }
  }
  
    
    
   
      function handleCoinCollected(coin) {
        coin.style.transition = "top 1s linear, opacity 1s linear";
        coin.style.top = "500px";
        coin.style.opacity = "0";
      
        // Воспроизведение звука при сборе монетки
        var coinSound = new Audio('zvuk-vyibivaniya-monetyi-iz-igryi-super-mario-30119.mp3');
        coinSound.play();
      
        // Listen for the transitionend event to reset the top position and opacity
        coin.addEventListener("transitionend", function handleTransitionEnd() {
          resetCoinPosition(coin);
          coin.style.transition = ""; // Reset transitions for future animations
          coin.style.opacity = "1"; // Restore opacity
      
          // Increment the score by 1 for each collected coin
          score++;
          scoreElement.textContent = score; // Update the score display
      
          // Check if the player has collected 5 coins
          if (score >= 5) {
            // Redirect to index.html
            window.location.href = "./secondlevel.html";
          }
      
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
    
 
   

    const container1 = document.getElementById("container11")
    const character = document.getElementById("pers")
    // const square = document.querySelector(".square")
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



  var body = document.body;
  var obstacle = document.querySelector('.obstacle');
  var obstacleFirst = document.querySelector('.obstacle_first');
  var obstacleSecond = document.querySelector('.obstacle_second');

  // var isMovingLeft = false;
  // var isMovingRight = false;
  // var isJumping = false;



  var initialLeft = parseInt(getComputedStyle(square).left, 10);
  // var currentBottom = parseInt(getComputedStyle(square).bottom, 10);

  var isDead = false;

  function animateDeath() {
    isDead = true;
    square.style.transition = 'left 0.5s ease, transform 0.5s ease';
    currentBottom = parseInt(getComputedStyle(square).bottom, 10); // Обновление currentBottom
  
    setTimeout(function () {
      square.style.left = parseInt(getComputedStyle(square).left, 10) + 'px';
  
      setTimeout(function () {
        square.style.transition = 'bottom 0.5s ease';
        square.style.bottom = currentBottom + jumpHeight + 'px';
  
        setTimeout(function () {
          square.style.bottom = '0';
        }, 500);
  
        setTimeout(function () {
          square.style.transition = 'transform 0.5s ease';
          square.style.transform = 'rotate(90deg)';
          
          setTimeout(function () {
            resetPlayer();
          }, 500);
        }, 1000);
      }, 500);
    }, 500);
  }
  
  

  function resetPlayer() {
    isDead = false;
    square.style.transition = 'none';
    square.style.left = initialLeft + 'px';
    square.style.bottom = '0';
    square.style.transform = 'rotate(0)';
    currentBottom = parseInt(getComputedStyle(square).bottom, 10); // Обновление currentBottom
  }

  function handleDeath() {
    if (!isDead) {
        animateDeath();
        // Обнуляем счетчик score
        score = 0;
        scoreElement.textContent = score;
        setTimeout(function () {
            resetPlayer();
        }, 2500);
    }
}



  function isColliding(rect1, rect2, threshold) {
    return (
      rect1.right - threshold > rect2.left &&
      rect1.left + threshold < rect2.right &&
      rect1.bottom - threshold > rect2.top &&
      rect1.top + threshold < rect2.bottom
    );
  }

  document.addEventListener('keydown', function (event) {
    if (event.keyCode === 37) {
      isMovingLeft = true;
      isMovingRight = false;
    } else if (event.keyCode === 39) {
      isMovingRight = true;
      isMovingLeft = false;
    } else if (event.keyCode === 38 && !isJumping) {
      isJumping = true;
      var jumpUp = setInterval(function () {
        if (currentBottom < jumpHeight) {
          square.style.bottom = currentBottom + step + 'px';
          currentBottom += step;
        } else {
          clearInterval(jumpUp);
          var jumpDown = setInterval(function () {
            if (currentBottom > 0) {
              square.style.bottom = currentBottom - step + 'px';
              currentBottom -= step;
            } else {
              clearInterval(jumpDown);
              isJumping = false;
              checkPosition(); // Check position after the jump is complete
            }
          }, 20);
        }
      }, 20);
    }
  });

  document.addEventListener('keyup', function (event) {
    if (event.keyCode === 37) {
      isMovingLeft = false;
      square.style.transform = 'scaleX(-1) rotate(0)';
    } else if (event.keyCode === 39) {
      isMovingRight = false;
      square.style.transform = 'scaleX(1) rotate(0)';
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

function reloadPage() {
  location.reload(true);
}
