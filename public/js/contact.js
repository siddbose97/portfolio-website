(function(){
    console.log('Hello')
    $('#btn-register').click(function(event){
        if(event)
            event.preventDefault()

        var visitor = {
            name: $('#contact-name').val(),
            email: $('#contact-email').val(),
            subject: $('#contact-subject').val(),
            message: $('#contact-message').val()
        }

        $.ajax({
            url:'/api/subscriber',
            type: 'POST',
            data: visitor,
            success: function(response){
                console.log('Info Received: ' + JSON.stringify(response))
            },
            error: function(){}
        })
        console.log('Submitted' + JSON.stringify(visitor))


    })
})()