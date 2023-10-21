package com.br.backend.dto;

import com.br.backend.model.UserRole;

public record RegisterRecordDTO(String userSystem, String password, UserRole role) {
    
}
