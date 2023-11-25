import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import styles from "./Welcome.module.css";
import cliente from "../../../assets/img/cliente.jpg";
import empresa from "../../../assets/img/empresa.jpg";

import { useNavigate } from 'react-router-dom'; // Mude esta linha


function Welcome() {
  const [isClienteHovered, setIsClienteHovered] = useState(false);
  const [isEmpresaHovered, setIsEmpresaHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [userSystem, setUserSystem] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate(); // Mude esta linha


  const handleUserSystemChange = (e) => {
    setUserSystem(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleModalClose = () => {
    setShowModal(false);
    setErrorMessage('');
  }

  const handleModalShow = () => {
    setShowModal(true);
    setErrorMessage('');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:8080/auth/login',
        {
          userSystem: userSystem,
          password: password
        }
      );

      const token = response.data.token;
      console.log('Token:', token);
      localStorage.setItem('token', token);

      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      const userRole = decodedToken.sub || ''; // Use 'sub' ao invés de 'roles'

      // Condição de verificação (ajuste conforme necessário)
      if (userRole === 'admin') {
        console.log('Parabéns, você tem permissão!');
        navigate('/produtoteste');

        // Adicione aqui qualquer lógica adicional que você precise
      } else {
        console.log('Você não tem permissão.');
        // Adicione aqui qualquer lógica adicional que você precise
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setErrorMessage('Credenciais inválidas. Por favor, tente novamente.', errorMessage);
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.background_apresentacao}>
        <div className={styles.cliente_empresa}>
          <img
            src={cliente}
            alt="cliente"
            style={{ filter: isClienteHovered ? 'blur(5px)' : 'none' }}
          />
          <div className={styles.buttonContainer}>
            <button
              className={styles.button}
              onMouseEnter={() => setIsClienteHovered(true)}
              onMouseLeave={() => setIsClienteHovered(false)}
            >
              Cliente
            </button>
          </div>
        </div>

        <div className={styles.cliente_empresa}>
          <img
            src={empresa}
            alt="empresa"
            style={{ filter: isEmpresaHovered ? 'blur(5px)' : 'none' }}
          />
          <div className={styles.buttonContainer}>
            <button
              className={styles.button}
              onMouseEnter={() => setIsEmpresaHovered(true)}
              onMouseLeave={() => setIsEmpresaHovered(false)}
              onClick={handleModalShow}
            >
              Empresa
            </button>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login da Empresa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Olá administrador, coloque seu usuário e senha para prosseguirmos</p>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicUserSystem">
              <Form.Label>User System</Form.Label>
              <Form.Control type="text" placeholder="Digite o usuário" value={userSystem} onChange={handleUserSystemChange} required />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Digite a senha" value={password} onChange={handlePasswordChange} required />
            </Form.Group>
            <Button variant="primary" type="submit">
              Entrar
            </Button>
            <Button variant="danger" onClick={handleModalClose} className="ml-2">
              Cancelar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Welcome;
