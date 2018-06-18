(function(global){
	global.checkName = function(form){
		return form.obj.name != undefined;
			
	}
	global.checkUser = function(form){
		return form.obj.username != undefined;
			
	}
	global.checkId = function(form){
		return form.obj.id != "";
		
	}
	/*  popraw walidację na coś takiego
	global.checksomething = function(key) {
		return key == true;
	}
	*/
})(this);