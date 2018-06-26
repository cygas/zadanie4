(function(global){
	global.writeListener = function(obj){
		let footer = document.getElementById("footer");
		let txt = JSON.stringify(obj);
		ElementCreator.factory("para", footer, txt);		
	};
	global.popupListener = function(obj){
		let div = document.getElementById("popup");		
		div.className = "yesPop";
		let txt = JSON.stringify(obj);	
		div.children[0].children[0].innerHTML = txt;
	}
})(this);