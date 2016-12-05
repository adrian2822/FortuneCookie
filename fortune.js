 //Logica que obtiene un mensaje
/*       // Aleatorio
var fortunePapers = [
     "Por fin se imprimio esta cosa",
      "Hazlo o no lo hagas, no hay intentos",
      "Que la fuerza te acompañe",
      "El amor es...Tengo hambre",
      "Vive deprisa, muere joven y deja un cadaver obeso atras",
      "Dios es mi personaje ficticio favorito" 
         ];      
module.exports = {
    "getFortune" : function (cb) {
       

         var selector = 
         Math.floor(
             Math.random() * (fortunePapers.length - 0) + 0
             );
         var fortuneMessage = fortunePapers[selector];
         //Armando objeto respuesta
         var fortunePaper = JSON.stringify({
             "message" : fortuneMessage
         });

         //Ejecuto el callback pasandole como parametro el fortunePaper
         cb(fortunePaper);

    }

};
*/
var mongodb = require("mongodb");
var mongoClient = mongodb.MongoClient;

module.exports = {
    "getFortune": function (cb) {
        mongoClient.connect("mongodb://aavalos:Eduardo24@ds115798.mlab.com:15798/fortuneapp", function (err, db) {
                    //se crea variable collection,
                    //que mandara llamar a papers de la bd
                    var Collection =
                        db.collection("papers");
                    //Se crea variable objeto resultado
                    //para buscar en la collecion de base de datos.
                    var objecresul =
                        Collection.find({});
                    //mandamos llamar la variable objecresul para el arreglo.
                    objecresul.toArray(function (err, papers) {
                        // nuestro arreglo de forma aleatoria.
                        var selector = Math.floor( Math.random() * papers.length);
                        console.log(selector)
                        var fortuna = JSON.stringify(papers[selector]);
                        //se cierra la base de datos
                        db.close()
                        console.log("> Por fin, esta es tu fortuna" + fortuna);
                        cb(fortuna);
                    });
                
            });
    }
};
