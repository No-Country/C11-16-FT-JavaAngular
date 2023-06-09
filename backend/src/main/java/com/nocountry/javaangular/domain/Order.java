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
    
	@ManyToOne
	@JoinColumn(
			name = "id_client",
			nullable = false,
			foreignKey = @ForeignKey(foreignKeyDefinition = "foreign key (id_client) references clients (id)")
	)
	private Client client;
	
	@ManyToOne
	@JoinColumn(
			name = "id_trip",
			nullable = false,
			foreignKey = @ForeignKey(foreignKeyDefinition = "foreign key (id_trip) references trips (id)")
	)
    private Trip trip;
    	
}
