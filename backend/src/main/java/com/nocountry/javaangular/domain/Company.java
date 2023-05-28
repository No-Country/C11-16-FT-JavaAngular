package com.nocountry.javaangular.domain;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "companies")
public class Company {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_company")
    private Long idCompany;
    private String name;
    private String contact_number;
    private List<String> contact_links;
    
    @OneToMany(cascade = CascadeType.ALL,mappedBy = "company")
    //@JoinColumn(name = "id-admins")
    private List<Client> admins;
    
    @OneToMany(cascade = CascadeType.ALL,mappedBy = "company")
    //@JoinColumn(name = "id_reviews")
    private List<Review> reviews;
    
//	@ManyToOne
//	@JoinColumn(
//			name = "id_admins",
//			nullable =  false,
//			foreignKey = @ForeignKey(foreignKeyDefinition = "foreign key(id_admins) references clients (id_client)")
//	)
//	private Client client;
	
//  @ManyToOne(cascade = CascadeType.ALL)
//  @JoinColumn(name = "id_admins")
//  private Client admins;
//  
//  @ManyToOne(cascade = CascadeType.ALL)
//  @JoinColumn(name = "id_reviews")
//  private Review reviews;
//    
}
