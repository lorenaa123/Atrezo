import React, {useState} from 'react';
import {Container} from 'reactstrap';


export const Dashboard = () => {
  const userMock = {name: "Jules Verne", uuid: "01"};
  const [user, setUser] = useState(userMock);

  return (
    <Container>
      <div className="d-flex flex-column justify-content-center align-items-center text-white">
        <h2 className="mb-5">Hola {user.name},</h2>
        <h2 className="mb-5">Bienvenido a ATREZO DISTRIBUCIONES</h2>
        <p className="mb-5 fnt-18">¿Qué vamos a hacer hoy?</p>
      </div>
    </Container>
  )
}
