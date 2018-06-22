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
			badData: "użytkownik o podanych parametrach nie istnieje w bazie"
		};
		
		fetchData(this.config);
		this.bus = new EventBus();	
		this.tab = new Tab({bus: this.bus, config: this.config});	
		this.form = new Form({bus: this.bus, config: this.config});					
		
	};
})(this);