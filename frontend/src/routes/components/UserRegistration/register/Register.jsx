import styles from "./Register.module.css"
import axios from 'axios';



function register() {
    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        const userData = {
            nome: formData.get('nome'),
            cracha: formData.get('cracha'),
            setor: formData.get('setor'),
            email: formData.get('email'),
            senha: formData.get('senha'),
        };

        try {
            const response = await axios.post('http://localhost:8080/users', userData);
            console.log('Resposta do servidor:', response.data);

            const mensagem = `
                    Usuário registrado com sucesso!

                    Nome: ${userData.nome}
                    Crachá: ${userData.cracha}
                    Setor: ${userData.setor}
                    Email: ${userData.email}
                `;

            const confirmacao = window.confirm(mensagem);
            // Se a resposta do servidor for bem-sucedida, você pode lidar com ela aqui

            if (confirmacao == true) {
                window.location.href = '/login'
            }
            else {
                try {
                    await axios.delete(`http://localhost:8080/users/${response.data.idUser}`);
                    console.log('Usuário excluído com sucesso!');
                    window.location.reload();
                } catch (error) {
                    console.error('Erro ao excluir usuário:', error);
                }

            }



        } catch (error) {
            // Em caso de erro, você pode lidar com ele aqui
            console.error('Erro ao enviar dados:', error);
        }
    }


    return (
        <div className={styles.container}>
            <h2>Formulário de Registro</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.form_group}>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" required />
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="cracha">Crachá:</label>
                    <input type="number" id="cracha" name="cracha" required />
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="setor">Setor:</label>
                    <input type="text" id="setor" name="setor" required />
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="senha">Senha:</label>
                    <input type="password" id="senha" name="senha" required />
                </div>
                {/* <div className={styles.form_group}>
                    <label htmlFor="confirmar-senha">Confirmar Senha:</label>
                    <input type="password" id="confirmar-senha" name="confirmar-senha" required />
                </div> */}
                <div className={styles.form_group}>
                    <button type="submit">Registrar</button>
                </div>
            </form>
        </div>
    )
}

export default register;