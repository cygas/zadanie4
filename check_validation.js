(function(global){
	global.checkName = function(form){
		if(form.obj.name == undefined){
			return false;
		}
		else
			return true;
	}
	global.checkUser = function(form){
		if(form.obj.username == undefined)
			return false;
		else
			return true;
	}
	global.checkId = function(form){
		if(form.obj.id == "")
			return false;
		else
			return true;
	}
})(this);