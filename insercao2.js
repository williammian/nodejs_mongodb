var MongoClient = require('mongodb').MongoClient;
 
var servidor = 'mongodb://localhost:27017';
 
MongoClient.connect(servidor, {useUnifiedTopology: true} , (erro, client) => {
  const db = client.db('db_devmedia');

  if(erro)
    console.log("Erro ao estabelecer conexão:" + erro);
  else 
    console.log("Conexão estabelecida com sucesso.");

  var cliente = {
    codigo : 1,
    nome : "Joel Rodrigues",
    endereco : {
        logradouro : "Rua Fulano de Tal",
        numero : "123",
        bairro : "Bairro Qualquer",
        cidade : "Rio de Janeiro",
        estado : "RJ"
    },
    status : "Ativo",
    pontos : 10
  };

  var colecao = db.collection("clientes");

  colecao.insertOne(cliente, function(erro, resultado){
    if(erro)
      console.log("Erro ao inserir documento: " + erro);
    else   
      console.log("Documento inserido com sucesso");
  });
 
  client.close();
});