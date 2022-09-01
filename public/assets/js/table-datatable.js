$(function () {
    "use strict";

    $(document).ready(function () {
        $('#example').DataTable();
    });


    $(document).ready(function () {
        var table = $('#example2').DataTable({
            lengthChange: false,
            buttons: ['copy', 'excel', 'pdf', 'print']
        });

        table.buttons().container()
            .appendTo('#example2_wrapper .col-md-6:eq(0)');
    });
    $(document).ready(function () {
        var table = $('#division_list').DataTable({
            lengthChange: false,
            buttons: ['copy', 'excel', 'pdf', 'print']
        });

        table.buttons().container()
            .appendTo('#division_list_wrapper .col-md-6:eq(0)');
    });


});