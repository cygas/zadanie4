window.addEventListener("load", function(){	
	
	let radioDiv = document.getElementById("radioDiv");
	let checkboxDiv = document.getElementById("checkboxDiv");
	let selectDiv = document.getElementById("selectDiv");
	let textDiv = document.getElementById("textDiv");
	let submitDiv = document.getElementById("submitDiv");
	
	
	
	
	let form = new Form();
	let tab = new Tab();
	let eventBus = new EventBus();
	
	console.log(form, tab, eventBus);
	
	
	
	
	/*
	fetch('https://jsonplaceholder.typicode.com/posts/1')
	.then(response => response.json())
	.then(json => console.log(json));
  
	function loadXMLDoc() {
		var xmlhttp = new XMLHttpRequest();

		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
			   if (xmlhttp.status == 200) {
				   console.log(xmlhttp.responseText);
			   }
			   else if (xmlhttp.status == 400) {
				  alert('There was an error 400');
			   }
			   else {
				   alert('something else other than 200 was returned');
			   }
			}
		};

		xmlhttp.open("GET", "https://jsonplaceholder.typicode.com/comments?postId=1", true);
		xmlhttp.send();
	}
	loadXMLDoc();
	
*/

/*
function callAjax(url, callback){
    var xmlhttp;
    // compatible with IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
            callback(xmlhttp.responseText);
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
*/
	
});