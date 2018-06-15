(function(global){
	
	global.fetchData = function(url, arr, radioDiv, radioNum, checkboxDiv, chkbxoNum, selectDiv, selectNum, textDiv, textNum){
		fetch(url)
		.then(function(response){			
			return response.json();
		})
		.then(json => {
			console.log(json);  //to będzie trzeba usunąć
			json.map(entry => {
				arr.push(entry);
			});		
			createRadio(radioDiv, radioNum);
			createCheckbox(checkboxDiv, chkbxoNum);
			createSelect(selectDiv, selectNum, 190);
			createText(textDiv, textNum, 190);	
			addName(arr, radioDiv, "name", radioNum);
			addName(arr, checkboxDiv, "username", chkbxoNum);
			addOption(arr, selectDiv, "email", selectNum);			
		});	
	};
	
})(this);