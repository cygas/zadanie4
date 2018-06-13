(function(global){
	
	global.createRadio = function(radioDiv, num){
		for(let i=0;i<num;i++){
			let radioButton = document.createElement("input");
			radioButton.type = "radio";
			radioButton.id = "radio" + i;
			radioButton.name = "radio";
			let radioLabel = document.createElement("label");
			radioLabel.setAttribute("for","radio" + i);
			radioLabel.innerHTML = "wybór"+i;
			radioDiv.appendChild(radioButton);
			radioDiv.appendChild(radioLabel);
		}
	};
	
	global.createCheckbox = function(checkboxDiv, num){
		for(let i=0;i<num;i++){
			let chkbxButton = document.createElement("input");
			chkbxButton.type = "checkbox";
			chkbxButton.id = "chkbx" + i;
			chkbxButton.name = "chkbx";
			let chkbxLabel = document.createElement("label");
			chkbxLabel.setAttribute("for","chkbx" + i);
			chkbxLabel.innerHTML = "wybór"+i;
			checkboxDiv.appendChild(chkbxButton);
			checkboxDiv.appendChild(chkbxLabel);
		}		
	};
	
	global.createSelect = function(selectDiv, num){
		let selectBox = document.createElement("select");
		selectBox.id = "select";
		selectDiv.appendChild(selectBox);
		for(let i=0;i<num;i++){			
			let option = document.createElement("option");
			option.value = "v" + i;
			option.innerHTML = "v" + i;
			selectBox.appendChild(option);
		}		
	};
	
	global.createText = function(textDiv, num){
		for(let i=0;i<num;i++){			
			let textBox = document.createElement("input");
			textBox.type = "text";
			textBox.id = "text" + i;			
			textDiv.appendChild(textBox);
		}		
	}
	

})(this);