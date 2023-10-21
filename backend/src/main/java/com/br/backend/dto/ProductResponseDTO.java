package com.br.backend.dto;

import com.br.backend.model.ProductModel;

public record ProductResponseDTO(String id, String name, Integer price) {
    public ProductResponseDTO(ProductModel product){
        this(product.getId(), product.getName(), product.getPrice());
    }
}
