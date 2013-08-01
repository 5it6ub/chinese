/* Javascript for unit level pages 
   Author: C.Zahner
   Date: 21/03/2008
*/   
   
// Globals
var gl_Sections = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var gl_MaxSections = gl_Sections.length;
var gl_nbOfSections = 5;
   
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
function setupDisplay(){
	var dispElement;
	if(gl_nbOfSections > gl_MaxSections){
		alert("Update script - maximum number of sections exceeded");
	}
	if(!document.getElementById) return false; 
	for( var i = 1; i <= gl_nbOfSections; i++){
		dispElement = document.getElementById('s'+i);
		dispElement.style.display = "none";	
	}	
	if(!document.getElementsByTagName) return false;
	var links = document.getElementsByTagName("a");
	for( var i = 0; i < links.length; i++){
		if(links[i].getAttribute("class") != "sh"){
			continue;
		}
		links[i].onclick = function(){		
			var idx = this.getAttribute("name").substr(2);
			var dispElement = document.getElementById('s' + idx);
			if(gl_Sections[idx] == 0){
				dispElement.style.display = 'block';
				gl_Sections[idx] = 1;
			}else{
				dispElement.style.display = 'none';
				gl_Sections[idx] = 0;			
			}
			return false;
		}
	}
}


	




// Startup code
addLoadEvent(setupDisplay);
