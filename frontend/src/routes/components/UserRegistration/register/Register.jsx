import styles from "./Register.module.css"

function register() {
    return (
        <div className={styles.container}>
            <h2>Formulário de Registro</h2>
            <form>
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
                    <select id="setor" name="setor" required>
                        <option value="">Selecione um setor</option>
                        <option value="expedicao">Expedição</option>
                        <option value="almoxarifado">Almoxarifado</option>
                        <option value="producao">Produção</option>
                        <option value="qualidade">Qualidade</option>
                        <option value="logistica">Logística</option>
                        <option value="marketing">Marketing</option>
                        <option value="vendas">Vendas</option>
                        <option value="financeiro">Financeiro</option>
                        <option value="rh">Recursos Humanos</option>
                        <option value="ti">Tecnologia da Informação</option>
                        <option value="juridico">Jurídico</option>
                    </select>
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="senha">Senha:</label>
                    <input type="password" id="senha" name="senha" required />
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="confirmar-senha">Confirmar Senha:</label>
                    <input type="password" id="confirmar-senha" name="confirmar-senha" required />
                </div>
                <div className={styles.form_group}>
                    <button type="submit">Registrar</button>
                </div>
            </form>
        </div>
    )
}

export default register;