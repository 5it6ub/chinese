/* Javascript for Essentials pages 
   Author: C.Zahner
   Date: 15/10/2008
*/   
   
   
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
	var linkName = "";
	for( var i = 0; i < links.length; i++){
		linkName = links[i].getAttribute("href");
		if(linkName.indexOf(".mp3") == -1){
			continue;
		}
		links[i].onclick = function(){
			getAudioPlayer().sendToActionScript(this.getAttribute("href"));
			return false;
		}
	}
}





// Startup code
addLoadEvent(setupLinks);
