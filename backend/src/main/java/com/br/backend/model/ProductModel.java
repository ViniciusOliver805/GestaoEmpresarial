package com.br.backend.model;

import com.br.backend.dto.ProductRequestDTO;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name = "product")
@Entity(name = "product")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class ProductModel {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    private String name;

    private Integer price;

    public ProductModel(ProductRequestDTO data){
        this.price = data.price();
        this.name = data.name();
    }
}
