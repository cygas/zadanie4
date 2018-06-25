(function(global){
	
	global.Tab = function({bus: bus, config: config}){
		this.init = function(){
			this.comment = config.comment;
			this.badData = config.badData;
			this.table = config.table;
			this.popBut = config.popBut;
			this.popDiv = config.popDiv;
			this.bus = bus;
			this.obj = {};
			this.url = "";
		}.bind(this);
		
		this.init();
		
		this.sendRequest = function(jsonObj){			
		
			this.obj = JSON.parse(jsonObj);
			this.url = "https://jsonplaceholder.typicode.com/users?" + "id=" + this.obj.id + "&name=" + this.obj.name + "&username=" + this.obj.username + "&email=" + this.obj.email;
			
			getData(this.url, config.comment, config.badData, config.table);
			
			
			return this;
		};
		
		this.bus.subscribe("string", this.sendRequest);
		
		this.popBut.addEventListener("click", function(){
			this.popDiv.className = "nonePop";
		}.bind(this));		
		
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