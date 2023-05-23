package com.nocountry.javaangular.domain;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "viajes")
public class Travel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private Long id_empresa;
    private String tipo;
    private String estado;
    private String origen;
    private String destino;
    private Double precio;
    private Integer escalas;
    private LocalDate salida;
    private LocalDate llegada;
    private Boolean acepta_cambios;
    private Boolean acepta_cancelamiento;
    private List<Integer> asientos;
}
