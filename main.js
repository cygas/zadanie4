(function(global){
	
	global.App = function(){
		
		this.config = {
			comment: document.getElementById("comment"),
			inputsDiv: document.getElementById("inputsDiv"),
			radioDiv: document.getElementById("radioDiv"),
			checkboxDiv: document.getElementById("checkboxDiv"),
			selectDiv: document.getElementById("selectDiv"),
			textDiv: document.getElementById("textDiv"),
			submitDiv: document.getElementById("submitDiv"),
			submit: document.getElementById("submit"),
			table: document.getElementById("table"),
			popDiv: document.getElementById("popup"),
			popBut: document.getElementById("submit-popup"),
			arr: [],
			
			radioNum: 10,
			chkbxoNum: 10,
			selectNum: 10,
			textNum: 1,
			url: "https://jsonplaceholder.typicode.com/users",
			nameText: "wybierz opcję z pola 'name'",
			userText: "wybierz opcję z pola 'userName'",
			idText: "wprowadź numer id",
		};
		
		fetchData(this.config);
		this.bus = new EventBus();	
		this.tab = new Tab({bus: this.bus});	
		this.form = new Form();			
		this.tab.comment = this.config.comment;
		this.tab.table = this.config.table;
		
		
		let that = this;
			
		this.config.submit.addEventListener("click", function(){
			that.config.comment.innerHTML = "";
			that.form.inputsValue(that.config.inputsDiv);
			if(checkName(that.form) && checkUser(that.form) && checkId(that.form)){			
				
				that.bus.post("string", that.form.jsonObj);			
				
			}else{		
				if(!checkName(that.form)){
					createPara(that.config.comment, that.config.nameText);
				}		
				if(!checkUser(that.form)){
					createPara(that.config.comment, that.config.userText);
				}
				if(!checkId(that.form)){
					createPara(that.config.comment, that.config.idText);
				}
			}
		});
		this.config.popBut.addEventListener("click", function(){
			that.config.popDiv.className = "nonePop";
		});		
		
	};
})(this);