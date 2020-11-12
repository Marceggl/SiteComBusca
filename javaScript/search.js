$("#search").hide();

$("#entrada").keyup(function() {
    $("#search").html("");
    //Pega o valor do input do usuário
    let busca = $("#entrada").val();
    //Pega o documento JSON toda vez que o usuario digitar
    //Caso o JSON atualizar no "Servidor" pegará ele atualizado
    $.ajax({
        type: "GET",
        url: "./json/things.json",
        dataType: "json",
        success: function(dados) {
            verifyThings(dados, busca);
            printThings()
        },
        error: function() {
            console.log("json hasn't been loaded")
        }
    })
})