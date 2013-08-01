/* Javascript for unit level pages 
   Author: C.Zahner
   Date: 21/03/2008
*/   
   
// Globals
var g_currentDisplay;
   
   
// Functions
   
// addLoadEvent - adds a function to the queue of functions executed after the document is loaded
function addLoadEvent(func){
	var oldonload = window.onload;
	if(typeof window.onload != 'function'){
		window.onload = func;
	}else{
		window.onload = function(){
			oldonload();
			func();
		}
	}
}

// clearDisplay - hides all displays (transcript, translation etc.
function clearDisplay(){
	if(!document.getElementById) return false; 
	var displayElement;
	var displayElements = Array("u1","u2","u3","u4","u5","u6","u7","u8","u9","u10","u11","u12","u13");
	for( var i = 0; i < displayElements.length; i++){
		if(!document.getElementById(displayElements[i])) continue;
		displayElement = document.getElementById(displayElements[i]);
		displayElement.style.display = "none";
	}
	g_currentDisplay = document.getElementById("u0");
}


	
//prepareDisplay - attaches onClick handlers to the display selector
function prepareDisplay(){
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("menu")) return false;
	var disp = document.getElementById("menu");
	var links = disp.getElementsByTagName("a");
	for( var i = 0; i < links.length; i++){
		links[i].onmouseover = function(){
			toggleDisplay(this);
			return false;
		}
	}
}

//setupDisplay - hides and unhides the relevant parts of the display
function toggleDisplay(displayElement){
	var displayID = displayElement.parentNode.id.substr(4);
	if(!document.getElementById("u" + displayID)) return false;	
	var longDisplay = document.getElementById("u" + displayID);
	g_currentDisplay.style.display = "none";
	longDisplay.style.display = "block";
	g_currentDisplay = longDisplay;
}


// Startup code
addLoadEvent(clearDisplay);
addLoadEvent(prepareDisplay);