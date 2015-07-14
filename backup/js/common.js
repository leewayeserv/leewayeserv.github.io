
function isInteger(obj){
        var i;
        var s = obj.value;
	s = s.toString();
      for (i = 0; i < s.length; i++){
         var c = s.charAt(i);
         if (isNaN(c)){
                return false;
	 }
      }
      return true;
}

function isValidWebsite( websiteUrlVal ){
                var noOfDots = 0;
		for( i = 0; i < websiteUrlVal.length; i++){
				if( websiteUrlVal.charAt(i) == '.' )noOfDots++;
		}
                if( noOfDots > 2 || noOfDots == 0 ){
                        return false;
                }
                if( websiteUrlVal.indexOf(' ') != -1){
                        return false;
                }

                if( websiteUrlVal.indexOf(".") == -1 ){
                        return false;
                }else if( websiteUrlVal.indexOf('.') == 0 ){
                        return false;
                }else if( websiteUrlVal.charAt( websiteUrlVal.length - 1) == '.' ){
                        return false;
                }

                return true;

}

function isValidEmail(obj, required) {
    email = obj.value;
    if( !validateEmail(email, required)){
        nameOfField = obj.name;
        return false;
    }
    return true;
}
function validateEmail(email, required){
    if (required==undefined) {   
        required=true;
    }
    if (email==null) {
        if (required) {
            return false;
        }
        return true;
    }
    if (email.length==0) {  
        if (required) {
            return false;
        }
        return true;
    }
    if (! allValidChars(email)) {  
        return false;
    }
    
    if (email.indexOf("@") < 1) { 
        return false;
    } else if (email.lastIndexOf(".") <= email.indexOf("@")) { 
        return false;
    } else if (email.indexOf("@") == email.length-1) {  
        return false;
    } else if (email.indexOf("..") >=0) { 
	return false;
    } else if (email.indexOf(".") == email.length-1) {
	return false;
    }
    return true;
}
function allValidChars(email) {
  var parsed = true;
  var validchars = "abcdefghijklmnopqrstuvwxyz0123456789@.-_";
  for (var i=0; i < email.length; i++) {
    var letter = email.charAt(i).toLowerCase();
    if (validchars.indexOf(letter) != -1)
      continue;
    parsed = false;
    break;
  }
  return parsed;
}

//VALIDATE PASSWORDS
function validatePwd(pw1Obj, pw2Obj,formObj) {
    var pw1 = pw1Obj.value;
    var pw2 = pw2Obj.value;
    var invalid = " "; // Invalid character is a space
    var minLength = 7; // Minimum length
    // check for a value in both fields.
try{
    if (pw1 == '' || pw2 == '') {
        document.getElementById('passTwiceId').style.display = 'block';
        return false;
    }

    // check for minimum length
    if (pw1.length < minLength) {
    var divNewPw = pw1Obj.name+"Id";
    document.getElementById(divNewPw).style.display = 'block';
    pw1Obj.focus();
    return false;
    }
    // check for spaces
    if (pw1.indexOf(invalid) > -1) {
        var divRePw = pw1Obj.name+"SId";
        document.getElementById(divRePw).style.display = 'block';
        pw1Obj.focus();
        return false;
    }
    if( pw2.indexOf(invalid) > -1){
        var divRePw = pw2Obj.name+"SId";
        document.getElementById(divRePw).style.display = 'block';
        pw2Obj.focus();
        return false;
    }
    else {
        if (pw1 != pw2) {
            document.getElementById('notMatchId').style.display = 'block';
            return false;
        }
        else {
            return true;
        }
    }
}catch(e){alert('12'+e);}
}

function isEmptyField(obj){
    if(obj.value.replace(/^\s+|\s+$/g, '') == ''){
        obj.focus();
        return false;
    }
return true;
}


function changeButtons(obj, name){
    obj.src = '/jsp/images/'+name;
}


function trim(str, chars) {
	return ltrim(rtrim(str, chars), chars);
}
 
function ltrim(str, chars) {
	chars = chars || "\\s";
	return str.replace(new RegExp("^[" + chars + "]+", "g"), "");
}
 
function rtrim(str, chars) {
	chars = chars || "\\s";
	return str.replace(new RegExp("[" + chars + "]+$", "g"), "");
}

function changeImage(obj,txt){
	if( obj ){
		obj.src = txt;
	}
}
function showHint(obj){
	var fname = obj.name;
	fname = fname+'Span';
	var hintObj = document.getElementById(fname);
	hintObj.style.display = 'block';
        return true;
}
function hideHint(obj){
	var fname = obj.name;
	fname = fname+'Span';
	var hintObj = document.getElementById(fname);
	hintObj.style.display = 'none';
return true;
}// JavaScript Document