import { useState } from 'react';
import styles from "./Welcome.module.css"
import cliente from "../../../assets/img/cliente.jpg"
import empresa from "../../../assets/img/empresa.jpg"

function Welcome() {
    const [isClienteHovered, setIsClienteHovered] = useState(false);
    const [isEmpresaHovered, setIsEmpresaHovered] = useState(false);

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
                        >
                            Empresa
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome;
