var MongoClient = require('mongodb').MongoClient;
 
var servidor = 'mongodb://localhost:27017/db_devmedia';
 
MongoClient.connect(servidor, {useUnifiedTopology: true} , function(erro, db) {
  if(erro)
    console.log("Erro ao estabelecer conexão:" + erro);
  else 
    console.log("Conexão estabelecida com sucesso.");
 
  db.close();
});