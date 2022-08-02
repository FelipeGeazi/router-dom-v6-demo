import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import api from '../../services/api';
import { Card, List } from './styles';

const Home = () => {
  const [ninjas, setNinjas] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [name, setName] = useState('');

  useEffect(() => {
    api.get(`/characters`, {
      params: {
        offset: 0,
        limit: 100,
        name: searchParams.get('tomate')
      }
    }).then((response) => setNinjas(response.data))
  }, [searchParams]);

  function handleSubmit(e) {
    e.preventDefault();
    setSearchParams({ banana: name, tomate: 4 })
    console.log(name);
  }

  return (
    <>
      <h1>Tsunode Shippuden</h1>

      <form onSubmit={handleSubmit}>
        <input type='text' onChange={e => setName(e.target.value)} />
        <button type='submit'>Buscar</button>
      </form>

      <List>
        {ninjas.map(ninja =>
          <Card key={ninja.id}>
            <Link to={`/shinobis/${ninja.id}`}>
              <span>
                {ninja.name}
              </span>
              <img src={ninja.images[0]} alt={ninja.name} />
            </Link>
          </Card>
        )}
      </List>
    </>
  )
}

export default Home;