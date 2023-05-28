package com.nocountry.javaangular.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String status;
    private Integer seat;
	private String payment_status;
	private String payment_method;
	private double taxes;
	private double final_price;
    
    @ManyToOne(cascade = CascadeType.ALL)
    //@JoinColumn(name = "id_client") se hace por defecto
    private Client client;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    //@JoinColumn(name = "id_trip")
    private Trip trip;
}