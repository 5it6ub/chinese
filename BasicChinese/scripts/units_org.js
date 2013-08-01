/* Javascript for unit level pages 
   Author: C.Zahner
   Date: 21/03/2008
*/   
   
// Globals
var keyLanguageOpen = 0;
var vocabularyOpen = 0;
var translationOpen = 0;
var transcriptOpen = 0;
var activityOpen = 0;

   
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
	var displayElements = Array("keywords","vocabulary","translation","transcript","activity");
	for( var i = 0; i < displayElements.length; i++){
		if(!document.getElementById(displayElements[i])) continue;
		displayElement = document.getElementById(displayElements[i]);
		displayElement.style.display = "none";
	}
}


	
//prepareDisplay - attaches onClick handlers to the display selector
function prepareDisplay(){
	if(!document.getElementById) return false; 
	var displayElement = document.getElementById("kw");
	displayElement.onclick = flipKeywords;
	displayElement  = document.getElementById("vc");
	displayElement.onclick = flipVocab;
	displayElement  = document.getElementById("trans");
	displayElement.onclick = flipTranslation;
	displayElement  = document.getElementById("tscript");
	displayElement.onclick = flipTranscript;
	displayElement  = document.getElementById("act");
	displayElement.onclick = flipActivity;	
}

//setupDisplay - hides and unhides the relevant parts of the display
function flipKeywords(){
	var displayElement = document.getElementById("keywords");
	var displayElement1 = document.getElementById("kw");
	if(keyLanguageOpen == 0){
		keyLanguageOpen = 1;
		displayElement.style.display = "block";	
		displayElement1.childNodes[0].setAttribute("src","../images/divider_close.png");
	}else{
		keyLanguageOpen = 0;
		displayElement.style.display = "none";
		displayElement1.childNodes[0].setAttribute("src","../images/divider_open.png");
	}
}

function flipVocab(){
	var displayElement = document.getElementById("vocabulary");
	var displayElement1 = document.getElementById("vc");
	if(vocabularyOpen == 0){
		vocabularyOpen = 1;
		displayElement.style.display = "block";	
	}else{
		vocabularyOpen = 0;
		displayElement.style.display = "none";
	}
}

function flipTranscript(){
	var displayElement = document.getElementById("transcript");
	var displayElement1 = document.getElementById("tscript");
	if(transcriptOpen == 0){
		transcriptOpen = 1;
		displayElement.style.display = "block";	
	}else{
		transcriptOpen = 0;
		displayElement.style.display = "none";
	}
}

function flipTranslation(){
	var displayElement = document.getElementById("translation");
	var displayElement1 = document.getElementById("trans");
	if(translationOpen == 0){
		translationOpen = 1;
		displayElement.style.display = "block";	
	}else{
		translationOpen = 0;
		displayElement.style.display = "none";
	}
}

function flipActivity(){
	var displayElement = document.getElementById("activity");
	var displayElement1 = document.getElementById("act");
	if(activityOpen == 0){
		activityOpen = 1;
		displayElement.style.display = "block";	
	}else{
		activityOpen = 0;
		displayElement.style.display = "none";
	}
}



// Startup code
addLoadEvent(clearDisplay);
addLoadEvent(prepareDisplay);