package com.nocountry.javaangular.domain;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "trips")
public class Trip {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_trip")
    private Long idTrip;
    private String type;
    private String status;
    private String origin;
    private String destination;
    private Double price;
    private Integer stops;
    @DateTimeFormat(pattern = "yyyy-MM-dd", iso = ISO.DATE)
    private LocalDate departure;
    @DateTimeFormat(pattern = "yyyy-MM-dd", iso = ISO.DATE)
    private LocalDate arrival;
    private Boolean allows_changes;
    private Boolean allows_cancel;
    private String image;
    private Integer available_seats;
    
    private List<Integer> taken_seats;
    
    private List<Integer> seats;
    
    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "id_company")
    private Company company;
    
//	@OneToMany(mappedBy = "my_travels")
//	private List<Client> my_travels;
//	
//	@OneToMany(mappedBy = "favorites")
//	private List<Client> favorites;
    
}
