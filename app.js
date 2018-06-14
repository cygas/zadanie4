window.addEventListener("load", function(){	
	
	let inputsDiv = document.getElementById("inputsDiv");
	let radioDiv = document.getElementById("radioDiv");
	let checkboxDiv = document.getElementById("checkboxDiv");
	let selectDiv = document.getElementById("selectDiv");
	let textDiv = document.getElementById("textDiv");
	let submitDiv = document.getElementById("submitDiv");
	let arr = [];
	
	const radioNum = 10;
	const chkbxoNum = 10;
	const selectNum = 10;
	const textNum = 1;
	const url = "https://jsonplaceholder.typicode.com/users";
	
	fetchData(url, arr, radioDiv, radioNum, checkboxDiv, chkbxoNum, selectDiv, selectNum, textDiv, textNum);
	
	let form = new Form();
		
		
	let submit = document.getElementById("submit");
	submit.addEventListener("click", function(){
		form.inputsValue(inputsDiv);
		console.log(form.obj);
	});
});