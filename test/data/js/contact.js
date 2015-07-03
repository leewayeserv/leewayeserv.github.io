function contactForm() {
    var contactFormHost = 'http://reachus-leeway.herokuapp.com',
        form = "",
        notice = $('#reachus_message'),
        sendingIndicator = $('#sndg-msg-rchus,#loading-indicator-rchus'),
        str = $(location).attr('pathname'),
        urlByPart = "",
        formData = "";
    //for contact page
    if(str.match(/careers/gi)!==null){
        urlByPart = '/send_resume';
        form = $('#careers-leeway');
        formData = form.serialize() + "&" + $.param({'Mime' : fileType}) + "&" + $.param({ 'fileName': fileName })+ "&" + $.param({ 'fileData': resumeBase64 });
    }
    else{
        urlByPart = '/send_email';
        form = $('#contact-us-leeway');
        formData = form.serialize();
    }
    //for careers page
    //form sending and response management
    if (form.length) {
        $.ajax({
            type: 'POST',
            url: contactFormHost + urlByPart,
            data: formData,
            dataType: 'json',
            success: function(response) {
                switch (response.message) {
                    case 'success':
                        notice.text(notice.data('success')).fadeIn();
                        sendingIndicator.hide();
                        form [0].reset();
                        break;

                    case 'failure_email':
                        notice.text(notice.data('error')).fadeIn();
                        sendingIndicator.hide();
                }
            },
            error: function(xhr, ajaxOptions, thrownError) {
                notice.text(notice.data('error')).fadeIn();
            }
        });

    }
    return false;
}
$(document).ready(function(){
    $("#submit").click(function(){
        $("#overlay, #popup").fadeIn();
        return contactForm();
    });
    $(document).ajaxComplete(function(event, request, settings) {
        $('#popup,#overlay').fadeOut(6000);
    });
});