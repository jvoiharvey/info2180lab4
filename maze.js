var youLost = false; 

 

window.onload = function() {
    
$("start").onclick = gameBegin;

$("end").onmouseover = gameOver;
    
 var outOfBounds = $$("div#maze div.boundary");
   
 for (var i = 0; i < outOfBounds.length; i++) {
     
   outOfBounds[i].onmouseover = linesCrossed;
    }
};





function linesCrossed() {
   
 youLost = true;
document.getElementById("status").innerHTML = "Sorry you lost."
    
var outOfBounds= $$("div#maze div.boundary");

for (var i = 0; i < outOfBounds.length; i++) {

	var limit = outOfBounds[i]
	limit.style.backgroundColor = "red";
   
}
}



function gameBegin() {

    youLost = false;

    document.getElementById("status").innerHTML = "Let's Do this!"
var outOfBounds = $$("div#maze div.boundary");
    
for (var i = 0; i < outOfBounds.length; i++) {

	var limit = outOfBounds[i]
	limit.style.backgroundColor = "gray";
    }
}



function gameOver() {
   
if (!youLost) {
   document.getElementById("status").innerHTML = "Yay you won!";
 
	   
}

}
