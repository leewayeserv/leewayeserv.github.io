//Initialize the tooltips
$('#contact-us-leeway :input').each(function ()
                             {
    var tipelement = this;

    $(tipelement).tooltipster({
        trigger: 'custom',
        onlyOne: false,
        position: 'right',
        multiple:false,
        autoClose:false,
        theme: 'tooltipster-punk'});
        

});

var validator = $("#contact-us-leeway").validate(
        {
            rules: 
            {   
                name:{
                    required: true
            },
                email: 
                {
                    required: true,
                    email: true
                },
                message: 
                {
                    required: true,
                    minlength: 20
                }
            },
            messages: 
            {
                name:{
                    required: "Please enter your name"
                },
                email: 
                {
                    required: "Please enter your email address"
                },
                message: 
                {
                    required: "A message is required to be send",
                    minlength: "Message should be more than 20 chars"
                }
            },
            errorPlacement: function(error, element)
            {
                var $element = $(element),
                    tipelement=element,
                    errtxt=$(error).text(),
                    last_error='';

                last_error = $(tipelement).data('last_error');
                $(tipelement).data('last_error',errtxt);
                if(errtxt !=='' && errtxt != last_error)
                {
                    $(tipelement).tooltipster('content', errtxt);
                    $(tipelement).tooltipster('show');
                }
            },
            success: function (label, element)
            {
                var tipelement = element;
                $(tipelement).tooltipster('hide');
            }
});
