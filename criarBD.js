var mysql = require('mysql2'); /*A variavel mysql "aponta" para a biblioteca mysql2*/ 
var con = mysql.createConnection({
    host: "localhost", 
    user:"root",
    password:"c@tolic@"
});

/*Função callback para verificar erro na conexão*/
con.connect(
    function(err){
        if (err) throw err;
        console.log("Conexão realizada com sucesso!");

        var SQL = "CREATE DATABASE JSmySQL";
        con.query(SQL, function(err, result){
            if (err) throw err;
            console.log("DATABASE criado!");
        });

    });



