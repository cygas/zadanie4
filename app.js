window.addEventListener("load", function(){	

	//window.MainContainer = new App();
	
	
	
	let comment = document.getElementById("comment");
	let inputsDiv = document.getElementById("inputsDiv");
	let radioDiv = document.getElementById("radioDiv");
	let checkboxDiv = document.getElementById("checkboxDiv");
	let selectDiv = document.getElementById("selectDiv");
	let textDiv = document.getElementById("textDiv");
	let submitDiv = document.getElementById("submitDiv");
	let submit = document.getElementById("submit");
	let table = document.getElementById("table");
	let arr = [];
	
	const radioNum = 10;
	const chkbxoNum = 10;
	const selectNum = 10;
	const textNum = 1;
	const url = "https://jsonplaceholder.typicode.com/users";
	const nameText = "wybierz opcję z pola 'name'";
	const userText = "wybierz opcję z pola 'userName'";
	const idText = "wprowadź numer id";
	const wrongUser = "użytkownik o podanych parametrach nie istnieje w bazie";
	
	//tak, tak, DO POPRAWY
	fetchData(url, arr, radioDiv, radioNum, checkboxDiv, chkbxoNum, selectDiv, selectNum, textDiv, textNum);
	let bus = new EventBus();	
	
	let form = new Form(bus);	
	//let form = new Form({bus: bus});	to ma wyglądać tak 
	let tab = new Tab(bus);
	tab.comment = comment;
	//tab.badData = wrongUser;
	tab.table = table;
	
	
	//to powinienem usunąć do table
	bus.subscribe("string", tab.sendRequest);
	
		
	submit.addEventListener("click", function(){
		comment.innerHTML = "";
		form.inputsValue(inputsDiv);
		if(checkName(form) && checkUser(form) && checkId(form)){			
			
			bus.post("string", form.jsonObj);			
			
		}else{		
			if(!checkName(form)){
				createPara(comment, nameText);
			}		
			if(!checkUser(form)){
				createPara(comment, userText);
			}
			if(!checkId(form)){
				createPara(comment, idText);
			}
		}
	});
	
});