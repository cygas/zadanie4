(function(global){
	global.fetchData = function(url, arr){
		fetch(url)
		.then(function(response){			
			return response.json();
		})
		.then(json => {
			console.log(json);
			json.map(entry => {
				arr.push(entry);
			});			
		});	
	};
	
	global.dataFetch = function(url, arr) {
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
			   if (xmlhttp.status == 200) {
				   console.log(xmlhttp.responseText);
			   }
			   else if (xmlhttp.status == 400) {
				  alert('There was an error 400');
			   }
			   else {
				   alert('something else other than 200 was returned');
			   }
			}
		};
		xmlhttp.open("GET", url, true);
		xmlhttp.send();			
	};
})(this);