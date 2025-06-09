import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/usuarios').then(res => setUsuarios(res.data));
  }, []);

  return (
    <Container>
      <Typography variant="h4">Lista de Usuários</Typography>
      <List>
        {usuarios.map(user => (
          <ListItem
            key={user.id}
            button
            onClick={() => window.open(`/dados/${user.id}`, '_blank')}
          >
            <ListItemText primary={user.nome} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

//...........