var request;
if (window.XMLHttpRequest) { // Mozilla, Safari, ...
	request = new XMLHttpRequest();
} else if (window.ActiveXObject) { // IE
	try {
		request = new ActiveXObject('Msxml2.XMLHTTP');
	}
	catch (e) {
		try {
			request = new ActiveXObject('Microsoft.XMLHTTP');
		}
		catch (e) {}
	}
}

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
request.send(null);

// state changes
request.onreadystatechange = function() {
	if(request.readyState === 4) { // done
		if(request.status === 200) { // complete
			console.log(request.responseText)
		}
	}
};