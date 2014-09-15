$(document).ready(function(){    
    function Person(n, g, r)	{	
            this.name	=	n;
            this.gender = g;
            this.room = r;
    };
    
    //affichage de l'heure
    setInterval(function(){$("#clock").text(new Date())},1000);

    $("#toggleButton").click(function(){
        $("#studentPanel").toggle();
    });

    $("#showAlertButton").click(function(){
        alert("Hello world !");
    });
    
    var shiftIsDown = false;
    
    $(document).on('keyup keydown', function(e){shiftIsDown = e.shiftKey} );

    $(document).mousemove(function(event){
        //affichage de la position souris
        $("#stickyFooter").text(event.pageX + ", " + event.pageY);
        
        //génération d'une personne
        var gen = chance.gender();
        var personne = new	Person(chance.name({ gender: gen }),gen,chance.zip());
        
        //affichage de la personne
        if(gen === "Male") {
            $("#studentPanel").css("background-color","lightblue");
        } else {
            $("#studentPanel").css("background-color","lightpink");
        }
        if(shiftIsDown) {
            $("#studentPanel").html($("#studentPanel").html() + "<br>Hello " + personne.name + " (" + personne.gender + ")!");
        } else{
            $("#studentPanel").text("Hello " + personne.name + " (" + personne.gender + ")!");
        }
    });
    
    //chargement du fichier json
    $.getJSON("rooms.json", function( data ) {
      $.each( data.rooms, function( key, val ) {
        $("#roomPanel").html($("#roomPanel").html() + "</br>Room: " + val.room);
      });
    });
});