$(function () {
    var formData = $('#formHandler').serialize();
    var formHandler = document.getElementById('formHandler');

    formHandler.on('submit', function (e) {
        e.preventDefault();
        $.ajax({
            type: 'POST',
            url: 'Account/Index',
            data: formData,
            success: function (response, textStatus, xhr) {
                if (xhr.status === 201) {
                    if (response.status === 30) {
                        Swal.fire({
                            text: response.message,
                            title: response.title,
                            icon: response.type,
                            allowOutsideClick: false
                        });
                    }
                } else {

                }
            }, error: function (response) {
                console.log(response);
            }
        });
    });

   

    //var registraion = document.getElementById('register');
    //registraion.on('click', function (e) {
        
    //});
});

