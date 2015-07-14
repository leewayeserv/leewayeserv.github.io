//Initialize the tooltips
$('#careers-leeway :input').each(function () {
    var tipelement = this;

    $(tipelement).tooltipster({
        trigger: 'custom',
        onlyOne: false,
        position: 'right',
        multiple: false,
        autoClose: false,
        theme: 'tooltipster-punk'
    });


});

var validator = $("#careers-leeway").validate(
        {
            rules:
            {
                name: 
                    {
                    required: true
                },
                mobileNo:
                    {
                        required: true,
                        digits: true
                    },
                address:
                    {
                        required:true
                    },
                city:
                    {
                        required:true
                    },
                salary:
                    {
                        required: true,
                        digits:true
                    },
                experience:
                    {
                        required:false,
                        digits:true
                    },
                email:
                {
                    required: true,
                    email: true
                }
            
            },
            messages:
            {
                name: {
                    required: "Please enter your name"
                },
                mobileNo:
                    {
                        required: "Please enter a 10 digit number",
                        digits: "Please enter only the numbers"
                    },
                address:{
                    required: "Please enter your address"
                },
                city:
                    {
                        required: "Please enter your city"
                    },
                salary:
                    {
                        required: "Please enter some amount",
                        digits:"Please enter only the amount"
                    },
                experience:
                    {
                        required:"Please enter your work experience",
                        digits: "Please enter only the number"
                    },
                email:
                {
                    required: "Please enter your email address",
                    email: "Please enter correct email address"
                }
            },
            errorPlacement: function (error, element) {
                var $element = $(element),
                    tipelement = element,
                    errtxt = $(error).text(),
                    last_error = '';

                last_error = $(tipelement).data('last_error');
                $(tipelement).data('last_error', errtxt);
                if (errtxt !== '' && errtxt != last_error) {
                    $(tipelement).tooltipster('content', errtxt);
                    $(tipelement).tooltipster('show');
                }
            },
            success: function (label, element) {
                var tipelement = element;
                $(tipelement).tooltipster('hide');
            }
        });
