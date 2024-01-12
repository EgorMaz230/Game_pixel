

        document.addEventListener("DOMContentLoaded", function () {
          const container1 = document.getElementById("container11");
      
          function createFallingObject() {
              const object1 = document.createElement("div1");
              object1.className = "falling-object";
              container1.appendChild(object1);
      
              const startPositionX1 = Math.random() * window.innerWidth;
              const startPositionY1 = -20;
              const speed = 2 + Math.random() * 3; // Adjust speed as needed
      
              object1.style.left = startPositionX1 + "px";
              object1.style.top = startPositionY1 + "px";
      
              function updatePosition() {
                  const currentPositionY1 = parseFloat(object1.style.top);
                  if (currentPositionY1 < window.innerHeight) {
                      object1.style.top = currentPositionY1 + speed + "px";
                      requestAnimationFrame(updatePosition);
                  } else {
                      container1.removeChild(object1);
                  }
              }
      
              updatePosition();
          }
      
          function spawnObjects() {
              createFallingObject();
              setTimeout(spawnObjects, 2000); 
          }
      
          spawnObjects();
      });
      