$(function () {
    var formData = $('#formID').serialize();
    var formHandler = document.getElementById('formHandler');
    var path = formHandler.attr('action');
    $.ajax({
        type: 'POST',
        url: path,
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