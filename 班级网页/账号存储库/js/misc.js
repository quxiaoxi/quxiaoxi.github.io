// This file defines miscellaneous java script functions
/*
if(self == top)
{
	top.location = "null.html";
}
*/
function destroyRow (form, element)
{
    var val = document.forms[form].elements.length;

    document.forms[form].deleteRowStatus.value = "1";
}
function CheckObjValue (obj) {

	if(typeof(obj) == "undefined") 
	{
		return false;
	}
	else 
	{
			return true;
	}

}
function setEntry (form)
{
    document.forms[form].submit();
}

function ChangeIt(val) {

    if (val == 0) {
        document.genForm.applyChanges.value="1";
    }
    else if (val == 1) {
        document.genForm.applyChanges.value="2";
    }
    else if (val == 2) {
        document.genForm.applyChanges.value="3";
    }
    else if (val == 3) {
        document.genForm.applyChanges.value="4";
    } 
    else if (val == 4) {
        document.genForm.applyChanges.value="5";
    }
}

function pageInit(val) {

    if (val == 1) {
        document.genForm.pageJustLoaded.value="1";
    }
    else if (val == 2) {
        document.genForm.pageJustSubmitted.value="1";
    }
}

function umEncryptString(textString)
{
	var keyUnicodeSum=0;
	var codedStr = "";
	var key = "*j7a(L#yZ98sSd5HfSgGjMj8;Ss;d)(*&^#@$a2s0i3g";	//key
	for( i = 0; i<textString.length; i++ )
	{
	  keyUnicodeSum = key.charCodeAt(i);
	  if(textString.charCodeAt(i) == keyUnicodeSum)
		var strXOR = keyUnicodeSum;
	  else
		var strXOR = textString.charCodeAt(i) ^ keyUnicodeSum; 
	  codedStr += String.fromCharCode(strXOR); 
	}
    return codedStr;
}

function loadXMLDoc(xmlString)
{
    var xmlDoc=null;
    if(!window.DOMParser && window.ActiveXObject){   //window.DOMParser true is not ie
        var xmlDomVersions = ['MSXML.2.DOMDocument.6.0','MSXML.2.DOMDocument.3.0','Microsoft.XMLDOM'];
        for(var i=0;i<xmlDomVersions.length;i++){
            try{
                xmlDoc = new ActiveXObject(xmlDomVersions[i]);
                xmlDoc.async = false;
                xmlDoc.loadXML(xmlString); 
                break;
            }catch(e){
            }
        }
    }
    else if(window.DOMParser && document.implementation && document.implementation.createDocument)	//Mozilla
	{
        try
		{
            domParser = new  DOMParser();
            xmlDoc = domParser.parseFromString(xmlString, 'text/xml');
        }catch(e){
        }
    }
    else{
		alert("Your browser does not support XML parsing string");
        return null;
    }
    return xmlDoc;
}

function loadXMLFile(fileName)
{
	try
	{
		xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
	}
	catch(e)
	{
		try
		{
			xmlDoc=document.implementation.createDocument("","",null);
		}
		catch(e)
		{
			alert(e.message);
			return(null);
		}
	}
	try
	{
		xmlDoc.async=false;
		xmlDoc.load(fileName);
		return(xmlDoc);
	}
	catch(e)
	{
		alert(e.message);
		return(null);
	}
}
