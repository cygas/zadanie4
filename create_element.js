(function(global){
	
	global.createRadio = function(radioDiv, num){
		for(let i=0;i<num;i++){
			let div = document.createElement("div");
			let radioButton = document.createElement("input");
			radioButton.type = "radio";
			radioButton.id = "radio" + i;
			radioButton.name = "radio";
			let radioLabel = document.createElement("label");
			radioLabel.setAttribute("for","radio" + i);
			radioDiv.appendChild(div);
			div.appendChild(radioButton);
			div.appendChild(radioLabel);
		}
	};
	
	global.createCheckbox = function(checkboxDiv, num){
		for(let i=0;i<num;i++){
			let div = document.createElement("div");
			let chkbxButton = document.createElement("input");
			chkbxButton.type = "checkbox";
			chkbxButton.id = "chkbx" + i;
			chkbxButton.name = "chkbx";			
			chkbxButton.addEventListener("click", function(){
				selectOnlyThis(this.id, num);
			});
			let chkbxLabel = document.createElement("label");
			chkbxLabel.setAttribute("for","chkbx" + i);
			checkboxDiv.appendChild(div);
			div.appendChild(chkbxButton);
			div.appendChild(chkbxLabel);
		}		
	};
	
	function selectOnlyThis(id, num) {
		for (let i = 0;i < num; i++)
		{
			document.getElementById("chkbx" + i).checked = false;
		}
		document.getElementById(id).checked = true;
	}
	
	global.createSelect = function(selectDiv, num, width){
		let selectBox = document.createElement("select");
		selectBox.id = "select";
		selectBox.style = "width: " + width + "px";
		selectDiv.appendChild(selectBox);
		for(let i=0;i<num;i++){			
			let option = document.createElement("option");
			option.value = "v" + i;
			option.innerHTML = "v" + i;
			selectBox.appendChild(option);
		}		
	};
	
	global.createText = function(textDiv, num, width){
		for(let i=0;i<num;i++){			
			let textBox = document.createElement("input");
			textBox.type = "text";
			textBox.id = "text" + i;	
			textBox.style = "width: " +width+"px";
			textDiv.appendChild(textBox);
		}		
	}
	global.createPara = function(div, txt){
		let para = document.createElement("p");
		let text = document.createTextNode(txt);
		para.appendChild(text);
		div.appendChild(para);
	}
	

})(this);