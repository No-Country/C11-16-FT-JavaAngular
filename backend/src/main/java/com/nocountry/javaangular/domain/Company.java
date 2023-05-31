package com.nocountry.javaangular.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "companies")
public class Company {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String contact_number;
    @ElementCollection
    private List<String> contact_links;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "company")
    @JsonIgnore
    private List<Client> admins;
    @OneToMany(mappedBy = "company")
    @JsonIgnore
    private List<Client> clients = new ArrayList<>();
    
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "company")
    @JsonIgnore
    private List<Review> reviews;
     
}
