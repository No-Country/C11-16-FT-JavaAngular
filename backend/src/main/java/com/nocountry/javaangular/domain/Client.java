package com.nocountry.javaangular.domain;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "clients")
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String email;
    private String password;
    private String name;
    private String lastname;
    private String dni;
    private String country;
    @DateTimeFormat(pattern = "yyyy-MM-dd", iso = ISO.DATE)
    private LocalDate birth_date;
    private String profile_picture;
    
    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "favorites_id", insertable = false, updatable = false)
    private List<Trip> favorites;
    
    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "my_travels_id", insertable = false, updatable = false)
    private List<Trip> my_travels;
    
    @OneToMany(mappedBy = "client")
    @JsonIgnore
    private List<Order> orders = new ArrayList<>();

    @OneToMany(mappedBy = "client")
    @JsonIgnore
    private List<Review> reviews = new ArrayList<>();

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "users_roles",
            joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id")
            , inverseJoinColumns = @JoinColumn(name = "rol_id", referencedColumnName = "id_rol"))
    private List<Rol> roles = new ArrayList<>();
    
}
