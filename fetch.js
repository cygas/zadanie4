(function(global){
	
	global.fetchData = function(url, arr, radioDiv, radioNum, checkboxDiv, chkbxoNum, selectDiv, selectNum, textDiv, textNum){
		fetch(url)
		.then(function(response){			
			return response.json();
		})
		.then(json => {
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
	
	global.getData = function(url, com, txt, table){
		fetch(url)
		.then(function(resp){
			return resp.json();
		})
		.then(function(json){
			let object = json[0];
			if(object != undefined){
				//console.log(object);	 <--- do usunięcia
				//TODO
				//tutaj muszę dodać krotkę w tabeli z danymi i przyciski
				createRow(table, object);
			}else{				
				createPara(com, txt);				
			}			
		});
	};
	
})(this);