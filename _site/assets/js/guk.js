
function sendTheMail(formtype) {
    InputName = $('#name').val();
    InputCompany = $('#company').val();
    InputMessage = $('#message').val();
    InputPhone = $('#phone').val();
    InputUsers = $('#users').val();
    if (formtype != 'glueckkanja-subscribe') {
        InputEmail = $('#email').val();
    } else { 
        InputEmail = $('#subscriberemail').val();
    }

    if (validateEmail(InputEmail)) {
        try {
            FS.identify($('#email').val(), {
                displayName: $('#name').val() + ' (' + $('#company').val() + ')',
                email: $('#email').val()
            });
        } catch(error) {}

        var req = { "inputcompany": InputCompany, "inputname": InputName,
        "inputemail": InputEmail, "inputphone": InputPhone, "inputusers": InputUsers, 
        "inputmessage": InputMessage, "formtype": formtype };

        $.ajax({
            type: "POST",
            url: "https://prod-37.westeurope.logic.azure.com:443/workflows/546933ed027c45f1b1f76498b699afd4/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=iAVWJVGOzukSmG0txHPm4J9okBsdlAQGIni1gBGpM4o",
            data: JSON.stringify(req),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(data){alert(data);},
            failure: function(errMsg) {
            alert(errMsg);
            }
        });
        switch(formtype) {
            case "glueckkanja-subscribe":
                $("#subscribebtn").replaceWith( "<p class='btn btn-primary btn-sm disabled'>Thanks!</p>" );
        }
    } 
    else {
        alert("Please use valid e-mail address.")
    }
}

function subscribeform() {
    sendTheMail('glueckkanja-subscribe');
}

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
  
