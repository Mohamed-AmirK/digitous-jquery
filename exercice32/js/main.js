
$(function(){
    $(".btn-success").click(function(){
        $.ajax({
            url : "https://restcountries.eu/rest/v2/name/france",
            success: function(data, statuts, response){
            console.log(data[0].capital);
            console.log(data[0].name);
            }
        })
    })
})