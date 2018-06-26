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
			
			ElementCreator.factory("radio", config.radioDiv, config.radioNum);
			ElementCreator.factory("checkbox", config.checkboxDiv, config.chkbxoNum);
			ElementCreator.factory("select", config.selectDiv, config.selectNum);			
			ElementCreator.factory("text", config.textDiv, config.textNum);			
			//createRadio(config.radioDiv, config.radioNum);
			//createCheckbox(config.checkboxDiv, config.chkbxoNum);
			//createSelect(config.selectDiv, config.selectNum, 190);
			//createText(config.textDiv, config.textNum, 190);	
			addValue(config.arr, config.radioDiv, "name", config.radioNum, "label");
			addValue(config.arr, config.checkboxDiv, "username", config.chkbxoNum, "label");
			addValue(config.arr, config.selectDiv, "email", config.selectNum, "option");			
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
				ElementCreator.factory("row", table, object);	
				//createRow(table, object, createTableButton1(), createTableButton2());						
			}else{				
				ElementCreator.factory("para", com, txt);				
			}			
		});
	};
	
})(this);