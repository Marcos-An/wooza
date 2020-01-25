import React, { useState, useEffect } from 'react';
import Card from '../../Components/Cards';
import { Body, Cards, Content, Title, Sub } from './styled';

const API_URL = '/api/users';

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    callApi()
      .then(result => setData(result))
      .catch(() => console.log('Error'));
  }, []);

  const callApi = async () => {
    const response = await fetch(API_URL);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };
  return (
    <Content>
      <Sub>NOSSOS</Sub>
      <Title>USUÁRIOS</Title>
      <Body>
        <Cards>
          {data.map(item => (
            <Card item={item} />
          ))}
        </Cards>
      </Body>
    </Content>
  );
}
