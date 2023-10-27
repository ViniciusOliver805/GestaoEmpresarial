import styles from "./Home.module.css"
import eu from "../../../assets/img/eu.png"
import java from "../../../assets/img/java.png"
import { Link } from "react-router-dom"


function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.background_apresentacao}>
        <div className={styles.fotoperfil}>
          <img src={eu} alt="fotoperfil" />
        </div>
        <div className={styles.saudacao}>
          <h1>Olá, sou o Vinicius Oliver.</h1>
        </div>

        <div className={styles.especializacao} >
          <h1>Desenvolvedor Java | Backend <img src={java} alt="java" /></h1>
          <hr />
        </div>
        <div className={styles.sobreprojeto} >
          <h1>O projeto a seguir foi desenvolvido com o intuito de adquirir conhecimento e aprimorar minhas habilidades como desenvolvedor backend.</h1>
        </div>
        <div className={styles.buttond} >
          <Link className={styles.dale} to="/documentation">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            PROJETO + DOC
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Home