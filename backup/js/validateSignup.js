// JavaScript Document
function validateMobile(mob){
    if( isInteger(mob) == false ){
        mob.className = mob.className + " errorfield"
        $("#invalidMobileId").show();

        return false;
    }else if( mob.value.length < 10 ){
        mob.className = mob.className + " errorfield"
        $("#invalidMobileId").show();

        return false;

    }else if(mob.value.length == 10 ){
        if( mob.value.charAt(0) != 9 ){
            if( mob.value.charAt(0) != 8 ){
                if( mob.value.charAt(0) != 7 ){
                    mob.className = mob.className + " errorfield"
                    $("#invalidMobileId").show();

                    return false;
                }
            }
        }
    }
    $("#invalidMobileId").hide();
    $.ajax( {
        url: "jsp/ajax/validateMobile.jsp?mobile="+mob.value,
        success: function(data) {
            if( trim(data) != 0 ){
                mob.className = mob.className + " errorfield"
                $("#mobileExistsId").show();
            }
        }
    } )
    mob.className = 'large';
    $("#mobileExistsId").hide();
    return true;
}

function validateEmailF(emailObj){

    try{
        if( isValidEmail(emailObj,true) == false ){

            $("#emailErrorId").show();
            emailObj.className = emailObj.className + " errorfield"
            return false;
        }
        $("#emailErrorId").hide();

        var exists = false;
        var invalidD = false;
        $.ajax( {
            url: "jsp/ajax/validateEmail.jsp?email="+emailObj.value,
            success: function(data) {
                
                if( trim(data) == 100001 ){
                    emailObj.className = emailObj.className + " errorfield"
                    $("#emailErrorId").hide();
                    $("#emailExistsId").hide();
                    $("#emailDMErrorId").show();
                    invalidD = true;
                    
                }else if(trim(data) == -1 ){
                    
                    emailObj.className = emailObj.className + " errorfield"
                    $("#emailErrorId").hide();
                    $("#emailExistsId").show();
                    $("#emailDMErrorId").hide();
                    exists = true;
                }
            }
        } );

        if( invalidD ){
            return false;
        }
        
        if( exists ){
            return false;
        }

        

        emailObj.className = 'large';
        $("#emailErrorId").hide();
        $("#emailExistsId").hide();
        $("#emailDMErrorId").hide();
    }catch(e){
    //alert(e);
    }

    return true;
}
function isStrongPassword(password) {
    var pattern = new RegExp(/^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[a-z]).*$/);
    return pattern.test(password);
}

function validatePwds(pwdObj){

    var pwd = pwdObj.value;

    var invalid = " "; // Invalid character is a space
    var minLength = 8; // Minimum length

    if( pwd == '' ){
        pwdObj.className = pwdObj.className + " errorfield"
        $("#pwdLengthError").hide();
        $("#pwdInvalid").show();

        return false;
    }

    if (pwd.length < minLength) {
        pwdObj.className = pwdObj.className + " errorfield"
        $("#pwdInvalid").hide();
        $("#pwdLengthError").show();
        $("#pwd1SpecialError").hide();
        return false;
    }

    if (pwd.indexOf(invalid) > -1) {
        pwdObj.className = pwdObj.className + " errorfield"
        $("#pwdLengthError").hide();
        $("#pwdInvalid").show();
        $("#pwd1SpecialError").hide();

        return false;
    }

    if( !isStrongPassword(pwdObj.value)){
        $("#pwdLengthError").hide();
        $("#pwdInvalid").hide();
        $("#pwd1SpecialError").show();
        return false;
    }
    pwdObj.className = 'large';
    $("#pwdInvalid").hide();
    $("#pwdLengthError").hide();
    $("#pwd1SpecialError").hide();

    return true;
}

function checkGender(obj){
    if(obj){
        if( obj.value == -1 ){
            $("#nameRow").show();
            $("#genderErrorId").show();
            return false;
        }

    }else{

    }
    $("#nameRow").hide();
    $("#genderErrorId").hide();
    return true;
}

function validateName(obj){
    if( obj ){
        if( trim(obj.value) == '' ){
            obj.className = obj.className + " errorfield"
            $("#nameRow").show();
            $("#invalidNameLengthId").hide();
            $("#invalidNameId").show();

            return false;
        }

        if( trim(obj.value).length < 4 ){
            obj.className = obj.className + " errorfield"
            $("#nameRow").show();
            $("#invalidNameId").hide();
            $("#invalidNameLengthId").show();

            return false;
        }
    }
    obj.className = 'medium';
    $("#nameRow").hide();
    $("#invalidNameId").hide();
    $("#invalidNameLengthId").hide();
    return true;

}


function validateDOB(){

    if( $("#dayId").val() == 0 ){
        $("#dobRow").show();
        $("#yearErrorId").hide();
        $("#monthErrorId").hide();
        $("#dayErrorId").show();

        return false;
    }
    if( $("#month").val() == 0 ){
        $("#dobRow").show();
        $("#dayErrorId").hide();
        $("#yearErrorId").hide();
        $("#monthErrorId").show();
        return false;
    }
    if( $("#year").val() == 0 ){
        $("#dobRow").show();
        $("#dayErrorId").hide();
        $("#monthErrorId").hide();
        $("#yearErrorId").show();
        return false;
    }
    $("#dobRow").hide();
    $("#dayErrorId").hide();
    $("#monthErrorId").hide();
    $("#yearErrorId").hide();
    return true;
}

function validateCity(obj){
    if( obj.value == -1 ){
        obj.className = obj.className + " errorfield"
        $("#cityErrorId").show();
        return false;
    }
    obj.className = 'largeselect';
    $("#cityErrorId").hide();
    return true;
}

function validateSignUp(){

    try{
        if( validateEmailF(document.getElementById("email")) != true ){
            return false;
        }
        if( validatePwds(document.getElementById("pwdId")) != true){
            return false;
        }
        
        if( validateMobile(document.getElementById("mobileId")) != true){
            return false;
        }
        
        if( checkGender(document.getElementById("genderId")) != true){
            return false;
        }

        if( validateName(document.getElementById("name")) != true){
            return false;
        }

        if( validateDOB() != true){
            return false;
        }

        if( validateCity(document.getElementById("city")) != true){
            return false;
        }

       else{
            return true;
        }
        
    }catch(e){
    //alert(e)
    }


    return true;
}


function clearSiup(){
    try{
        $('#emailErrorId').hide();
        $('#emailExistsId').hide();
        $('#pwdInvalid').hide();
        $('#mobileExistsId').hide();
        $('#invalidMobileId').hide();
        $('#genderErrorId').hide();
        $('#invalidNameId').hide();
        $('#invalidNameLengthId').hide();
        $('#dayErrorId').hide();
        $('#monthErrorId').hide();
        $('#yearErrorId').hide();
        $('#cityErrorId').hide();
    }catch(e){}

    return true;
}