import { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/usuarios')
      .then(res => setUsuarios(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Lista de Usuários</h2>
      <ul>
        {usuarios.map(usuario => (
          <li key={usuario.id}>
            <a href={`/dados/${usuario.id}`} target="_blank" rel="noopener noreferrer">
              <strong>{usuario.nome}</strong> - {usuario.idade} anos - {usuario.email}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

//...............