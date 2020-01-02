var MongoClient = require('mongodb').MongoClient;
 
var servidor = 'mongodb://localhost:27017';
 
MongoClient.connect(servidor, {useUnifiedTopology: true} , (erro, client) => {
  const db = client.db('db_devmedia');

  if(erro)
    console.log("Erro ao estabelecer conexão:" + erro);
  else 
    console.log("Conexão estabelecida com sucesso.");

  var updateQuery = { $inc:{ pontos : 1 } };

  var colecao = db.collection("clientes");

  var filtro = { codigo: 1 }; 

  colecao.updateOne(filtro, updateQuery, function(erro, resultado){
    if(erro)
      console.log("Erro ao atualizar documento: " + erro);
    else   
      console.log("Documento atualizado com sucesso");
  });
 
  client.close();
});