package com.br.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.br.backend.model.UserModel;

public interface UserRepository extends JpaRepository<UserModel, Long> {
}
