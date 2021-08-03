// $(function () {
//     $(".btn-success").click(function () {
//         $.ajax({ 
//             url: "https://restcountries.eu/rest/v2/name/usa" + $(".form-control").val(),
//             success: function (data, statuts, response) {
//                 $("#capital").html(data[0].capital);
//                 $("#country").html(data[0].name);
//             }
//         })
//     })
// })

$(
    function () {
        $("button.btn.btn-success").click(function () {
            const countryName = $("#exercise input.form-control.mb-3").val()
            const url = 'https://restcountries.eu/rest/v2/name/' + countryName
            $.ajax({
                url: url,
                success: function(data, statuts, response) {
                    
                    $("#country").html(data[0].name)
                    $("#capital").html(data[0].capital)
                    
                }
            })
           
        })
        
    }
)

