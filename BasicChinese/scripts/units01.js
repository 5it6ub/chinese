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
		displayElement1.childNodes[0].setAttribute("src","../../images/kwords_close.png");
	}else{
		keyLanguageOpen = 0;
		displayElement.style.display = "none";
		displayElement1.childNodes[0].setAttribute("src","../../images/kwords_open.png");
	}
}

function flipVocab(){
	var displayElement = document.getElementById("vocabulary");
	var displayElement1 = document.getElementById("vc");
	if(vocabularyOpen == 0){
		vocabularyOpen = 1;
		displayElement.style.display = "block";
		displayElement1.childNodes[0].setAttribute("src","../../images/vocab_close.png");
	}else{
		vocabularyOpen = 0;
		displayElement.style.display = "none";
		displayElement1.childNodes[0].setAttribute("src","../../images/vocab_open.png");
	}
}

function flipTranscript(){
	var displayElement = document.getElementById("transcript");
	var displayElement1 = document.getElementById("tscript");
	if(transcriptOpen == 0){
		transcriptOpen = 1;
		displayElement.style.display = "block";
		displayElement1.childNodes[0].setAttribute("src","../../images/trscript_close.png");	
	}else{
		transcriptOpen = 0;
		displayElement.style.display = "none";
		displayElement1.childNodes[0].setAttribute("src","../../images/trscript_open.png");
	}
}

function flipTranslation(){
	var displayElement = document.getElementById("translation");
	var displayElement1 = document.getElementById("trans");
	if(translationOpen == 0){
		translationOpen = 1;
		displayElement.style.display = "block";	
		displayElement1.childNodes[0].setAttribute("src","../../images/trslate_close.png");
	}else{
		translationOpen = 0;
		displayElement.style.display = "none";
		displayElement1.childNodes[0].setAttribute("src","../../images/trslate_open.png");
	}
}

function flipActivity(){
	var displayElement = document.getElementById("activity");
	var displayElement1 = document.getElementById("act");
	if(activityOpen == 0){
		activityOpen = 1;
		displayElement.style.display = "block";
		displayElement1.childNodes[0].setAttribute("src","../../images/act_close.png");	
	}else{
		activityOpen = 0;
		displayElement.style.display = "none";
		displayElement1.childNodes[0].setAttribute("src","../../images/act_open.png");
	}
}


// Get the audioplayer
function getAudioPlayer(){
	if(window.document['aplayer']){
		return window.document['aplayer'];
	}
	if(navigator.appName.indexOf("Microsoft Internet") == -1){
		if(document.embeds && document.embeds['aplayer']){
			return document.embeds['aplayer'];
		}
	}else{
		return document.getElementById('aplayer');
	}
	
}

	
//prepareDisplay - attaches onClick handlers to the display selector
function setupLinks(){
	if(!document.getElementsByTagName) return false;
	var links = document.getElementsByTagName("a");
	for( var i = 0; i < links.length; i++){
		if(links[i].getAttribute("class") != "saudio"){
			continue;
		}
		links[i].onclick = function(){
			getAudioPlayer().sendToActionScript(this.getAttribute("href"));
			return false;
		}
	}
}





// Startup code
addLoadEvent(clearDisplay);
addLoadEvent(prepareDisplay);
addLoadEvent(setupLinks);
