(function(global){
	
	global.Validator = {};
	
	let checkName = function(obj){
		return obj.name != undefined;			
	};
	let checkUser = function(obj){
		return obj.username != undefined;			
	};
	let checkId = function(obj){
		return obj.id != "";		
	};	
	Validator.checkName = checkName;
	Validator.checkUser = checkUser;
	Validator.checkId = checkId;
	
	/*
	global.checkName = function(form){
		return form.obj.name != undefined;			
	};
	global.checkUser = function(form){
		return form.obj.username != undefined;			
	};
	global.checkId = function(form){
		return form.obj.id != "";		
	};	
	*/
	
	/*
		global.Validator = {};
		Validator.checkName = function(){}
		
		let checkName = function(){}
		Validator.checkName = checkName
		
		Validator.prototype.checkName = checkName
		
		global.Check = function(form){
		this.checkName = function(form){
			return form.obj.name != undefined;			
		};
		this.checkUser = function(form){
			return form.obj.username != undefined;			
		};
		this.checkId = function(form){
			return form.obj.id != "";		
		};	
	};
	*/
})(this);