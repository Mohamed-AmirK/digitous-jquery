$(function(){
    $(".btn-success").click(function(){
        $.ajax({
            url : "https://restcountries.eu/rest/v2/name/france",
            success: function(data, statuts, response){
            $("#capital").html(data[0].capital);
            $("#country").html(data[0].name);
            }

        })
    })
})