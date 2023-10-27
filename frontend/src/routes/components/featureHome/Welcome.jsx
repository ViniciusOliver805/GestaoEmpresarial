import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import styles from "./Welcome.module.css";
import cliente from "../../../assets/img/cliente.jpg";
import empresa from "../../../assets/img/empresa.jpg";

function Welcome() {
  const [isClienteHovered, setIsClienteHovered] = useState(false);
  const [isEmpresaHovered, setIsEmpresaHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  }

  const handleSenhaChange = (e) => {
    setSenha(e.target.value);
  }

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicione aqui a lógica para lidar com o envio do formulário (autenticação, etc.)
    // Por exemplo, você pode enviar os dados para um servidor aqui.
    // Depois de lidar com a autenticação, você pode fechar o modal chamando a função handleModalClose.
    handleModalClose();
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
            <Form.Group controlId="formBasicLogin">
              <Form.Label>Login</Form.Label>
              <Form.Control type="text" placeholder="Digite o login" value={login} onChange={handleLoginChange} required />
            </Form.Group>
            <Form.Group controlId="formBasicSenha">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" placeholder="Digite a senha" value={senha} onChange={handleSenhaChange} required />
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
  )
}

export default Welcome;
