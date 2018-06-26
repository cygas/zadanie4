(function(global){
	
	global.Form = function({bus, config}){
			
		this.init = function(){
			this.inputsDiv = config.inputsDiv;
			this.submit = config.submit;
			this.comment = config.comment;
			this.bus = bus;
			this.obj = {
				name: null,
				username: null,
				email: null,
				id: null
			};
			this.jsonObj = "";				
		}.bind(this);
		
		this.init();
		
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
			this.writeIntoConsole(this.jsonObj);
			
			return this;			
		};		
		
		this.submit.addEventListener("click", function(){
			this.comment.innerHTML = "";
			this.inputsValue(this.inputsDiv);	
		
			validator.validate(this.obj);
			if (!validator.hasErrors()) {
				this.bus.post("string", this.jsonObj);		
			}else{
				for(d in validator.messages){
					ElementCreator.factory("para", this.comment, validator.messages[d]);
				}
			}						
		}.bind(this));		
	};
	
	Form.prototype.writeIntoConsole = function(obj) {
		console.log(obj);
	};
	
})(this);