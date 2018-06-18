(function(global){
	
	global.Form = function({bus: bus}){
		//bus.post("string", this.jsonObj);		
		this.inputsValue = function(div){
			let inputArr = div.getElementsByTagName("input");
			let selectArr = div.getElementsByTagName("select");
			
			for(let i=0;i<inputArr.length;i++){
				if(inputArr[i].type == "radio"){
					if(inputArr[i].checked){
						this.obj.name = inputArr[i].nextSibling.innerHTML;
					}
				}
				if(inputArr[i].type == "checkbox"){
					if(inputArr[i].checked){
						this.obj.username = inputArr[i].nextSibling.innerHTML;
					}					
				}
				if(inputArr[i].type == "text"){
					this.obj.id = inputArr[i].value;
				}
			}
			this.obj.email = selectArr[0].options[selectArr[0].selectedIndex].innerHTML;
			this.jsonObj = JSON.stringify(this.obj);
			this.writeIntoConsole();
			
			return this;			
		};
		
		this.obj = {};
		this.jsonObj = "";
		
	};
	
	Form.prototype.writeIntoConsole = function() {
		console.log(this.jsonObj);
	};
	
		
})(this);