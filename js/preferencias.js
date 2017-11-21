$().ready(function(){
    $('#divPreferenciasSelect').hide();
    $('#divChoferes').hide();

    $("#tableChoferes tr td:first-child" ).click(function(){
        var seleccionado = $(this).text();
        $.confirm({
            title: 'Ha seleccionado como Chofer a:!',
            content: seleccionado,
            buttons: {
                ok: function () {
                    $.alert('Confirmed!');
                },
                cancel: function () {
                    $.alert('Canceled!');
                }
            }
        });
    })

    $('#checkSi').change(function(){
        $('#divPreferenciasSelect').toggle();                    
    });
    
    $('#aceptar').click(function(){
        $('#divChoferes').show();
        $('#divPreferenciasSelect').hide();
        $('#checkSi').prop('checked', false);
    });

    $('#cancelar').click(function(){
        $('#divChoferes').hide();
    });
});