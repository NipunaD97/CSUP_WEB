function Todo() {
  document.getElementById("tdo").style.display = "block";
  document.getElementById("dise").style.display = "none";
    
}

function Dise() {
  document.getElementById("tdo").style.display = "none";
  document.getElementById("dise").style.display = "block";
  

    
}



function roll() {
  var diceRoll1 = Math.floor( Math.random() * 6 ) +1;
  var diceRoll2 = Math.floor( Math.random() * 6 ) +1;
    
    
    document.getElementById("d1").innerHTML = "Dice 1 : "+diceRoll1;
    document.getElementById("d2").innerHTML = "Dice 2 : "+diceRoll2;
    
    if (diceRoll1==diceRoll2){
        document.getElementById("re").innerHTML = "Result : You Won! ";
    }
    else{
        document.getElementById("re").innerHTML = "Try Again ";
    }
    
}

document.addEventListener('DOMContentLoaded', function(){
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = function(){
        particlesJS("snow", {
            "particles": {
                "number": {
                    "value": 200,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "opacity": {
                    "value": 0.7,
                    "random": false,
                    "anim": {
                        "enable": false
                    }
                },
                "size": {
                    "value": 5,
                    "random": true,
                    "anim": {
                        "enable": false
                    }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "enable": true,
                    "speed": 5,
                    "direction": "bottom",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": true,
                        "rotateX": 300,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": false
                    },
                    "onclick": {
                        "enable": false
                    },
                    "resize": false
                }
            },
            "retina_detect": true
        });
    }
    document.head.append(script);
});

