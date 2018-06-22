(function(global){
	
	global.Tab = function({bus: bus, config: config}){
		this.sendRequest = function(jsonObj){			
		
			this.obj = JSON.parse(jsonObj);
			this.url = "https://jsonplaceholder.typicode.com/users?" + "id=" + this.obj.id + "&name=" + this.obj.name + "&username=" + this.obj.username + "&email=" + this.obj.email;
			
			getData(this.url, config.comment, config.badData, config.table);
			
			
			return this;
		};
		bus.subscribe("string", this.sendRequest);
		
		this.obj = {};
		this.url = "";		

		config.popBut.addEventListener("click", function(){
			config.popDiv.className = "nonePop";
		});		
		
	};	
	
	global.Container = function(args){
		this.init = function(key){
			this.send();
		};
		this.send = function(){
			
		};
		this.init(args);
		
	};
	/*
	global.Container = function(args) {
		let key1;
		
		this.send = function(){}
		
		
		...
		
		init = function() {
			
		}
		
		init.call(this, args);
	}
	global.Container = function(args) {
		let key1;
		
		this.init = function() {}
		
		this.send = function(){}
		
		...
		
		this.init(args);
	}
	*/
})(this);