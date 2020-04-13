function logarMensagem() {
    console.log("Executei a função.")
}

function listarObjetivos() {
    window.location.replace("http://localhost:8080/sugestoes")
}

function trocarClasse() {

    var arrayDeElementosDaClasse = document.getElementsByClassName("verde")
    var classeDesejada = "vermelho";

    if (arrayDeElementosDaClasse.length == 0) {
        classeDesejada = "verde"
        arrayDeElementosDaClasse = document.getElementsByClassName("vermelho");
    }

    while (arrayDeElementosDaClasse.length > 0) {
        arrayDeElementosDaClasse[0].className = classeDesejada
    }
}

function criaListaDoBack() {

    $.getJSON( "http://localhost:8080/sugestoes", function( data ) {
        var items = [];

        console.log(data);

        $.each( data, function( key, val ) {
          items.push( "<tr>"+
          "<td>" + val.descricao + " </td> " + 
          "<td>" + val.titulo + "</td>" +
          "<td>" + val.tipoSugestao + "</td>" +
          "</tr>");
        });

        // TRANSFORMAR EM TABLE
       
        $( "<table/>", {
          "class": "my-new-list",
          html: items.join( "" )
        }).appendTo( "body" );
      });
      
      function criaListaDoBack() {

        $.getJSON( "http://localhost:8080/usuarios/1/despesas", function( data ) {
            var items = [];
    
            console.log(data);
    
            $.each( data, function( key, val ) {
              items.push( "<tr>" + 
              "<td>"  + val.valor + " </td> " + 
              "<td>" + val.vencimento + " </td> " + 
              "<td>" + val.tipoDespesa +"</td>" +
              "</tr>");
            });
    
            // TRANSFORMAR EM TABLE
           
            $( "<table/>", {
              "class": "my-new-list",
              html: items.join( "" )
            }).appendTo( "body" );
          });

          $.getJSON( "http://localhost:8080/usuarios/1/objetivos", function( data ) {
            var items = [];
    
            console.log(data);
    
            $.each( data, function( key, val ) {
              items.push( "<tr> " + 
             "<td>" + val.nome + " </td> " +
             "<td>" + val.valorTotal + " </td> " + 
             "<td>" + val.numeroInvestimento +"</td>" + 
             "</tr>");
            });
    
            // TRANSFORMAR EM TABLE
           
            $( "<table/>", {
              "class": "my-new-list",
              html: items.join( "" )
            }).appendTo( "body" );
          });

          $.getJSON( "http://localhost:8080/usuarios/2/avaliacoes", function( data ) {
        var items = [];

        console.log(data);

        $.each( data, function( key, val ) {
          items.push( "<tr>" + 
          "<td>" + val.notaavaliacao + " </td> " + 
          "<td>" +val.comentario + "<td>" +
          "</tr>");
        });

        // TRANSFORMAR EM TABLE
       
        $( "<table/>", {
          "class": "my-new-list",
          html: items.join( "" )
        }).appendTo( "body" );
      });
}