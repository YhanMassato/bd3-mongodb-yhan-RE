const database = 'BD3-YHAN-AULA-RE'

//acessa o banco de dados database
use(database);


// db["LIBRARY"].updateOne(
//     { titulo: "O Sol Desvelado"},
//     { $set:{valor:500}}
// )

db["LIBRARY"].updateMany(
    { autor:"J.R.R Tolkien"},
    { $set:{autor:"Tolki-chan"}}
)