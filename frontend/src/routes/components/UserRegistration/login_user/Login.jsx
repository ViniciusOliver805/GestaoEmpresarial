import styles from "./Login.module.css"
import logo from "../../../../assets/img/logo.png"
import { Link } from "react-router-dom"
function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.background_side}>
      </div>
      
      <div className={styles.form}>

        <form action="#" method="post" className={styles.form}>
          <div className={styles.logo}> <img src={logo} alt="logo" /> </div>

          <div className={styles.formGroup}>
            <input type="text" name="username" placeholder="Usuário" required className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <input type="password" name="password" placeholder="Senha" required className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <button type="submit" className={styles.button}>Entrar</button>
            <Link to="/register">Não tem uma conta? Faça já o cadastro</Link>
          </div>
        </form>

      </div>

    </div>
  )
}

export default Login