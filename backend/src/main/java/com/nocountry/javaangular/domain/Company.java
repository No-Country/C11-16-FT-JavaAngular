package com.nocountry.javaangular.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Type;

import java.util.List;
import java.util.UUID;

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
    private List<String> contact_links;
    
    @OneToMany(cascade = CascadeType.ALL,mappedBy = "company")
    private List<Client> admins;
    
    @OneToMany(cascade = CascadeType.ALL,mappedBy = "company")
    private List<Review> reviews;
     
}
