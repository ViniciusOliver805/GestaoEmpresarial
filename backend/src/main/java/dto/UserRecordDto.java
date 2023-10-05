package dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;
import lombok.Data;

// uma camada a mais de proteção
// dto = data transfer object / objeto de transfêrencia de dado
@Data
public class UserRecordDto {
    private Long idUsuario;
    @Size(max = 255, message = "O NOME deve ter apenas 255 Caracteres!")
    private String nome;
    private Integer cracha;
    private String setor;
    @Email(message = "O formato do email é inválido!")
    @Size(max = 255, message = "O EMAIL deve ter apenas 255 Caracteres!")
    private String email;
    private String senha;
}
