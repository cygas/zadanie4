(function(global){
	
	global.addName = function(arr, div, name, num){
		let label = div.getElementsByTagName("label");
		for(let i=0;i<num;i++){	
			label[i].innerHTML = arr[i][name];
		}
	}
	global.addOption = function(arr, div, name, num){
		let option = div.getElementsByTagName("option");
		for(let i=0; i<num;i++){
			option[i].innerHTML = arr[i][name];
		}
	}
	
})(this);