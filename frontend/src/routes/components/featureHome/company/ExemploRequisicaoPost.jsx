import { useState } from 'react';
import axios from 'axios';

const ExemploRequisicaoPost = () => {
  const [dados, setDados] = useState({
    name: '',
    price: '',
    category: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDados((prevDados) => ({ ...prevDados, [name]: value }));
  };

  const handleEnviarRequisicaoPost = async () => {
    try {
      // Substitua 'sua_url_api' pela URL real da sua API
      const resposta = await axios.post('http://localhost:8080/product', dados);

      console.log('Resposta da Requisição POST:', resposta.data);
    } catch (erro) {
      console.error('Erro ao fazer requisição POST:', erro);
    }
  };

  return (
    <div>
      <h2>Enviar Requisição POST</h2>
      <form>
        <label>
          Nome:
          <input
            type="text"
            name="name"
            value={dados.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Preço:
          <input
            type="text"
            name="price"
            value={dados.price}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Categoria:
          <input
            type="text"
            name="category"
            value={dados.category}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="button" onClick={handleEnviarRequisicaoPost}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ExemploRequisicaoPost;
