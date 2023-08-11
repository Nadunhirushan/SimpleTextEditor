function textBold(){
	document.execCommand("bold");
}

function textUnderline(){
	document.execCommand("underline");
}

function textItalic(){
	document.execCommand("italic");
}
function selectTextColor(){
	var textColor = document.getElementById("txtColor").value;
	document.execCommand('foreColor',false,textColor);
}

function textLeft(){
	document.execCommand("justifyLeft");
}

function textCenter(){
	document.execCommand("justifyCenter");
}

function textRight(){
	document.execCommand("justifyRight");
}

function textJustify(){
	document.execCommand("justifyFull");
}

function textUndo(){
	document.execCommand("undo");
}

function textRedo(){
	document.execCommand("redo");
}