x = 0
y = 0

formas = " "

var falar = window.webkitSpeechRecognition
var falar2 = new fala()

function setup(){
    canvas = createCanvas(1100, 600)
    canvas.center()
}

function draw(){
  for( var i = 1; 1 <= to_number; i++)

  x = Math.floor(Math.random() * 900)
  y = Math.floor(Math.random() * 600)


    if(forma == "retângulo"){
       
        rect(x, y, 20)
        forma = ""

    }
    document.getElementById("status").innerHTML = to_number + "retângulos desenhados"
}

function start(){
    document.getElementById("status").innerHTML = "O sistema está ouvindo, por favor fale."
    fala2.start()
}

fala2.onresult = function (event) {
 console.log(event)

 var conteudo = event.results[0][0].transcript
 document.getElementById("status").innerHTML = conteudo
 forma = conteudo
}