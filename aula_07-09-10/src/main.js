// Importando a biblioteca e definindo uma aplicação tipo express
const express = require('express');
const app = express();

app.use(express.json());

// Definindo Endpoint (Rotas), pontos de entrada da API
app.get('/', function (request, response) {
  response.send('API Funcionando...');
});

app.get('/sobre', function (request, response) {
  response.send('Informações sobre a API.');
});

  const listaContatos = [
    {
      codigo: 1,
      nome: "Christine Ray",
      data: "2023-02-06",
      telefone: "(284) 901-8328",
      email: "mauris@protonmail.ca"
    },
    {
      codigo: 2,
      nome: "Eagan Hutchinson",
      data: "2023-02-04",
      telefone: "(892) 511-7166",
      email: "eget.odio@icloud.org"
    },
    {
      codigo: 3,
      nome: "Brock Lambert",
      data: "2023-03-09",
      telefone: "1-457-158-4122",
      email: "nullam.vitae.diam@yahoo.org"
    },
    {
      codigo: 4,
      nome: "Craig Vinson",
      data: "2024-06-21",
      telefone: "(437) 598-0259",
      email: "nunc.sed@google.ca"
    },
  ];
  // Listar todos os contatos
  app.get('/contatos', function (request, response) {
    return response.json({ dados: listaContatos });
  });
 
  // criar um novo contato
  app.post('/contatos', function(request, response){
    const nome = request.body.nome;
    const data = request.body.data;
    const telefone = request.body.telefone;
    const email = request.body.email;

    const quantidade = listaContatos.length;

    const novoContato = {
      codigo: quantidade + 1,
      nome: nome,
      data: data,
      telefone: telefone,
      email: email,
    };
  
    listaContatos.push(novoContato);
    return response.json(novoContato);
  });
  
  
  
  // Editar um contato ja existe
  
  app.put('/contato/:codigo', function(request, response){
    const codigo = request.params.codigo;
  
      let contato = null;

  for (const _contato of listaContatos) {
    if (_contato.codigo == codigo) {
      contato = _contato;
    }
  }

  if (contato == undefined) {
    return response.json({ erro: `Contato #${codigo} não foi encontrado.` });
  }

  const nome = request.body.nome;
  const data = request.body.data;
  const telefone = request.body.telefone;
  const email = request.body.email;

  contato.nome = nome;
  contato.data = data;
  contato.telefone = telefone;
  contato.email = email;

  return response.json(contato);
}); 
  
  
  // Excluir/remover um contato
  app.delete('/contatos/codigo',function(request, response){
    const codigo = request.params.codigo;
  
    return response.send(`Remover o contato de codigo: ${codigo}`);
  
  });
  
  

// Iniciando a aplicação na porta definida (porta 3000)
app.listen(3000, function () {
  console.log('API iniciada na porta: 3000');
});



