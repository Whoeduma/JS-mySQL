var mysql = require('mysql2'); /*A variavel mysql "aponta" para a biblioteca mysql2*/ 
var con = mysql.createConnection({
    host: "localhost", 
    user:"root",
    password:"c@tolic@",
    database:"JSmySQL"
});

/*Função callback para verificar erro na conexão*/
con.connect(
    function(err){
        if (err) throw err;
        console.log("Conexão realizada com sucesso!");

        //exemplo 1
        var SQL = "SELECT * FROM agenda";
        
        //exemplo 2 e se os nomes estiverem em ordem alfabetica
        var SQL = "SELECT * FROM agenda ORDER BY nome";

        con.query(SQL, function(err, result){
            if (err) throw err;
            console.log("DADOS DA TABELA!");
            result.forEach(
                (row) => {
                    console.log(row);
                });
        });

       
    });

    //con.end();