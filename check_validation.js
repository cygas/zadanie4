(function(global){

	global.validator = {
	
		types: {},
		
		messages: [],
		
		config: {},
		
		validate: function(data){
			let i, msg, type, checker, result_ok;
			
			this.messages = [];
			
			for(i in data){
				if(data.hasOwnProperty(i)){
					type = this.config[i];
					checker = this.types[type];
					
					if(!type){
						continue;
					}
					if(!checker){
						throw {
							name: "ValidationError",
							message: "brak obsługi dla klucza " + type
						};
					}
					result_ok = checker.validate(data[i]);
					if(!result_ok){
						msg = "niepoprawna wartość *" + i + "*; " + checker.instructions;
						this.messages.push(msg);
					}
				}
			}
			
			return this.hasErrors();
		},
		
		hasErrors: function(){
			return this.messages.length !== 0;
		}		
	};
	
	validator.config = {
		name: 'isChecked',
		username: 'isChecked',
		id: 'isNotEmpty',
		email: 'isEmail'
	};
	
	validator.types.isChecked = {
		validate: function(value){
			return value != undefined;
		},
		instructions: "należy zaznaczyć jedno z pól"
	};
	
	validator.types.isNotEmpty = {
		validate: function(value){
			return value != "" && !isNaN(value);
		},
		instructions: "należy uzupełnić pole"
	};
	validator.types.isEmail = {
		validate: function(value){
			return true;
		},
		instructions: ""
	};
	
})(this);