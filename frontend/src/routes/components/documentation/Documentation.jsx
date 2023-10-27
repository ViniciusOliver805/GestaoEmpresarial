import { Link } from "react-router-dom";
import styles from "./Documentation.module.css";

function Documentation() {
    return (
        <div className={styles.container}>
            <div className={styles.background_apresentacao}>
                <h1>Projeto Gestão Empresarial - Documentação Detalhada</h1>

                <h2>1. Introdução</h2>

                <h3>1.1 Descrição do Projeto</h3>
                <p>Breve explicação do propósito e funcionalidades do projeto.</p>

                <h3>1.2 Tecnologias Utilizadas</h3>
                <ul>
                    <li>Frontend: React, Vite</li>
                    <li>Backend: Spring Framework, Spring Security, MySQL</li>
                    <li>Ferramentas de Containerização: Docker</li>
                </ul>

                <h2>2. Estrutura do Projeto</h2>

                <h3>2.1 Diretórios Principais</h3>
                <pre>
                    projeto
                    |-- backend
                    |   |-- src
                    |   |   |-- ...
                    |   |-- Dockerfile
                    |-- frontend
                    |   |-- src
                    |   |   |-- ...
                    |   |-- Dockerfile
                    |-- docker-compose.yml
                    |-- README.md
                </pre>

                <h2>3. Configuração do Ambiente</h2>

                <h3>3.1 Configuração do Ambiente de Desenvolvimento</h3>
                <p>Instruções detalhadas sobre como configurar o ambiente de desenvolvimento, incluindo:</p>
                <ul>
                    <li>Instalação do Node.js</li>
                    <li>Instalação do Java</li>
                    <li>Configuração do IDE (por exemplo, Visual Studio Code)</li>
                    <li>Configuração de variáveis de ambiente</li>
                </ul>

                <h3>3.2 Instalação de Dependências</h3>
                <p>Comandos para instalar todaa as dependências necessárias tanto para o frontend quanto para o backend.</p>

                <h2>4. Configuração do Banco de Dados</h2>

                <h3>4.1 Instalação do MySQL</h3>
                <p>Instruções para instalar o MySQL no ambiente local.</p>

                <h3>4.2 Configuração do Banco de Dados</h3>
                <p>Instruções sobre como criar o banco de dados e tabelas necessárias.</p>

                <pre>
                    CREATE DATABASE my_database;
                    USE my_database;

                    CREATE TABLE my_table (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    name VARCHAR(255),
                    ...
                    );
                </pre>

                <h3>4.3 Configuração de Acesso ao Banco de Dados</h3>
                <p>Detalhes sobre como configurar a conexão com o MySQL no backend Spring.</p>
                <pre>
                    spring.datasource.url=jdbc:mysql://localhost:3306/my_database
                    spring.datasource.username=seu_usuario
                    spring.datasource.password=sua_senha
                </pre>

                <h2>5. Configuração do Backend</h2>

                <h3>5.1 Compilação e Execução do Backend</h3>
                <p>Comandos para compilar e iniciar o servidor backend.</p>

                <pre>
                    cd backend
                    ./gradlew build
                    ./gradlew bootRun
                </pre>

                <h3>5.2 Configurações no <code>application.properties</code></h3>
                <p>Destaque das configurações importantes, como URL do banco de dados, porta do servidor, etc.</p>

                <p>
                    # application.properties

                    spring.datasource.url=jdbc:mysql://localhost:3306/my_database
                    spring.datasource.username=seu_usuario
                    spring.datasource.password=sua_senha

                </p>

                <h3>5.3 Configuração do Spring Security</h3>
                <p>Informações sobre a configuração de autenticação e autorização.</p>

                <h2>6. Configuração do Frontend</h2>

                <h3>6.1 Instalação de Dependências do Frontend</h3>
                <p>Comandos para instalar as dependências do frontend.</p>

                <pre>
                    cd frontend
                    npm install
                </pre>

                <h3>6.2 Execução do Servidor de Desenvolvimento</h3>
                <p>Comandos para iniciar o servidor de desenvolvimento do frontend.</p>

                <pre>
                    npm run dev
                </pre>

                <h2>7. Docker</h2>

                <h3>7.1 Construção dos Contêineres</h3>
                <p>Instruções sobre como construir os contêineres Docker para o backend e o frontend.</p>

                <pre>
                    docker build -t nome_da_imagem:tag ./backend
                    docker build -t nome_da_imagem:tag ./frontend
                </pre>

                <h3>7.2 Utilizando <code>docker-compose</code></h3>
                <p>Comandos para iniciar os contêineres utilizando o arquivo <code>docker-compose.yml</code>.</p>

                <pre>
                    docker-compose up
                </pre>

                <h2>8. Como Usar</h2>

                <h3>8.1 Inicializando o Projeto</h3>
                <p>Passos para iniciar o servidor backend e frontend.</p>

                <h3>8.2 Acessando a Aplicação</h3>
                <p>URL para acessar a aplicação no navegador.</p>

                <h2>9. Possíveis Problemas e Soluções</h2>

                <h3>9.1 Solução de Problemas Comuns</h3>
                <p>Lista de problemas comuns e suas soluções.</p>

                <h2>10. Contribuição</h2>

                <h3>10.1 Diretrizes de Contribuição</h3>
                <p>Instruções para contribuir com o projeto.</p>

                <h2>11. Licença</h2>

                <h3>11.1 Tipo de Licença</h3>
                <p>Especificação da licença sob a qual o projeto é lançado.</p>

                <h2>12. Referências</h2>

                <h3>12.1 Bibliotecas e Recursos Utilizados</h3>
                <p>Lista de bibliotecas, frameworks e recursos referenciados.</p>

                <h2>13. Exemplo de Código</h2>

                <h3>13.1 Trechos de Código Relevantes</h3>
                <p>Exemplos de código com explicações detalhadas.</p>
                <div className={styles.buttond} >
                    <Link className={styles.inicioprojeto} to="/welcome">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        IR PARA O PROJETO
                    </Link>
                </div>

            </div>

        </div>


    )
}

export default Documentation