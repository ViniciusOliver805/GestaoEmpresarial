package com.br.backend.dto;

import com.br.backend.model.UserRole;

import jakarta.validation.constraints.Size;
import lombok.Data;

// uma camada a mais de proteção
// dto = data transfer object / objeto de transfêrencia de dado
@Data
public class UserRecordDto {
    private Long idUser;
    @Size(max = 20, message = "O limite para o campo 'Usuário' é de 20 caracteres")
    private String userSystem;
    private String password;
    private UserRole role;
}
