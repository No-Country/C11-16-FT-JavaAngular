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
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private List<Order> orders;
    private String email;
    private String password;
    private String name;
    private String lastname;
    private String dni;
    private String country;
    private LocalDate birth_date;
    private List<Trip> favorites;
    private List<Trip> my_travels;
    private String profile_picture;
    private Boolean is_admin;
}
