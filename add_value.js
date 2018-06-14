(function(global){
	
	global.addName = function(arr, div, name){
		let label = div.getElementsByTagName("label");
		for(let i=0;i<arr.length;i++){	
			label[i].innerHTML = arr[i][name];
		}
	}
	global.addOption = function(arr, div, name){
		let option = div.getElementsByTagName("option");
		for(let i=0; i<arr.length;i++){
			option[i].innerHTML = arr[i][name];
		}
	}
	
})(this);