package com.nocountry.javaangular.service.interfaces;

import com.nocountry.javaangular.domain.Client;

public interface ClientService {
	
	void createClient(Client client);
	Client searchById(Long id);
	void updateClient(Client client);

	Client getClientByEmail(String clientId);

}
