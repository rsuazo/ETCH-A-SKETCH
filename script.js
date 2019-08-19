const container = document.querySelector('.container');
const reset = document.querySelector('.reset');

container.style.gridTemplateColumns = "repeat(16, 1fr)";
container.style.gridTemplateRows = "repeat(16, 1fr)";

const box = document.querySelectorAll('.square');

let squares = Array.from(box);



for(i = 0; i < 10000; i++){
    
    const square = document.createElement('div');

    square.classList.add('square');

    container.appendChild(square);
  square.style.background = "azure"; 
  square.style.filter = "brightness(95%)"; 
}

reset.addEventListener("click", clickOut);

 const y = document.querySelectorAll(".square");
  y.forEach(square => {
    square.addEventListener("mouseover", function(e) {
      square.style.setProperty("background-color", "white");
      shader(square);
    });
  });


function shader(square) {
  if (square.style.filter == "") {
    square.style.filter = "brightness(90%)";
  } else if (square.style.filter != "brightness(0%)") {
    current_brightness = square.style.filter.slice(-4, -2);
    current_brightness -= 20;
    square.style.filter = "brightness(" + current_brightness + "%)";
  }
}


function clickOut() {
    const x = document.querySelectorAll(".square");
    x.forEach(function(element){element.style.background = "azure";});
    x.forEach(function(element){element.style.filter = "brightness(95%)";});

    let number = prompt("Please enter a number");
    let rowsandcols = 'repeat(' + number + ', 1fr)';
  
    container.style.gridTemplateColumns = rowsandcols;
    container.style.gridTemplateRows = rowsandcols;
}

  
