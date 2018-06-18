(function(global){
	
	global.fetchData = function(config){
		fetch(config.url)
		.then(function(response){			
			return response.json();
		})
		.then(json => {
			json.map(entry => {
				config.arr.push(entry);
			});		
			createRadio(config.radioDiv, config.radioNum);
			createCheckbox(config.checkboxDiv, config.chkbxoNum);
			createSelect(config.selectDiv, config.selectNum, 190);
			createText(config.textDiv, config.textNum, 190);	
			addName(config.arr, config.radioDiv, "name", config.radioNum);
			addName(config.arr, config.checkboxDiv, "username", config.chkbxoNum);
			addOption(config.arr, config.selectDiv, "email", config.selectNum);			
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
				//TODO
				//tutaj muszę dodać krotkę w tabeli z danymi i przyciski
				createRow(table, object, createTableButton1(), createTableButton2());						
			}else{				
				createPara(com, txt);				
			}			
		});
	};
	
})(this);