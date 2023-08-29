const express = require ('express');

const app = express();

// Rota principal

app.get ('/', function (request , response)
{
     response.send('API Funcionando...');
    
});

app.get('/autor', function(request , response){
    const info = {
        autor: "Luan",
        email: " luanmateus2002@gmail.com",
        telefone: "(69) 9.9373-5618"

    };

    response.json(info);
});
// iniciando a aplicação na porta 3000
app.listen(3000, function()
{
    console.log(' API Iniciada na porta: 3000')
});