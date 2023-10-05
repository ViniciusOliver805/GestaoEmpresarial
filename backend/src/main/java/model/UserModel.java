package model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity // para gerar a tabela no banco
@Table(name = "tabela_de_registro_usuario") // é o nome da tabela no banco
@Data // para geração automatica de get e set
public class UserModel {
    @Id //indica que a variavel debaixo é onde iremos armazenar o id gerado
    @GeneratedValue(strategy = GenerationType.IDENTITY) //faz gera automatico o id
    private Long idUsuario;
    private String nome;
    private Integer cracha;
    private String setor;
    @Column(unique = true) // nao permite o email senha duplicado ou seja ter dois igual no banco
    private String email;
    private String senha;
}
