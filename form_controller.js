(function(global){
	
	global.Form = function({bus: bus, config: config}){
			
		this.init = function(){
			this.inputsDiv = config.inputsDiv;
			this.submit = config.submit;
			this.comment = config.comment;
			this.nameText = config.nameText;
			this.userText = config.userText;
			this.idText = config.idText;	
			this.bus = bus;
			this.obj = {};
			this.jsonObj = "";	
			this.everyTrue = function(item){
				return item == true
			};				
			this.checkIfFalse = function(val, index){
				let txt;
				switch(index){
					case 0:
						txt = this.nameText;
						break;
					case 1:
						txt = this.userText;
						break;
					case 2:
						txt = this.idText;
						break;
				}
				if(val == false)
					createPara(this.comment, txt);
			}.bind(this);
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
		
			let checkArr = [Validator.checkName(this.obj), Validator.checkUser(this.obj), Validator.checkId(this.obj)];
			
			if(checkArr.every(this.everyTrue)){					
				this.bus.post("string", this.jsonObj);							
			}else{	
				checkArr.forEach(this.checkIfFalse);
			}
		}.bind(this));		
	};
	
	Form.prototype.writeIntoConsole = function(obj) {
		console.log(obj);
	};
	
})(this);