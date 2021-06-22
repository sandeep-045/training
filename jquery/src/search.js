$('#input').on('keyup', function (data) {
    var value = $(this).val().toLowerCase();
    $('#mytable tr').filter(function () {

            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
// any element can be searched for using this 