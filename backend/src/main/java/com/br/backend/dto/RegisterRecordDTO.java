package com.br.backend.dto;

import com.br.backend.model.UserRole;

public record RegisterRecordDTO(String usuario, String senha, UserRole role) {
    
}
