//define o nome do banco de dados
const database = 'BD3-YHAN-AULA-RE'

//define o nome da coleção
const collection = 'LIBRARY'

//acessa o banco de dados database
use(database);

//cria a collection na database
db.createCollection(collection);