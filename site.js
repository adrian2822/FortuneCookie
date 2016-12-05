var fortuna = function(){
    var Frase = [
    "Fortuna no encontrada: Ni modos",
    "Tal vez no encuentres al amor de tu vida, pero si a un alien",
    "¿Puedes indicarme por donde llego? (“¿A dónde?”) A tu corazón",
    "Si eres bueno para algo, nunca lo hagas gratis",
    "Lo que necesitas es jugas basquetbol para ser feliz",
    "No te lastimes con mentiras, mejor busca siempre la verdad",
    "Vuelve después… No molestes (Sí, las galletas de la fortuna también necesitamos dormir)",
    "La fortuna que buscas no esta en esta galleta",
    "Ayuda! Necesito un sandwich"];


        //Se obtiene el index de Frase
        var fraseAleatoria;
        fraseAleatoria = Math.random() * Frase.length;
        fraseAleatoria = Math.floor(fraseAleatoria);
        //Se guarda el index en una variable
       // var mensaje = Frase[fraseAleatoria];
        
    
    //swal(mensaje);
    //swal({
  //title: "Tu fortuna es:",
  //text: mensaje,
  //imageUrl: "img/images.jpg"
//});
};
//Forma asincrona
var getFortuneFromServer = function(){
    //Realizando la peticion con AJAX
    //variable de jquery es $
    $.get("/getfortune","", function(data, status){
        console.log("> Estatus de Respuesta:" + status);
        if(status == 'success'){
        swal({
            title: "Tu fortuna es:",
            text: data.message,
            imageUrl: "img/images.jpg"});//checar aqui el mensaje
        }else{
            console.log("Error fortuna");
            fortuna();
        }
    });
};