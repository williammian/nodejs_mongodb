var MongoClient = require('mongodb').MongoClient;
 
var servidor = 'mongodb://localhost:27017';
 
MongoClient.connect(servidor, {useUnifiedTopology: true} , (erro, client) => {
  const db = client.db('db_devmedia');

  if(erro)
    console.log("Erro ao estabelecer conexão:" + erro);
  else 
    console.log("Conexão estabelecida com sucesso.");

  var colecao = db.collection("usuarios");

  var filtro = { };

  var alteracao = { $set : { ativo : true } }

  colecao.updateMany(filtro, alteracao, function(erro, resultado){
    if(erro)
      console.log("Erro ao atualizar documentos: " + erro);
    else   
      console.log("Documentos atualizados com sucesso");
  });
 
  client.close();
});