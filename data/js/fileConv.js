var resumeBase64 = null,//to get data from form
    fileType = null,//to get file mime type
    fileName = null,//to get file name
    subStr= ";base64,";//setting search filter
    

function handleFileSelect(element){
    var fileObj = element.files[0];//get file object
    var fileReader = new FileReader();//set a new file reader
    fileReader.onload = function(returnObj){//attach onload event of file to the function 
        resumeBase64 = returnObj.target.result;//get data from file
        resumeBase64=resumeBase64.substring(resumeBase64.lastIndexOf(subStr)+subStr.length);//filter the string to remove preheaders
    };
    fileReader.readAsDataURL(fileObj);//read file in base64 format
    fileType =fileObj.type;//read file type
    fileName =fileObj.name;//read file name
}
