var MongoClient = require('mongodb').MongoClient;
 
var servidor = 'mongodb://localhost:27017';
 
MongoClient.connect(servidor, {useUnifiedTopology: true} , (erro, client) => {
  const db = client.db('db_devmedia');

  if(erro)
    console.log("Erro ao estabelecer conexão:" + erro);
  else 
    console.log("Conexão estabelecida com sucesso.");

  var colecao = db.collection("usuarios");

  var filtro = { login : "joel" }; 

  colecao.deleteOne(filtro, function(erro, resultado){
    if(erro)
      console.log("Erro ao remover documento: " + erro);
    else   
      console.log("Documento removido com sucesso");
  });
 
  client.close();
});