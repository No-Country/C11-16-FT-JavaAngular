package com.nocountry.javaangular.domain;

import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.time.LocalDate;
import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;
import org.springframework.format.annotation.DateTimeFormat;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "reviews")
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String content;
    private Double rating;
    @Temporal(TemporalType.DATE)
    @DateTimeFormat(pattern = "yyyy.MM.dd", iso = DateTimeFormat.ISO.DATE)
    private Date createdDateTime;
    @ManyToOne
    @JoinColumn(
            name = "client_id",
            nullable = true,
            foreignKey = @ForeignKey(foreignKeyDefinition = "foreign key (client_id) references reviews (id)")
    )
    private Client client;
    @ManyToOne
    @JoinColumn(
            name = "company_id",
            nullable = true,
            foreignKey = @ForeignKey(foreignKeyDefinition = "foreign key (company_id) references reviews (id)")
    )
    @JsonIdentityInfo(
            generator = ObjectIdGenerators.PropertyGenerator.class,
            property = "id")
    private Company company;
}
