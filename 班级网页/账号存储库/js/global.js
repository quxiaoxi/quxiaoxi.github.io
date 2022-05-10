<!--

// This file defines miscellaneous java script functions
function ChangeIt(val) {
	if (val == 0) {
		document.forms[0].applyChanges.value="1";
	}
	else if (val == 1) {
		document.forms[1].applyChanges.value="1";
	}
	else if (val == 2) {
		document.forms[2].applyChanges.value="1";
	}
}

function pageInit(val) {
	if (val == 1) {
		document.forms[0].pageJustLoaded.value="1";
	}
	else if (val == 2) {
		document.forms[0].pageJustSubmitted.value="1";
	}
}
function selectAll(ckBox)
{  
//	var elms = document.getElementsByTagName("input");
	var elms = document.getElementsByName("c1");
	if(elms.length<1) 
		return; 
	for (var i = 0; i<elms.length; i++)
	{
		if(elms[i].type == "checkbox")
		{
			if(ckBox.checked == true)
			{
				elms[i].checked = true;				
			}
			else
			{
				elms[i].checked = false;				
			}
		}		
	}	
} 
// -->
