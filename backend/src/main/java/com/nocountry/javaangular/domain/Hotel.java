package com.nocountry.javaangular.domain;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "hotels")
public class Hotel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String ubicacion;
    private String contact;
    private String description;
    private List<String> items;
    private String estadia;

    @OneToMany(mappedBy = "hotel")
    @JsonIgnore
    private List<Trip> trips = new ArrayList<>();
}
