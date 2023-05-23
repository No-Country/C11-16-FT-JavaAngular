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
public class Viaje {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private Long id_empresa;
    private String type;
    private String status;
    private String origin;
    private String destino;
    private Double price;
    private Integer stops;
    private LocalDate salida;
    private LocalDate arrival;
    private Boolean allows_changes;
    private Boolean allows_cancel;
    private List<Integer> seats;
}
