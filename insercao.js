var MongoClient = require('mongodb').MongoClient;
 
var servidor = 'mongodb://localhost:27017';
 
MongoClient.connect(servidor, {useUnifiedTopology: true} , (erro, client) => {
  const db = client.db('db_devmedia');

  if(erro)
    console.log("Erro ao estabelecer conexão:" + erro);
  else 
    console.log("Conexão estabelecida com sucesso.");

  var usuarios = [
    { login: "joel", senha : "123"},
    { login: "joao", senha : "456"},
    { login: "maria", senha : "789"}
  ];

  var colecao = db.collection("usuarios");

  colecao.insertMany(usuarios, function(erro, resultado){
    if(erro)
      console.log("Erro ao inserir documentos: " + erro);
    else   
      console.log(resultado.insertedCount + "documentos inseridos com sucesso");
  });
 
  client.close();
});