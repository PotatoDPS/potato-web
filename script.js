document.getElementById("adminCheck").onclick = function(){checkVal()};

function checkVal(){
	var val = document.getElementById("adminInput").value;
	if (val == "BE/00012314"){
		storeVal();
	}else{
		window.alert("Invalid Admission Number");
	}
}
function storeVal(){
	var val = document.getElementById("adminInput").value;
	console.log(val);
	document.getElementById("adminInput").value = "";
	window.location.href = "topup.html";
}