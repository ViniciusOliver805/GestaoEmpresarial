package com.br.backend.model;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Table(name = "tabela_de_registro_usuario") // é o nome da tabela no banco
@Data // para geração automatica de get e set
@Entity // para gerar a tabela no banco
public class UserModel implements UserDetails {
    @Id //indica que a variavel debaixo é onde iremos armazenar o id gerado
    @GeneratedValue(strategy = GenerationType.IDENTITY) //faz gera automatico o id sequencial
    private Long idUser;
    @Column(unique = true)
    private String usuario;
    private String nome;
    private Integer cracha;
    private String setor;
    @Column(unique = true) // nao permite o email senha duplicado ou seja ter dois igual no banco
    private String email;
    private String senha;
    private UserRole role;

    public UserModel() {
        // Construtor padrão
    }
    

    public UserModel(String usuario, String senha, UserRole role){
         this.usuario = usuario;
         this.senha = senha;
         this.role = role;
    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        if (this.role == UserRole.ADMIN) {
            return List.of(new SimpleGrantedAuthority("ROLE_ADMIN"), new SimpleGrantedAuthority("ROLE_USER"));
        } else {
            return List.of(new SimpleGrantedAuthority("ROLE_USER"));
        }
    }
    @Override
    public String getPassword() {
        return senha;
    }
    @Override
    public String getUsername() {
        return usuario;
    }
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }
    @Override
    public boolean isEnabled() {
        return true;
    }

}
