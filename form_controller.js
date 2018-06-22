(function(global){
	
	global.Form = function({bus: bus, config: config}){
			
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
		
		this.obj = {};
		this.jsonObj = "";
		
		let that = this;
			
		config.submit.addEventListener("click", function(){
			config.comment.innerHTML = "";
			that.inputsValue(config.inputsDiv);	
			let checkIfValid = {
				name: Validator.checkName(that.obj),
				username: Validator.checkUser(that.obj),
				id: Validator.checkId(that.obj)
			};
			if(checkIfValid.name && checkIfValid.username && checkIfValid.id){			
			
				bus.post("string", that.jsonObj);			
				
			}else{		
				if(!checkIfValid.name){
					createPara(config.comment, config.nameText);
				}		
				if(!checkIfValid.username){
					createPara(config.comment, config.userText);
				}
				if(!checkIfValid.id){
					createPara(config.comment, config.idText);
				}
			}
		});
		
		/*
		
		config.submit.addEventListener("click", function(){
			config.comment.innerHTML = "";
			that.form.inputsValue(that.config.inputsDiv);	
			let checkIfValid = {
				name: Validator.checkName(that.form),
				username: Validator.checkUser(that.form),
				id: Validator.checkId(that.form)
			};
			if(checkIfValid.name && checkIfValid.username && checkIfValid.id){			
			
				that.bus.post("string", that.form.jsonObj);			
				
			}else{		
				if(!checkIfValid.name){
					createPara(that.config.comment, that.config.nameText);
				}		
				if(!checkIfValid.username){
					createPara(that.config.comment, that.config.userText);
				}
				if(!checkIfValid.id){
					createPara(that.config.comment, that.config.idText);
				}
			}
		});
		*/
		
		
	};
	
	Form.prototype.writeIntoConsole = function(obj) {
		console.log(obj);
	};
	
		
})(this);