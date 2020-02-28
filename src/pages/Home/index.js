import React from 'react';

// import { Container } from './styles';

import { Form, Input } from '@rocketseat/unform'

export default function Home() {

  function handleSubmit({ contact }) {
    console.log(contact);
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Insira o nome" />
        <Input name="telefone" type="text" placeholder="Insira o telefone" />
        <button type="submit">Buscar</button>
      </Form>
    </>
  );
}
