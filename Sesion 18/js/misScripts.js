$(document).ready(function(){
    $("a").click(function(evento){
        alert("Has pulsado el enlace. Ahora seras enviado a la pagina de la usat");
    });
});

$("#c1b").click(function(){
    $("#cont1").toogle(1500);
}, function(){
    $("cont1").toogle(1500);
});