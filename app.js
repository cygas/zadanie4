window.addEventListener("load", function(){	
	
	let radioDiv = document.getElementById("radioDiv");
	let checkboxDiv = document.getElementById("checkboxDiv");
	let selectDiv = document.getElementById("selectDiv");
	let textDiv = document.getElementById("textDiv");
	let submitDiv = document.getElementById("submitDiv");
	
	const radioNum = 10;
	const chkbxoNum = 10;
	const selectNum = 10;
	const textNum = 1;
	const url = "https://jsonplaceholder.typicode.com/users";
	
	
	createRadio(radioDiv, radioNum);
	createCheckbox(checkboxDiv, chkbxoNum);
	createSelect(selectDiv, selectNum, 190);
	createText(textDiv, textNum, 190);	
	
	let arr = [];
	fetchData(url, arr);
	setTimeout(function(){ 
		addName(arr, radioDiv, "name");
		addName(arr, checkboxDiv, "username");
		addOption(arr, selectDiv, "email");
		}, 500);
	
	let form = new Form();
	let tab = new Tab();
	let eventBus = new EventBus();
	
	console.log(form, tab, eventBus);
	
	
});