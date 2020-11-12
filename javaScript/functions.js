function verifyThings(dados, busca) {
    //Adicionando uma expressão regular a busca para que a compração seja feita com letras maiuscula/minusculas
    busca = new RegExp(busca, "i");
    //Compara os dados do JSON e aqueles que se assimilarem vai mostrar na div #search
    $(dados).each(function(index, item) {
            if (item.modelo.match(busca) || item.cod_fipe.match(busca) || item.marca.match(busca)) {
                $("#search").append("<div class='link'>" + item.cod_fipe + " | " + item.marca + " | " + item.modelo + "</div>");
            }
        })
        //Quando encontrar dados similares no JSON a div #search fará uma animação para baixo mostrando o conteudo
    $("#search").slideDown(500)
}

function printThings() {
    $(".link").click(function() {
        //Divide a string do link clicado quando "|" aparecer
        let obj = $(this).text().split("|");
        //Tabela que será exibida quando o usuário clicar no carro desejado
        let tabela = "<table><tr><th>Marca/Brand</th><th>Modelo/Model</th><th>Código/Code</th></tr><tr><td>" + obj[1] + "</td><td>" + obj[2] + "</td><td>" + obj[0] + "</td></th></table>"
            //A div de pesquisa fará uma animação subindo e sumirá
        $("#search").slideUp(300);
        //Imprimira a variavel tabela na div com class ".table"
        $(".table").html(tabela);
    })
}