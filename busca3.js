var MongoClient = require('mongodb').MongoClient;
 
var servidor = 'mongodb://localhost:27017';
 
MongoClient.connect(servidor, {useUnifiedTopology: true} , (erro, client) => {
  const db = client.db('db_devmedia');

  if(erro)
    console.log("Erro ao estabelecer conexão:" + erro);
  else 
    console.log("Conexão estabelecida com sucesso.");

  var colecao = db.collection("topicos");

  var indice = { conteudo : "text" };

  colecao.createIndex(indice);

  var filtro = { $text : { $search : "Eclipse" } }; 

  colecao.find(filtro).toArray(function(erro, documentos){
    if(erro)
      console.log("Erro ao buscar documentos: " + erro);
    else   
        documentos.forEach(function(doc) {
            console.log("Título: " + doc.titulo);
            console.log("Conteúdo: " + doc.conteudo);
            console.log("Tags: " + doc.tags);
            console.log("---");
        }, this);
  });
 
  client.close();
});