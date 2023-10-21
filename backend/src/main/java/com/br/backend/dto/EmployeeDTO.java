package com.br.backend.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class EmployeeDTO {
    private Long idEmployee;
    @Size(max = 255, message = "O NOME deve ter apenas 255 Caracteres!")
    private String name;
    private Integer badge; //crachá
    private String department; // departamento/setor
    @Email(message = "O formato do email é inválido!")
    @Size(max = 255, message = "O EMAIL deve ter apenas 255 Caracteres!")
    private String email;
    
}
