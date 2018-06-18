window.addEventListener("load", function(){	

	//window.MainContainer = new App();	
	
	let config = {
		comment: document.getElementById("comment"),
		inputsDiv: document.getElementById("inputsDiv"),
		radioDiv: document.getElementById("radioDiv"),
		checkboxDiv: document.getElementById("checkboxDiv"),
		selectDiv: document.getElementById("selectDiv"),
		textDiv: document.getElementById("textDiv"),
		submitDiv: document.getElementById("submitDiv"),
		submit: document.getElementById("submit"),
		table: document.getElementById("table"),
		arr: [],
		
		radioNum: 10,
		chkbxoNum: 10,
		selectNum: 10,
		textNum: 1,
		url: "https://jsonplaceholder.typicode.com/users",
		nameText: "wybierz opcję z pola 'name'",
		userText: "wybierz opcję z pola 'userName'",
		idText: "wprowadź numer id",
		//wrongUser: "użytkownik o podanych parametrach nie istnieje w bazie"
	};
	
	fetchData(config);
	let bus = new EventBus();		
	let form = new Form();	
	//let form = new Form({bus: bus});	to ma wyglądać tak 
	let tab = new Tab(bus);
	tab.comment = config.comment;
	//tab.badData = wrongUser;
	tab.table = config.table;
	
	
	//to powinienem usunąć do table
	bus.subscribe("string", tab.sendRequest);
	
		
	config.submit.addEventListener("click", function(){
		config.comment.innerHTML = "";
		form.inputsValue(inputsDiv);
		form.writeIntoConsole();
		if(checkName(form) && checkUser(form) && checkId(form)){			
			
			bus.post("string", form.jsonObj);			
			
		}else{		
			if(!checkName(form)){
				createPara(config.comment, config.nameText);
			}		
			if(!checkUser(form)){
				createPara(config.comment, config.userText);
			}
			if(!checkId(form)){
				createPara(config.comment, config.idText);
			}
		}
	});
	
});