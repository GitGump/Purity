function showsingle(id){
	xmlHttp = GetXmlHttpObject()
	if (xmlHttp == null){
  		alert ("Browser does not support HTTP Request");
  		return;
  	} 
	url = "?action=ajax_show_post&id=" + id;
	xmlHttp.onreadystatechange = stateChanged;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
}

function stateChanged() { 
	if (xmlHttp.readyState == 4 || xmlHttp.readyState=="complete") { 
		
 		document.getElementById("section").innerHTML=xmlHttp.responseText;
 		$("#section").slideDown(500);
 	} 
}

function GetXmlHttpObject() {
	var xmlHttp=null;
	try {
 		// Firefox, Opera 8.0+, Safari
 		xmlHttp=new XMLHttpRequest();
 	} catch (e) {
 		// Internet Explorer
 		try
  		{
  			xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
  		} catch (e) {
  			xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
  		}
 	}
	return xmlHttp;
}