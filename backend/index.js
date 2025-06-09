const express = require('express');
const cors = require('cors');
const users = require('./mockData');
const app = express();

app.use(cors());

app.get('/usuarios', (req, res) => {
  res.json(users);
});

app.get('/usuarios/:id', (req, res) => {
  const user = users.find(u => u.id === req.params.id);
  if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });
  res.json(user);
});

app.listen(3001, () => console.log('API rodando na porta 3001'));

app.use(express.json()); 

app.post('/usuarios', (req, res) => {
  const { nome, idade, email, endereco, profissao } = req.body;
  const novoUsuario = {
    id: (Math.floor(Math.random() * 1000000)).toString(),
    nome,
    idade,
    email,
    endereco,
    profissao
  };

  users.push(novoUsuario); // adiciona no array mockado
  res.status(201).json(novoUsuario);
});
//...
//....