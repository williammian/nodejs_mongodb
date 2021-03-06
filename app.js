var MongoClient = require('mongodb').MongoClient;
 
var servidor = 'mongodb://localhost:27017';
 
MongoClient.connect(servidor, {useUnifiedTopology: true} , (erro, client) => {
  const db = client.db('db_devmedia');

  if(erro)
    console.log("Erro ao estabelecer conexão:" + erro);
  else 
    console.log("Conexão estabelecida com sucesso.");

  var topico = {
    titulo : "Erro de compilação",
    conteudo : "Não consigo compilar meu projeto",
    tags : ["Java", "Android", "Mobile"]
  };

  var colecao = db.collection("topicos");

  colecao.insertOne(topico, function(erro, resultado){
    if(erro)
      console.log("Erro ao inserir documento: " + erro);
    else   
      console.log("Documento inserido com sucesso");
  });
 
  client.close();
});