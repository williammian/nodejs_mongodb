var MongoClient = require('mongodb').MongoClient;
 
var servidor = 'mongodb://localhost:27017';
 
MongoClient.connect(servidor, {useUnifiedTopology: true} , (erro, client) => {
  const db = client.db('db_devmedia');

  if(erro)
    console.log("Erro ao estabelecer conexão:" + erro);
  else 
    console.log("Conexão estabelecida com sucesso.");

  var colecao = db.collection("clientes");

  var filtro = { "endereco.estado" : "RJ" }; 

  colecao.find(filtro).toArray(function(erro, documentos){
    if(erro)
      console.log("Erro ao buscar documentos: " + erro);
    else   
        documentos.forEach(function(doc) {
            console.log("Código: " + doc.codigo);
            console.log("Nome: " + doc.nome);
            console.log("Status: " + doc.status);
            console.log("---");
        }, this);
  });
 
  client.close();
});