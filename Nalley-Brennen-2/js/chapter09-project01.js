
/* add code here  */

function setHighlight(e){
	if (e.type == "focus"){
		e.target.classList.add("highlight");
	}
	else if(e.type="blur"){
		e.target.classList.remove("highlight");
		if(e.target.value != "")
			e.target.classList.remove("error")
	}
}

window.addEventListener("load", 
	function(){
		var cssSelector = "input[name=title],input[name=description],select[name=genre],select[name=subject],input[name=medium],input[name=year],input[name=museum]";
		var fields = document.querySelectorAll(cssSelector);
		for (i=0; i<fields.length;i++){
		fields[i].addEventListener("focus", setHighlight);
		fields[i].addEventListener("blur", setHighlight);
		}
	
		document.getElementById("mainForm").addEventListener("submit",
			function(e){
				var title=document.getElementById("title");
				var year=document.getElementById("year");
				var description=document.getElementById("description");
			
				if (title.value == null || title.value == ""){
				title.classList.add("error");
				e.preventDefault();
				} else if (title.value != null) {
				title.classList.remove("error");
				}
			
				if (year.value == null || year.value == ""){
				year.classList.add("error");
				e.preventDefault();
				} else if (year.value != null) {
				year.classList.remove("error");
				}
			
				if (description.value== null || description.value == ""){
				description.classList.add("error");
				e.preventDefault();
				}else if (description.value != null) {
				description.classList.remove("error");
				}
				
		document.getElementById("mainForm").addEventListener("reset",
			function(e){
				var title=document.getElementById("title");
				var year=document.getElementById("year");
				var description=document.getElementById("description");
			
				title.classList.remove("error");
				year.classList.remove("error");
				description.classList.remove("error");
});
});
});