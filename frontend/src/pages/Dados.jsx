import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography } from '@mui/material';

export default function Dados() {
  const { id } = useParams();
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/usuarios/${id}`).then(res => setUsuario(res.data));
  }, [id]);

  if (!usuario) return <Typography>Carregando...</Typography>;

  return (
    <Container>
      <Typography variant="h4">Detalhes do Usuário</Typography>
      <Typography>ID: {usuario.id}</Typography>
      <Typography>Nome: {usuario.nome}</Typography>
      <Typography>Idade: {usuario.idade}</Typography>
      <Typography>Email: {usuario.email}</Typography>
    </Container>
  );
}

//..............