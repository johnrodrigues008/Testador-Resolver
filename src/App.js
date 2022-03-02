import { useEffect, useState } from "react";

import './App.css';

import { Container } from './styled';

export function App() {
  const [ repositories, setRepositories ] = useState([])

  useEffect(() => {
    fetch('https://gist.githubusercontent.com/alencarlucas/4cd794e2e44bbe926ea4ab28da2fa3e7/raw/2c304035b03c3c5e2e708e4e82c49a42899e47ed/fiter.json')
    .then(response => response.json())
    .then(data => setRepositories(data))

  }, [])

  return (
    <Container>
      <ul>
          { repositories.map(repository =>{
            return(
              <div>
                <div className="card-foto">
                  <p className="foto">{repository.foto}</p>
                </div>
                <p>{repository.nome}</p>
                <p>{repository.cargo}</p>
                <p>{repository.telefone}</p>
              </div>
            )
          })}
      </ul>
  
    </Container>
  );
}


/* Instalei o styled components */