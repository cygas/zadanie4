window.addEventListener("load", function(){	
	
	let comment = document.getElementById("comment");
	let inputsDiv = document.getElementById("inputsDiv");
	let radioDiv = document.getElementById("radioDiv");
	let checkboxDiv = document.getElementById("checkboxDiv");
	let selectDiv = document.getElementById("selectDiv");
	let textDiv = document.getElementById("textDiv");
	let submitDiv = document.getElementById("submitDiv");
	let submit = document.getElementById("submit");
	let arr = [];
	let jsonObj;
	
	const radioNum = 10;
	const chkbxoNum = 10;
	const selectNum = 10;
	const textNum = 1;
	const url = "https://jsonplaceholder.typicode.com/users";
	const nameText = "wybierz opcję z pola 'name'";
	const userText = "wybierz opcję z pola 'userName'";
	const idText = "wprowadź numer id";
	
	
	
	fetchData(url, arr, radioDiv, radioNum, checkboxDiv, chkbxoNum, selectDiv, selectNum, textDiv, textNum);
	let form = new Form();	
	let bus = new Bus();
	
	submit.addEventListener("click", function(){
		comment.innerHTML = "";
		form.inputsValue(inputsDiv);
		if(checkName(form) && checkUser(form) && checkId(form)){
			//obj do JSON i transport do eventBus
			jsonObj = JSON.stringify(form.obj);
			console.log(jsonObj);
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