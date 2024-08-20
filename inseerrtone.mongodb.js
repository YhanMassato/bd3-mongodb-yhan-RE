//define o nome do banco de dados
const database = 'BD3-YHAN-AULA-RE'

//acessa o banco de dados database
use(database);

db["LIBRARY"].insertOne(
    { "titulo": "As Cavernas de Aço",
        "autor": "Isaac Asimov",
        "descricao": "As Cavernas de Aço, de Isaac Asimov, é o primeiro romance da consagrada Série dos Robôs, uma das mais populares da ficção científica. A história nasceu de um desafio: Asimov queria provar para seu editor que a ficção científica não era limitada e poderia ser incorporada a qualquer gênero literário, inclusive nos dramas policiais."}
)
