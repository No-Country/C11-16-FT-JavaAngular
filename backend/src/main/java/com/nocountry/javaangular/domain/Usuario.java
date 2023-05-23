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
@Table(name = "usuarios")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private List<Pedido> pedidos;
    private String email;
    private String password;
    private String nombre;
    private String apellido;
    private String dni;
    private String pais;
    private LocalDate fecha_nacimiento;
    private List<Viaje> favoritos;
    private List<Viaje> mis_viajes;
    private String imagen_perfil;
    private Boolean es_admin;
}
