package com.nocountry.javaangular.domain;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "trips")
public class Trip {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String type;
    private String status;
    private String origin;
    private String destination;
    private Double price;
    private Integer stops;
    @DateTimeFormat(pattern = "yyyy.MM.dd", iso = ISO.DATE)
    @Temporal(TemporalType.DATE)
    private Date departure;
    @Temporal(TemporalType.DATE)
    @DateTimeFormat(pattern = "yyyy.MM.dd", iso = ISO.DATE)
    private Date arrival;
    private Boolean allows_changes;
    private Boolean allows_cancel;
    private String image;
    private Integer available_seats;
    private Integer children;
    private Integer adults;

    //private List<Integer> taken_seats;
    //private List<Integer> seats;

    
    @OneToMany(mappedBy = "trip")
    @JsonIgnore
    private List<Order> orders = new ArrayList<>();

    @ManyToOne
    @JoinColumn(
            name = "id_company",
            nullable = true,
            foreignKey = @ForeignKey(foreignKeyDefinition = "foreign key (id_company) references companies (id)")
    )
    private Company company;

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY,mappedBy = "favorites")
    private List<Client> client_favorites;
    
    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY,mappedBy = "my_travels")
    private List<Client> client_mytrips;

//    @ManyToOne(cascade = CascadeType.ALL)
//    private Hotel hotel;
}
