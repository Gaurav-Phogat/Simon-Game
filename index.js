var randomNum = 0;
var array = [];
var count = 0;
var temp = 0;
var gAudio = new Audio('./sounds/green.mp3');
var rAudio = new Audio('./sounds/red.mp3');
var yAudio = new Audio('./sounds/yellow.mp3');
var bAudio = new Audio('./sounds/blue.mp3'); 

$(".btn").on("click",function(e){
    var idToCheck = $(e.target).attr("id");
    switch(idToCheck){
        case "green":
            gAudio.play();
            break;
        case "red":
            rAudio.play();
            break;
        case "yellow":
            yAudio.play();
            break;
        case "blue":
            bAudio.play();
            break;
        default:
            alert("audio files broken");
            break;
    }
    checker(idToCheck);
});

$(document).on("keydown",startGame);

function startGame(){
    temp=0;
    var level = "Level "+(count+1);
    $("h1").text(level);
    randomNum = Math.floor(4*Math.random())+1;    
    switch(randomNum){
        case 1:
            array[count] = "green";
            gAudio.play();
            $(".green").addClass("shadowBox");
            setTimeout(function(){
                $(".green").removeClass("shadowBox");
            } , 1000);
            break;
        case 2:
            array[count] = "red";
            rAudio.play();
            $(".red").addClass("shadowBox");
            setTimeout(function(){
                $(".red").removeClass("shadowBox");
            } , 1000);
            break;
        case 3:
            array[count] = "yellow";
            yAudio.play();
            $(".yellow").addClass("shadowBox");
            setTimeout(function(){
                $(".yellow").removeClass("shadowBox");
            } , 1000);
            break;
        case 4:
            array[count] = "blue";
            bAudio.play();
            $(".blue").addClass("shadowBox");
            setTimeout(function(){
                $(".blue").removeClass("shadowBox");
            } , 1000);
            break;
        default:
            alert("error detected!! switch component broken");
            break;    
    }
    count++;
}
function checker(num){
    if(num === array[(temp)]){
        temp++;
        if(temp === count && count != 0){
            startGame();
        }
        
        
    }
    else{
        temp=0;
        count=0;
        $("h1").text("Lost, press any key to restart");
    }
}