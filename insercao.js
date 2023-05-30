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

        //exemplo 1 de inserção 
        var SQL = "INSERT INTO agenda (nome, telefone) VALUES ('Victor Brito', '61 985658456')";

        //exemplo 2 é obrigatorio escrever (nome telefone) antes de VALUES? [SIM]
        var SQL = "INSERT INTO agenda VALUES ('João Pedro', '61 981564992')"; 

        //exemplo 3 e se trocar a ordem?
        var SQL = "INSERT INTO agenda (telefone, nome) VALUES ('61 981658345', 'Gabriel')"; 

        //exemplo 4 E para inserir duas linhas(registros) no banco de dados?
        var SQL ="INSERT INTO agenda (nome, telefone) VALUES";
            SQL = SQL + "('Ryann', '61 985646256'),";
            SQL = SQL +"('Mariana', '61 98478568')";

        //EXEMPLO 5 e se os dados estiverem nas variais nome e telefone
        var nome = "Eduarda";
        var telefone = "61 983667796";

        var SQL = "INSERT INTO agenda (nome, telefone) VALUES";
            SQL = SQL + "('" + nome +"', '" + telefone + "')";
        console.log(SQL);

        


        con.query(SQL, function(err, result){
            if (err) throw err;
            console.log("Dados inseridos com sucesso!");
        });

       
    });