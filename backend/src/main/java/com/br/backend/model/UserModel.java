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
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name = "TabelaDeUsuarios") // é o nome da tabela no banco
@Getter
@Entity(name = "TabelaDeUsuarios") // para gerar a tabela no banco
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "idUser")
public class UserModel implements UserDetails {
    @Id //indica que a variavel debaixo é onde iremos armazenar o id gerado
    @GeneratedValue(strategy = GenerationType.IDENTITY) //faz gera automatico o id sequencial
    private Long idUser;
    @Column(unique = true)
    private String userSystem;
    private String password;
    private UserRole role;
  

    public UserModel(String userSystem, String password, UserRole role){
         this.userSystem = userSystem;
         this.password = password;
         this.role = role;
    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        if (this.role == UserRole.ADMIN) return List.of(new SimpleGrantedAuthority("ROLE_ADMIN"), new SimpleGrantedAuthority("ROLE_USER"));
        else return List.of(new SimpleGrantedAuthority("ROLE_USER"));
        
    }
    @Override
    public String getUsername() {
        return userSystem;
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
